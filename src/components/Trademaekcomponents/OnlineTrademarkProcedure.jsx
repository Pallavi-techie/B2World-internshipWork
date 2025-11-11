import React from "react";

export default function OnlineTrademarkProcedure() {
  return (
    <section className="bg-white py-12 px-6 md:px-16 text-[#0B0B0B] leading-relaxed">
      {/* Title */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          Online Procedure of <span className="text-green-600">Trademark Registration</span>
        </h2>
        <p className="text-gray-700 italic">
          The online procedure of trademark registration involves the following steps:
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto text-gray-700 space-y-8">
        {/* Step 1 */}
        <div>
          <h3 className="font-semibold text-lg mb-2 text-[#053B50]">Search for The Brand Name</h3>
          <p className="text-justify">
            Choosing a different and distinct brand name is a sensible choice because most generic names are already in the hands of someone. Furthermore, settling on a name necessitates a rapid research procedure to guarantee that you are not selecting a brand name that is already in use. The best thing is that you may develop a distinctive brand name by inventing or coining some phrases and combining them with generic terms.
          </p>
        </div>

        {/* Step 2 */}
        <div>
          <h3 className="font-semibold text-lg mb-2 text-[#053B50]">Putting up a trademark application</h3>
          <p className="text-justify mb-3">
            The following supporting papers must be presented with the application for online trademark registration:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Business Registration Evidence: Based on your registered business (for example, sole proprietorship, etc.), you must produce identification proof of the company's directors as well as address proof. In the case of a firm, the address evidence of the company must be presented.</li>
            <li>The proposed mark’s proof of claim (if applicable) can be utilized in another nation (sales invoices mentioning the brand name)</li>
            <li>A signed power of attorney (Vakalatnama)</li>
          </ul>
        </div>

        {/* Step 3 */}
        <div>
          <h3 className="font-semibold text-lg mb-2 text-[#053B50]">Submitting a brand name registration application</h3>
          <p className="text-justify">
            There are two methods for filing the registration application: manual filing and e-filing (form TM-A). If you select manual filing, you must personally transport and hand over your registration form to the Registrar Office of Trademarks in major Indian cities such as Delhi, Mumbai, Kolkata, Ahmedabad, and Chennai. Following that, you must wait at least 15–20 days to receive the acknowledgment. In the event of an e-filing system, however, you will immediately obtain your receipt of acknowledgment on the government website.
          </p>
        </div>

        {/* Step 4 */}
        <div>
          <h3 className="font-semibold text-lg mb-2 text-[#053B50]">Examining the procedure of the brand name application</h3>
          <p className="text-justify">
            Once the application is submitted, the Registrar of Trademarks will review it to see if you fulfilled specific requirements and if your brand name fits with current regulations. Furthermore, the brand name must not be similar (Visually or phonetically) or identify with any existing brand which is pending for registration.
          </p>
        </div>

        {/* Step 5 */}
        <div>
          <h3 className="font-semibold text-lg mb-2 text-[#053B50]">Publication of your trademark in the Indian Trade Mark Journals</h3>
          <p className="text-justify">
            Following the examination procedure, if there is no objection raised by the registry (the stipulated time period may vary), the Registrar of Trademarks will accept and publish the brand name in the Indian Trademark Journal. This is perhaps the most crucial aspect of trademark registration. Within 4 months from the date of publication in the journal, if there is no opposition from any third party or no discrepancies between their brand name and the brand name in question, it becomes valid. After that, the Registrar of Trademarks will issue the Trademark Registration Certificate.
          </p>
        </div>

        {/* Step 6 */}
        <div>
          <h3 className="font-semibold text-lg mb-2 text-[#053B50]">Opposition to a Trademark</h3>
          <p className="text-justify">
            However, suppose an objection is filed within the four-month period (or may vary) months of the trademark’s publication in the trademark journal. In that case, the Registrar will send a copy of the notice of opposition. You must respond to the opposition notice within two months by filing a counter-statement. If no counter-statement is submitted within two months, the trademark application will be regarded as abandoned and refused. In case of both the Notice of opposition and counter-statement submission within two months, the trademark application status will be kept on hold by the parties while filing.
          </p>
          <p className="text-justify mt-2">
            However, suppose no objection is filed within three months. In that case, this procedure will not apply to you, and your brand name will be accepted for issuing a Trademark Registration Certificate.
          </p>
        </div>

        {/* Step 7 */}
        <div>
          <h3 className="font-semibold text-lg mb-2 text-[#053B50]">Trademark Opposition Hearing</h3>
          <p className="text-justify">
            This procedure only applies if there is such a trademark opposition in your case.
          </p>
          <p className="text-justify mt-2">
            The steps that follow include hearing the opposition, and you respond with your claims. Following the trial case, the Registrar of Trademarks will send a receipt of your response to the applicant regarding the next steps for registration.
          </p>
        </div>

        {/* Step 8 */}
        <div>
          <h3 className="font-semibold text-lg mb-2 text-[#053B50]">The issuance of a Trademark Registration Certificate</h3>
          <p className="text-justify">
            The Registrar will approve your trademark application if there’s no objection being raised within the time period which may vary on acceptance of your trademark application (placed in the Trademark Journal). Word Mark and Device Mark are two different terms that you may find on the Registrar issues the Registration Certificate with the Trademark Registry’s stamp. You can use the registered trademark (®) symbol beside your brand name as soon as you get your certificate.
          </p>
        </div>
      </div>
    </section>
  );
}
