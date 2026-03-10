import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-2xl font-bold mb-8">
          © 2026 Oikos. All rights reserved.
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center text-sm opacity-75">
          <Link href="/privacy" className="hover:text-emerald-400">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-emerald-400">Terms</Link>
          <Link href="/contact" className="hover:text-emerald-400">Contact</Link>
        </div>
      </div>
    </footer>
  )
}
