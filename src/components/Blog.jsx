import React from 'react';

const blogs = [
  {
    title: 'GST on Residential Property in India 2026',
    date: '21, Jan 2026',
    img: 'https://www.livehomes.in/public/image/blogs/3153664471768976359.png',
    link: '#',
  },
  {
    title: 'Village Panchayat Tax in Tamil Nadu Detailed Explanation',
    date: '20, Jan 2026',
    img: 'https://www.livehomes.in/public/image/blogs/9361635141768902236.webp',
    link: '#',
  },
  {
    title: 'Home Loan Interest Rates in 2026',
    date: '19, Jan 2026',
    img: 'https://www.livehomes.in/public/image/blogs/8471455771769233573.png',
    link: '#',
  },
];

const Blog = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Live Homes Blogs</h2>
      <div className="relative">
        {/* Animated background shape */}
        <div className="absolute -top-16 left-0 w-64 h-64 bg-gradient-to-tr from-blue-100 via-blue-300 to-white rounded-full blur-2xl opacity-30 -z-10 animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <div key={idx} className="bg-blue-50 rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <img src={blog.img} alt={blog.title} className="h-32 mb-4 object-contain rounded-lg transition-transform duration-500 hover:scale-110" />
              <h3 className="text-lg font-bold text-blue-700 mb-2 transition-colors duration-300 hover:text-blue-900">{blog.title}</h3>
              <p className="text-gray-600 mb-2">{blog.date}</p>
              <a href={blog.link} className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Blog;