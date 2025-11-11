const AssociatedWith = () => {
  const logos = [
    "/assets/nitrp.webp",
    "/assets/google.webp",
    "/assets/google.webp",
    "/assets/google.webp",
    "/assets/paytm.webp",
    "/assets/paytm.webp",
    "/assets/paytm.webp",
  ];

  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8">
        We are <span className="text-teal-600">Associated with</span>
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-10 px-6">
        {logos.map((logo, i) => (
          <img key={i} src={logo} alt="Partner" className="h-10 grayscale hover:grayscale-0 transition-all" />
        ))}
      </div>
    </section>
  );
};

export default AssociatedWith;
