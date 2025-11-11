import React from "react";

const CompanyRegistrationProcess = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto text-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          How Online Legal India Helps You in Registering a New Company
        </h2>
        <div className="w-24 h-1 bg-green-500 mx-auto mb-10 rounded-full"></div>

        <p className="text-lg leading-relaxed mb-8 text-center">
          Online Legal India simplifies the process of registering your company with a few easy steps. 
          We guide you through every stage to ensure a smooth and hassle-free registration. 
          The essential steps include:
        </p>

        <ul className="list-disc pl-8 space-y-4 text-lg">
          <li>
            <strong>Receive Digital Signature Certificate (DSC):</strong>{" "}
            A Digital Signature Certificate is mandatory for signing electronic 
            documents while filing forms on the MCA portal.
          </li>
          <li>
            <strong>Obtain Director Identification Number (DIN):</strong>{" "}
            Each director must have a unique identification number issued by the Ministry of Corporate Affairs.
          </li>
          <li>
            <strong>Create an Account on the MCA Portal:</strong>{" "}
            Forming a new account on the MCA (Ministry of Corporate Affairs) portal allows you to access online 
            company registration services.
          </li>
          <li>
            <strong>Incorporate Your Company:</strong>{" "}
            We guide you step-by-step through the incorporation process to officially register your company under the Companies Act.
          </li>
        </ul>

        <p className="mt-8 text-lg leading-relaxed">
          With our expert team, you can complete every stage of registration seamlessly. 
          From acquiring DSC and DIN to MCA account setup and incorporation, we handle it all — 
          ensuring that you can focus on growing your business while we take care of the paperwork.
        </p>
      </div>
    </section>
  );
};

export default CompanyRegistrationProcess;
