import React from "react";

const testimonials = [
    {
        id: 1,
        name: "Jane Doe",
        role: "Fashion Enthusiast",
        photo: "https://randomuser.me/api/portraits/women/44.jpg",
        feedback:
          "I absolutely love the quality and style of the products! Shipping was super fast too.",
      },
  {
    id: 2,
    name: "John Smith",
    role: "Professional Stylist",
    photo: "https://randomuser.me/api/portraits/men/46.jpg",
    feedback:
      "The customer service is top-notch. They really care about their customers.",
  },
  {
    id: 3,
    name: "Emily Johnson",
    role: "Blogger",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    feedback:
      "The designs are unique and timeless. I've recommended this site to all my friends!",
  },
];

export default function Testimonial() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">What Our Customers Say</h2>
        <div className="row justify-content-center">
          {testimonials.map(({ id, name, role, photo, feedback }) => (
            <div key={id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <img
                    src={photo}
                    alt={`${name} photo`}
                    className="rounded-circle mb-3"
                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  />
                  <p className="card-text fst-italic">"{feedback}"</p>
                  <h5 className="card-title mt-3">{name}</h5>
                  <p className="text-muted">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
