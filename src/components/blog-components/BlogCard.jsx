

// import { FaRegCalendarAlt, FaRegUser } from "react-icons/fa";
// import { motion } from "framer-motion";

// export default function BlogCard({ title, author, date, updated, category, excerpt, image }) {
//   return (
//     <motion.div
//       data-aos="fade-up" // 👈 triggers scroll animation
//       data-aos-delay="100"
//       className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
//       whileHover={{ scale: 1.02 }}
//     >
//       <img
//         src={image}
//         alt={title}
//         className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
//       />
//       <div className="p-6">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h2>

//         <div className="flex items-center text-gray-500 text-sm mb-3 space-x-3">
//           <span className="flex items-center gap-1"><FaRegUser /> {author}</span>
//           <span className="flex items-center gap-1"><FaRegCalendarAlt /> {date}</span>
//           {updated && <span>Updated: {updated}</span>}
//         </div>

//         <p className="text-gray-600 mb-3">{excerpt}</p>

//         <button className="text-orange-600 font-semibold hover:underline flex items-center gap-1">
//           Read More →
//         </button>
//       </div>
//     </motion.div>
//   );
// }

import { FaRegCalendarAlt, FaRegUser } from "react-icons/fa";
import { motion } from "framer-motion";

export default function BlogCard({ title, author, date, updated, category, excerpt, image }) {
  return (
    <motion.div
      data-aos="fade-up"
      className="bg-white rounded-lg shadow-sm hover:shadow-lg overflow-hidden transition-all duration-300 border border-gray-100"
      whileHover={{ scale: 1.01 }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
      />
      <div className="p-6 space-y-3">
        <h2 className="text-2xl font-semibold text-gray-800 hover:text-orange-600 cursor-pointer leading-snug">
          {title}
        </h2>

        <div className="flex flex-wrap items-center text-gray-500 text-sm gap-3">
          <span className="flex items-center gap-1"><FaRegUser /> {author}</span>
          <span className="flex items-center gap-1"><FaRegCalendarAlt /> {date}</span>
          {updated && <span>Updated: {updated}</span>}
        </div>

        <p className="text-gray-600 leading-relaxed">{excerpt}</p>

        <button className="text-orange-600 font-semibold hover:underline flex items-center gap-1">
          Read More →
        </button>
      </div>
    </motion.div>
  );
}
