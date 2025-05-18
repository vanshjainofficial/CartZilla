import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import TypingSparkle from "./TypingSparkle";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import "./Product.css";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const saleEndTime = new Date().getTime() + 90 * 1000;

  const getRemainingTime = () => {
    const now = new Date().getTime();
    const difference = saleEndTime - now;
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    return { minutes, seconds, expired: difference <= 0 };
  };

  const [timeLeft, setTimeLeft] = useState(getRemainingTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getRemainingTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let componentMounted = true;
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      if (componentMounted) {
        const products = await response.json();
        setData(products);
        setFilter(products);
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };

  const Loading = () => (
    <>
      <div className="col-12 py-5 text-center">
        <Skeleton height={40} width={560} />
      </div>
      {[...Array(6)].map((_, index) => (
        <div key={index} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      ))}
    </>
  );

  const ShowProducts = () => (
    <>
      <div className="buttons text-center py-5">
        <button className="btn-outline-dark btn-sm m-2" onClick={() => setFilter(data)}>
          All
        </button>
        <button className="btn-outline-dark btn-sm m-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
        <button className="btn-outline-dark btn-sm m-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
        <button className="btn-outline-dark btn-sm m-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
        <button className="btn-outline-dark btn-sm m-2" onClick={() => filterProduct("electronics")}>Electronics</button>
      </div>

      {filter.map((product) => (
        <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <div className="card">
            <img
              className="card-img-top"
              src={product.image}
              alt="Card"
            />
            <div className="card-body">
              <h5 className="card-title">{product.title.substring(0, 12)}...</h5>
              <p className="card-text">{product.description.substring(0, 90)}...</p>
            </div>
            <ul className="product-info-list">
  <li className="product-price">$ {product.price}</li>
  <li className={`product-timer ${timeLeft.expired ? "expired" : ""}`}>
    {timeLeft.expired
      ? "Flash Sale Ended"
      : `Ends in ${timeLeft.minutes}m ${timeLeft.seconds}s`}
  </li>
</ul>

            <div className="card-body">
            <Link
  to={`/product/${product.id}`}
  className={`btn-custom m-1 ${timeLeft.expired ? "btn-disabled" : ""}`}
  onClick={(e) => timeLeft.expired && e.preventDefault()}
>
  Buy Now
</Link>
<button
  className={`btn-custom ${timeLeft.expired ? "btn-disabled" : ""}`}
  onClick={() => {
    toast.success("Added to cart");
    addProduct(product);
  }}
  disabled={timeLeft.expired}
>
  Add to Cart
</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-12">
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <TypingSparkle />
          </div>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
};

export default Products;