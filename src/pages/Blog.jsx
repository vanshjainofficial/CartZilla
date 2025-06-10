import React, { useState } from "react";
import { Navbar, Footer } from "../components";

const posts = [
  {
    id: 1,
    title: "The Timeless Charm of Vintage Fashion",
    image: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2024/05/old-1717140065.webp",
    content: `Fashion is cyclical, and vintage trends keep making a strong comeback for a reason. There’s something magical about wearing a piece of history, whether it’s a 1950s swing dress or a 1990s leather jacket. Vintage fashion offers more than just a look — it tells a story, connects us to the past, and adds a unique dimension to personal style that fast fashion just can’t replicate.

The beauty of vintage lies in its individuality. Unlike mass-produced modern clothes, vintage pieces often have distinctive cuts, intricate details, and superior craftsmanship. When you invest in vintage, you’re embracing quality and sustainability. These clothes were made to last, often with natural fabrics that age beautifully over time.

How to incorporate vintage into your wardrobe? Start small — try adding a vintage accessory like a silk scarf, retro sunglasses, or a classic leather belt. Gradually build up to statement pieces like a vintage coat or dress. The key to styling vintage is to blend it with contemporary pieces to keep the look fresh and wearable. For instance, pair a vintage floral blouse with modern high-waisted jeans or layer a classic blazer over a graphic tee.

Vintage shopping can be an adventure — explore thrift stores, estate sales, and online vintage boutiques. Be patient and selective, looking for timeless silhouettes that flatter your shape and personality. In a world dominated by fast fashion and fleeting trends, vintage style reminds us to slow down, value craftsmanship, and express individuality through clothes that have a story.`
  },
  {
    id: 2,
    title: "Mastering the Minimalist Wardrobe",
    image: "https://assets.gqindia.com/photos/64ae7991ca23363cf3f5fa0b/16:9/w_2240,c_limit/Is-a-capsule-wardrobe-possible-in-the-age-of-consumerism_001.jpg",
    content: `Minimalism isn’t just a trend; it’s a lifestyle choice that translates beautifully into fashion. A minimalist wardrobe focuses on simplicity, quality, and versatility. It’s about owning fewer clothes but making every piece count — a breath of fresh air in a world overwhelmed by overconsumption.

So, what exactly makes a wardrobe minimalist? Think neutral color palettes — whites, beiges, grays, and blacks — combined with clean, classic cuts. The goal is to create outfits that mix and match seamlessly, so you can dress up or down without fuss. Instead of chasing the latest trends, minimalism focuses on investing in well-made staples: a crisp white shirt, a perfectly tailored blazer, slim-fit trousers, and a classic pair of loafers or ankle boots.

Minimalism also emphasizes the fit. A perfectly fitting garment, no matter how simple, can elevate your entire look. Tailoring is your best friend — don’t hesitate to get pieces altered to hug your body just right.

One of the biggest perks? Getting dressed becomes stress-free. With a curated wardrobe of timeless pieces, you can effortlessly put together chic outfits every day. Plus, by buying less but better, you’re supporting sustainability and reducing waste.

Minimalism is also about versatility. For example, a plain white tee can be your go-to for layering, a black dress can transition from office to evening, and a neutral trench coat can polish any outfit. Accessories remain understated — think delicate jewelry and a quality leather handbag.

If you’re new to minimalism, start by decluttering your closet. Keep pieces you love and wear regularly, then gradually invest in quality basics that serve multiple purposes.

Minimalism is not just fashion; it’s an elegant approach to life — stylish, purposeful, and sustainable.`
  },
  {
    id: 3,
    title: "The Power of Accessories — How to Transform Your Look with the Right Details",
    image: "https://media.cntraveler.com/photos/66562d6ccb7ccf68b556432d/16:9/w_2240,c_limit/Travel%20Accessories-2024_00-Lede.jpg",
    content: `Sometimes the difference between an average outfit and a standout look comes down to accessories. They’re the finishing touches that express personality, add flair, and create visual interest. Mastering the art of accessorizing can elevate your style to the next level.

Accessories come in many forms — jewelry, hats, scarves, belts, bags, and shoes. The trick is knowing how to balance them with your outfit. If your clothes are simple and understated, bold accessories can be the perfect pop of color or texture. Conversely, if your outfit is already busy with patterns or colors, opt for subtle, elegant accessories that complement rather than compete.

Jewelry is one of the easiest ways to experiment. Statement earrings can frame your face beautifully, while layered necklaces add dimension to a neckline. Don’t be afraid to mix metals or combine chunky and delicate pieces for a personalized look.

Scarves and hats are versatile accessories that can instantly refresh an outfit. A silk scarf tied around the neck or wrist adds sophistication, while a wide-brim hat or beret adds character and a bit of drama.

Belts are not only functional but also style-defining. Cinching a waist with a bold belt transforms oversized dresses or jackets, creating flattering silhouettes.

Handbags and shoes can set the tone for your outfit. A classic leather bag or sleek boots add polish, while a colorful clutch or funky sneakers inject fun.

Finally, confidence is the best accessory. Wearing your accessories with pride and a sense of fun makes any outfit truly shine.`
  },
  {
    id: 4,
    title: "Top 5 Game-Changing Gadgets You Didn't Know You Needed",
    image: "https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg?auto=compress&cs=tinysrgb&w=600",
    content: `Here are top 5 gadgets-  1. Portable Projectors\nTiny but powerful, these pocket-sized projectors can turn any wall into a cinema screen...

2. Smart Plugs\nConvert any device into a smart one with Wi-Fi-enabled plugs...

3. Noise-Canceling Earbuds\nThe newest generation of earbuds doesn’t just cancel noise—they adapt...

4. Multi-Device Wireless Chargers\nCharge your phone, smartwatch, and earbuds all at once...

5. Smart Air Purifiers\nBreathe better with air purifiers that monitor air quality and adjust settings...`
  }
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const openModal = (post) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h1 className="text-center mb-4">Our Blog</h1>

        <div className="row">
          {posts.map((post) => (
            <div
              key={post.id}
              className="col-md-6 mb-4"
              style={{ cursor: "pointer" }}
              onClick={() => openModal(post)}
            >
              <div className="card h-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="card-img-top"
                  style={{ objectFit: "cover", height: "250px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text text-truncate">{post.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {}
        {selectedPost && (
          <div
            className="modal show fade"
            style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
            tabIndex="-1"
            onClick={closeModal}
          >
            <div
              className="modal-dialog modal-lg modal-dialog-centered"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{selectedPost.title}</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={closeModal}
                    aria-label="Close"
                    style={{ border: "none", background: "none", fontSize: "1.5rem" }}
                  >
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="img-fluid rounded mb-3"
                    style={{ maxHeight: "400px", objectFit: "cover", width: "100%" }}
                  />
                  {selectedPost.content.includes("\n") ? (
                    selectedPost.content
                      .split("\n")
                      .map((line, index) => (
                        <p key={index} style={{ marginBottom: "0.6rem" }}>{line}</p>
                      ))
                  ) : (
                    <p>{selectedPost.content}</p>
                  )}
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={closeModal}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Blog;