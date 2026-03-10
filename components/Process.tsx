export default function Process() {
  const steps = [
    { day: "Day 1", title: "Quote Request", desc: "Submit specs - rebar sizes, sheets, tonnage needs" },
    { day: "Day 1", title: "Inventory Check", desc: "Real-time stock confirmation from Cebu yard" },
    { day: "Day 2", title: "Order Processing", desc: "Cutting, bundling, delivery scheduling" },
    { day: "Day 2", title: "On-Site Delivery", desc: "4-hour Metro Cebu, next-day province delivery" }
  ]

  return (
    <section id="process" className="py-24 px-6 md:px-12 bg-gradient-to-r from-indigo-50 to-emerald-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            48-Hour Steel Delivery
          </h2>
          <p className="text-xl text-gray-600">
            From quote to site delivery for Cebu projects.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, idx) => (
            <div key={idx} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl flex flex-col items-center justify-center mx-auto mb-6 shadow-xl">
                <div className="text-sm font-bold">{step.day}</div>
                <div className="text-2xl font-bold">0{idx + 1}</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
