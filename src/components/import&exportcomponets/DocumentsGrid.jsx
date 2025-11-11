import React from "react";
import panCard from "../../assets/Pan_Card.webp";
import passportPhoto from "../../assets/Passport_Size_Photo.webp";
import electricityBill from "../../assets/Electricity_Bill.webp";
import adharCard from "../../assets/adhar_card.webp";
import addressProof from "../../assets/address_proof.webp";
import rentAgreement from "../../assets/rent_agreement.webp";

const docs = [
  {
    title: "Two Colour Photographs of Promoters/Individuals/Company Director",
    icon: passportPhoto,
  },
  {
    title: "PAN Card of each Shareholders and directors",
    icon: panCard,
  },
  {
    title: "Identity Proof (Voter ID / Driving License/ Passport)",
    icon: adharCard,
  },
  {
    title: "Address Proof (Bank Statement / Electricity, Mobile)",
    icon: addressProof,
  },
  {
    title: "Proof of Registered Office",
    icon: rentAgreement,
  },
  {
    title: "Utility Bill as proof must be Latest",
    icon: electricityBill,
  },
];


const DocumentsGrid = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-center mb-6">Document Required</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {docs.map((d, i) => (
          <div key={i} className="text-center">
            <div className="mx-auto w-24 h-24 rounded-full border flex items-center justify-center">
              <img src={d.icon} alt="" className="w-12 h-12" />
            </div>
            <p className="text-sm mt-3 text-gray-600">{d.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentsGrid;
