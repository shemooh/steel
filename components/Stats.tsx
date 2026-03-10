export default function Stats() {
  return (
    <section id="quote" className="py-24 px-6 md:px-12 bg-gradient-to-r from-emerald-600 to-teal-600">
      <div className="max-w-4xl mx-auto text-center text-white">
        <div className="grid md:grid-cols-4 gap-12 text-4xl md:text-5xl font-bold mb-8">
          <div>500+</div>
          <div>48 Hours</div>
          <div>25%</div>
          <div>Cebu & Provinces</div>
        </div>
        <div className="grid md:grid-cols-4 gap-12 text-xl opacity-90 mb-12">
          <div>Tons in Stock</div>
          <div>Delivery Speed</div>
          <div>Volume Discount</div>
          <div>Service Coverage</div>
        </div>
        <div className="text-2xl font-bold mb-4">
          Steel Materials. Construction Ready.
        </div>
        <p className="text-xl opacity-90">
          Premium steel distribution for Cebu construction projects. Always in stock, delivered fast.
        </p>
        <div className="mt-12">
          <a href="#quote" className="bg-white text-emerald-600 px-8 py-4 text-xl rounded-xl font-bold hover:bg-gray-100 transition-all duration-300">
            Get Steel Quote
          </a>
        </div>
      </div>
    </section>
  )
}
