import Link from 'next/link'

export default function Hero() {
  return (
    <section id="materials" className="py-20 px-6 md:px-12 bg-gradient-to-r from-emerald-50 to-teal-50">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
          Steel Distribution | Construction Supply | Cebu HQ
        </h1>
        <p className="text-2xl font-semibold text-gray-800 mb-12">
          Premium steel bars, sheets & pipes delivered fast to your site
        </p>
      </div>
    </section>
  )
}
