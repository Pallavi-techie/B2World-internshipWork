import React from "react";
import { useForm } from "react-hook-form";
import { FaHeadset, FaShieldAlt, FaClipboardCheck, FaStar } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";

const HeroSection = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
    reset();
  };

  return (
    <section className="bg-[#0a1733] text-white py-12 px-6 md:px-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6">
        <div>
          <h3 className="text-sm uppercase text-gray-300 mb-2">
            Before Registering Your Company Directly under Govt. of India
          </h3>
          <div className="bg-orange-600 text-white text-lg md:text-xl font-semibold rounded-md px-4 py-3 inline-block">
            Avail Consultations from our Experienced CAs @Rs 999! *
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
          {[
            {
              icon: <FaHeadset className="text-green-500 text-2xl" />,
              title: "Customer Support",
              desc: "Available in 6 Languages including English",
            },
            {
              icon: <MdPeopleAlt className="text-green-500 text-2xl" />,
              title: "Expert Consultation",
              desc: "Call, E-mail, Chat Support.",
            },
            {
              icon: <FaStar className="text-green-500 text-2xl" />,
              title: "Trusted by Over 1 Lakh+ Clients",
              desc: "",
            },
            {
              icon: <IoDocumentTextSharp className="text-green-500 text-2xl" />,
              title: "100% Paperless Documentation",
              desc: "",
            },
            {
              icon: <FaShieldAlt className="text-green-500 text-2xl" />,
              title: "Completely Secured & Encrypted Process",
              desc: "",
            },
            {
              icon: <FaClipboardCheck className="text-green-500 text-2xl" />,
              title: "India’s most efficient CA panel",
              desc: "Ready to assist along the way",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              {item.icon}
              <div>
                <h4 className="font-semibold">{item.title}</h4>
                {item.desc && <p className="text-sm text-gray-300">{item.desc}</p>}
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-400 mt-2">
          *Once you are ready to setup your dream company, you’ll receive Rs 999 adjustment
          from your selected company registration package.
        </p>
      </div>

      {/* Right Form */}
      <div className="md:w-1/2 bg-white text-gray-800 rounded-lg shadow-xl p-6 md:p-8 max-w-md mx-auto">
        <h3 className="text-lg font-semibold text-center mb-2">
          Our Expert CA Consulting Panel - Now Available!
        </h3>
        <p className="text-center text-gray-600 text-sm mb-4">
          Fill up the below mentioned form
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input {...register("name")} placeholder="Name" required className="w-full p-2 border rounded" />
          <input {...register("mobile")} placeholder="Mobile" required className="w-full p-2 border rounded" />
          <input {...register("email")} placeholder="Email" required className="w-full p-2 border rounded" />
          
          <select {...register("state")} required className="w-full p-2 border rounded">
            <option value="">Select State</option>
            <option>Gujarat</option>
            <option>Maharashtra</option>
            <option>Delhi</option>
            <option>Rajasthan</option>
          </select>

          <select {...register("queryType")} required className="w-full p-2 border rounded">
            <option value="">Company Query Type</option>
            <option>Private Limited</option>
            <option>LLP Registration</option>
            <option>Startup Consultation</option>
          </select>

          <div className="flex items-center gap-2">
            <input type="checkbox" required />
            <label className="text-xs text-gray-600">
              I have read & agree to the company's Terms and Conditions and am ready to accept calls, SMS, and emails.
            </label>
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-gray-200 text-center font-mono px-4 py-2 rounded w-1/3">6726</div>
            <input placeholder="Enter the captcha here..." required className="w-2/3 p-2 border rounded" />
          </div>

          <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition">
            Request for Callback
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
