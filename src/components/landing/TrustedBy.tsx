
const TrustedBy = () => {
  const companies = [
    { name: "Stripe", className: "w-24" },
    { name: "HubSpot", className: "w-28" },
    { name: "Intercom", className: "w-28" },
    { name: "Asana", className: "w-24" }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-neutral-100 via-white to-neutral-100 relative overflow-hidden">
      {/* Subtle background blur elements */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent-purple/5 rounded-full blur-3xl"></div>
      
      <div className="container-padding relative z-10">
        <p className="text-center text-neutral-600 mb-12">Trusted by popular startups you know</p>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {companies.map((company) => (
            <div 
              key={company.name} 
              className={`${company.className} h-8 bg-neutral-400/20 backdrop-blur-sm rounded-lg border border-white/30`} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
