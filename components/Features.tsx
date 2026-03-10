import Link from 'next/link'

export default function Features() {
  const features = [
    { title: "Steel Inventory Ready", desc: "Rebar, sheets, pipes, angles. 500+ tons in Cebu stockyard." },
    { title: "Same-Day Delivery", desc: "Metro Cebu delivery within 4 hours. Province-wide next day." },
    { title: "Cut-to-Length Service", desc: "Precision cutting for rebars, plates, beams per project specs." },
    { title: "Material Certification", desc: "Mill test certificates, ISO-compliant quality documentation." },
    { title: "Bulk Order Discounts", desc: "20-40% savings on 50+ ton orders. Flexible payment terms." },
    { title: "Project Supply Chain", desc: "Schedule deliveries, track shipments, manage project budgets." }
  ]

  return (
    <section id="delivery" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
            Steel Materials Distribution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enterprise-grade supply chain for Cebu construction projects. Always in stock, always on time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-8 border border-gray-200 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-emerald-600">{idx + 1}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
