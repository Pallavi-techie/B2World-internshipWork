import React from "react";
import { motion } from "framer-motion";
import {
  IdCard,
  FileText,
  Home,
  Zap,
  ClipboardCheck,
  FileCheck,
} from "lucide-react";

const documents = [
  {
    title: "Passport Size Photograph",
    description:
      "The individual has to provide 3 copies of their passport size photo for the application forms.",
    icon: <IdCard className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "PAN Card",
    description:
      "PAN Card of the Directors of the Company will be needed for Company Registration.",
    icon: <FileText className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Copy of Electricity Bill",
    description:
      "The person needs to provide the electricity bill not more than 3 months old.",
    icon: <Zap className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Copy of Aadhaar Card",
    description:
      "The individual needs to provide the proof of identity with a photo attached to it.",
    icon: <ClipboardCheck className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Address Proof",
    description:
      "The address proof should have the name of the Director along with his current address and should match with the PAN card.",
    icon: <Home className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "No Objection Certificate",
    description:
      "They need to furnish the NOC from the local concerned authorities.",
    icon: <FileCheck className="w-10 h-10 text-blue-600" />,
  },
];

const DocumentsRequired = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Documents required to get the{" "}
          <span className="text-blue-600">Company registered</span>
        </h2>
        <div className="w-20 h-1 bg-green-400 mx-auto rounded"></div>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {documents.map((doc, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center"
          >
            <div className="bg-white shadow-md rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 p-6 max-w-sm text-center">
              <div className="flex justify-center mb-4">{doc.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{doc.title}</h3>
              <p className="text-sm text-gray-600">{doc.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DocumentsRequired;

