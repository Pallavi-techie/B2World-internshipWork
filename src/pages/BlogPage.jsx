import { motion } from "framer-motion";
import BlogCard from "../components/blog-components/BlogCard";
import Sidebar from "../components/blog-components/Sidebar";
import HeaderNavbar from "../components/pagesCommonComponents/HeaderNavbar";
import Footer from "../components/pagesCommonComponents/Footer";

export default function BlogPage() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <HeaderNavbar />

      {/* 📰 Blog Section */}
      <div className="flex flex-col md:flex-row gap-10 px-6 md:px-12 py-12 max-w-7xl mx-auto w-full">
        {/* Blog Cards */}
        <motion.div
          className="flex-1 space-y-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <BlogCard
            title="How to Apply for Food License Registration Online?"
            author="Online Legal India"
            date="06 Nov, 2025"
            updated="08 Nov, 2025"
            category="FSSAI"
            excerpt="Learn the complete food license registration process online in simple steps. Understand FSSAI registration types, required documents, and how to keep your food business compliant and ready to grow."
            image="/assets/food-license.png"
          />

          <BlogCard
            title="How to File a Complaint Through Online Dispute Resolution Platform?"
            author="Online Legal India"
            date="01 Nov, 2025"
            category="ODR"
            excerpt="Discover how Online Dispute Resolution in India simplifies conflict resolution. Learn to file complaints easily through the platform for quick, fair settlements without visiting courts."
            image="/assets/odr-complaint.png"
          />

          <BlogCard
            title="How to Start a Food Business from Home?"
            author="Online Legal India"
            date="03 Oct, 2025"
            category="FSSAI"
            excerpt="Thinking of starting a food business from home? Discover step-by-step guidance on planning, legal requirements, and marketing strategies to make your business successful."
            image="/assets/food-home.png"
          />

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-2 pt-8">
            <button className="px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600">1</button>
            <button className="px-3 py-1 bg-white border rounded hover:bg-gray-100">2</button>
            <button className="px-3 py-1 bg-white border rounded hover:bg-gray-100">Next →</button>
          </div>
        </motion.div>

        {/* Sidebar */}
        <Sidebar />
      </div>

      <Footer />
    </div>
  );
}


