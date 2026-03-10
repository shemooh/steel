import Link from 'next/link'

export default function Capabilities() {
  const materials = [
    { name: "Rebar & Deformed Bars", count: "TBD" },
    { name: "Steel Sheets & Plates", count: "TBD" },
    { name: "GI Pipes & Hollow Sections", count: "TBD" },
    { name: "Angle Bars & Channels", count: "TBD" },
    { name: "Round Bars & Wires", count: "TBD" },
    { name: "I-Beams & H-Beams", count: "TBD" },
    { name: "Steel Roofing", count: "TBD" },
    { name: "Cement & Aggregates", count: "TBD" },
    { name: "Structural Steel", count: "TBD" },
    { name: "Formworks", count: "TBD" },
    { name: "Plywood & Lumber", count: "TBD" },
    { name: "Construction Hardware", count: "TBD" }
  ]

  const industries = [
    { name: "Residential Builders", count: "TBD" },
    { name: "Commercial Contractors", count: "TBD" },
    { name: "Infrastructure Projects", count: "TBD" },
    { name: "Industrial Construction", count: "TBD" },
    { name: "Condo Developers", count: "TBD" },
    { name: "Government Projects", count: "TBD" },
    { name: "Hotel & Resort Builders", count: "TBD" },
    { name: "Factory Construction", count: "TBD" },
    { name: "Renovation Contractors", count: "TBD" },
    { name: "Civil Works", count: "TBD" }
  ]

  return (
    <section id="capabilities" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">Steel Materials Available</h2>
            <div className="space-y-4">
              {materials.map((material, idx) => (
                <div key={idx} className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-700">{material.name}</span>
                  <span className="font-bold text-emerald-600">{material.count}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-12">Serving Cebu Construction</h3>
            <div className="space-y-4">
              {industries.map((industry, idx) => (
                <div key={idx} className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-700">{industry.name}</span>
                  <span className="font-bold text-teal-600">{industry.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
