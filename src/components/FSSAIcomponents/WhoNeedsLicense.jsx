import React from "react";
import { motion } from "framer-motion";
import {
  Store,
  Truck,
  Utensils,
  Building2,
  Users2,
  Salad,
  Warehouse,
  ChefHat,
  CupSoda,
  Factory,
  ShoppingCart,
  StoreIcon,
} from "lucide-react";

const businesses = [
  { icon: Utensils, label: "CANTEEN" },
  { icon: CupSoda, label: "CLUB" },
  { icon: ChefHat, label: "DHABA" },
  { icon: Truck, label: "DISTRIBUTOR" },
  { icon: Factory, label: "FOOD PROCESSOR" },
  { icon: Building2, label: "RESTAURANT" },
  { icon: StoreIcon, label: "RETAILER" },
  { icon: Warehouse, label: "STORAGE" },
  { icon: ShoppingCart, label: "SUPPLIER" },
  { icon: Truck, label: "TRANSPORTER" },
  { icon: Salad, label: "WHOLESALER" },
  { icon: Users2, label: "OTHERS" },
];

const WhoNeedsLicense = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-bold text-gray-900"
      >
        Who Needs a FSSAI FoSCos License?
      </motion.h2>

      {/* Green underline */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "80px" }}
        transition={{ duration: 0.8 }}
        className="h-1 bg-green-500 mx-auto mt-2 mb-10 rounded-full"
      ></motion.div>

      {/* Grid of items */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
        {businesses.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="flex flex-col items-center space-y-3 group"
          >
            <div className="p-4 bg-gray-100 rounded-full shadow-md group-hover:bg-green-100 transition">
              <item.icon className="w-10 h-10 text-green-600 group-hover:scale-110 transition-transform" />
            </div>
            <p className="text-sm font-semibold text-gray-800 group-hover:text-green-600 transition">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhoNeedsLicense;
