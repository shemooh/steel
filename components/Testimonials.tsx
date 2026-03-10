export default function Testimonials() {
  const testimonials = [
    {
      quote: "Delivered 200 tons of rebar to our Mactan project in 36 hours. Saved 25% vs hardware prices.",
      name: "Engr. Miguel Santos", title: "Project Manager", location: "Mactan Newtown"
    },
    {
      quote: "Perfect cut-to-length service for our condo beams. Mill certs were complete and delivery on time.",
      name: "Lorna Tan", title: "Procurement Head", location: "Cebu Business Park"
    },
    {
      quote: "Bulk steel sheets for roofing factory. Same-day quotes, next-day delivery to Mandaue.",
      name: "Victor Lim", title: "Operations Director", location: "Mandaue City"
    }
  ]

  return (
    <section className="py-24 px-6 md:px-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-20">Trusted By Cebu Contractors</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-emerald-600 font-semibold">{testimonial.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div>
                  <div className="font-bold text-gray-800">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.title}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
