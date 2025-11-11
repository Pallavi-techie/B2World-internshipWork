import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

const recentPosts = [
  { title: "How to Apply for Food License Registration Online?", date: "06 Nov, 2025" },
  { title: "How to File a Complaint Through Online Dispute Resolution Platform?", date: "01 Nov, 2025" },
  { title: "How to Start a Food Business from Home?", date: "03 Oct, 2025" },
];

const trendingPosts = [
  { title: "A Complete Guide to EPDS Telangana Ration Card Services" },
  { title: "How to File GST Return Online in India?" },
  { title: "Difference Between MSME and Udyam Registration" },
];

const categories = ["Startup", "LMPC Certificate", "Professional Tax", "Trademark", "NBH Company"];

export default function Sidebar() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full md:w-1/3 bg-white rounded-2xl shadow-lg p-6 space-y-10 border border-gray-100"
    >
      {/* 🔍 Search Section */}
<div className="relative">
  <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
  <input
    type="text"
    placeholder="Search articles..."
    className="w-full border border-gray-300 rounded-full py-2.5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition shadow-sm placeholder:text-gray-400"
  />
</div>


      {/* 🕓 Recent Posts */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 border-b-2 border-orange-500 inline-block pb-1 mb-5">
          Recent Posts
        </h3>
        <ul className="space-y-4">
          {recentPosts.map((post, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.02, x: 5 }}
              className="border-b border-gray-200 pb-2 px-2 rounded-md cursor-pointer hover:bg-orange-50 transition-all duration-200"
            >
              <p className="font-medium text-gray-800 hover:text-orange-600 leading-snug">
                {post.title}
              </p>
              <p className="text-sm text-gray-500 mt-1">{post.date}</p>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* 🔥 Trending Posts */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 border-b-2 border-orange-500 inline-block pb-1 mb-5">
          Trending Posts
        </h3>
        <ul className="space-y-3">
          {trendingPosts.map((post, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.03, x: 5 }}
              className="text-gray-700 cursor-pointer hover:text-orange-600 transition-all duration-200"
            >
              <span className="inline-block">🔥</span> {post.title}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* 🏷️ Categories */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 border-b-2 border-orange-500 inline-block pb-1 mb-5">
          Categories
        </h3>
        <div className="flex flex-wrap gap-3">
          {categories.map((cat, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.1 }}
              className="text-sm bg-green-100 text-green-700 font-medium px-3 py-1 rounded-full hover:bg-green-200 hover:shadow-sm cursor-pointer transition-all duration-200"
            >
              #{cat}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.aside>
  );
}
