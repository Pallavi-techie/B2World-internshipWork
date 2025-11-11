import React from "react";
import { motion } from "framer-motion";
import {
  Plane,
  PiggyBank,
  Mail,
  Stethoscope,
  Briefcase,
  Phone,
  ShoppingCart,
  Shield,
  Building,
  Home,
  Lightbulb,
  Fuel,
  UtensilsCrossed,
  Smartphone,
  Car,
  GraduationCap,
  Server,
  Tv,
} from "lucide-react";

const categories = [
  { icon: <Plane className="w-10 h-10" />, label: "Airline Complaints" },
  { icon: <PiggyBank className="w-10 h-10" />, label: "Banking Complaints" },
  { icon: <Mail className="w-10 h-10" />, label: "Postal Complaints" },
  { icon: <Stethoscope className="w-10 h-10" />, label: "Medical Complaints" },
  { icon: <Briefcase className="w-10 h-10" />, label: "Travel Complaints" },
  { icon: <Phone className="w-10 h-10" />, label: "Telecom Complaints" },
  { icon: <ShoppingCart className="w-10 h-10" />, label: "E-commerce Complaints" },
  { icon: <Shield className="w-10 h-10" />, label: "Insurance Complaints" },
  { icon: <Building className="w-10 h-10" />, label: "Real Estate Complaints" },
  { icon: <Home className="w-10 h-10" />, label: "Home Appliances Complaints" },
  { icon: <Lightbulb className="w-10 h-10" />, label: "Electricity Complaints" },
  { icon: <Fuel className="w-10 h-10" />, label: "LPG / Petroleum Complaints" },
  { icon: <UtensilsCrossed className="w-10 h-10" />, label: "Food Safety Complaints" },
  { icon: <Smartphone className="w-10 h-10" />, label: "Mobile / Laptop Complaints" },
  { icon: <Car className="w-10 h-10" />, label: "Automobiles Complaints" },
  { icon: <GraduationCap className="w-10 h-10" />, label: "Education Complaints (Private coaching institutes only)" },
  { icon: <Briefcase className="w-10 h-10" />, label: "Job Services" },
  { icon: <Server className="w-10 h-10" />, label: "ISP Complaints" },
  { icon: <Tv className="w-10 h-10" />, label: "D2H Complaints" },
];

const SelectCategory = () => {
  return (
    <section className="py-16 bg-white text-center">
      {/* Heading */}
      <motion.h2
        className="text-3xl font-bold text-gray-900 mb-3"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Select Category
      </motion.h2>
      <div className="w-16 h-1 bg-green-500 mx-auto mb-10 rounded"></div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 max-w-6xl mx-auto px-6">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center group cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            <div className="bg-green-100 text-green-700 p-6 rounded-full shadow-md group-hover:bg-green-600 group-hover:text-white transition-all duration-300 ease-in-out">
              {cat.icon}
            </div>
            <p className="mt-3 text-sm font-medium text-gray-800 group-hover:text-green-700 text-center">
              {cat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SelectCategory;
