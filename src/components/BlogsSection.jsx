import React from "react";
import blog1 from "../assets/images/interior3.jpg"; // Replace with your own images
import blog2 from "../assets/images/interior2.jpg";
import blog3 from "../assets/images/interior1.jpg";

const blogs = [
  {
    id: 1,
    title: "Modern Interior Trends 2025",
    excerpt:
      "Explore the latest trends in interior design for 2025, blending minimalism and bold textures.",
    image: blog1,
    date: "Oct 12, 2025",
    author: "We3Studios",
  },
  {
    id: 2,
    title: "Sustainable Exterior Designs",
    excerpt:
      "Learn how eco-friendly materials and innovative architecture are reshaping modern exteriors.",
    image: blog2,
    date: "Sep 28, 2025",
    author: "We3Studios",
  },
  {
    id: 3,
    title: "3D Visualization Tips",
    excerpt:
      "Maximize your design presentations with photorealistic renders and immersive walkthroughs.",
    image: blog3,
    date: "Aug 19, 2025",
    author: "We3Studios",
  },
];

const BlogSection = () => {
  return (
    <section className="bg-black py-20 min-h-screen[-75]">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-white">
            Our <span className="text-yellow-500">Blog</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Stay updated with the latest insights, design trends, and project highlights from our studio.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
            >
              {/* Blog Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <p className="text-yellow-400 text-sm mb-2">{blog.date} • {blog.author}</p>
                <h3 className="text-2xl font-bold mb-2">{blog.title}</h3>
                <p className="text-gray-300">{blog.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
