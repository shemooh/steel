'use client';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from 'next/navigation';
import QuotePopup from './QuotePopup'; // Import the separate QuotePopup component

interface NavbarProps {
  id?: string;
}

export default function Navbar({ id }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false); // State for popup
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    router.push('/');
    setMobileOpen(false);
  };

  const isHomepage = pathname === '/';

  const scrollToSection = (sectionId: string) => {
    setMobileOpen(false);
    if (isHomepage) {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  const openQuotePopup = () => {
    setQuoteOpen(true);
    setMobileOpen(false); // Close mobile menu if open
  };

  const navItems = [
    { name: "Steel Materials", href: "materials",    color: "from-emerald-500" },
    { name: "Delivery",         href: "delivery",    color: "from-teal-500"    },
    { name: "How It Works",     href: "process",     color: "from-gray-500"    },
    { name: "Capabilities",     href: "capabilities", color: "from-slate-500"  },
  ];

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        id={id}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-40 backdrop-blur-2xl transition-all duration-500 border-b ${
          scrolled
            ? "bg-white/95 shadow-2xl border-white/50"
            : "bg-gradient-to-r from-white/90 via-white/80 to-emerald-50/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 lg:py-4">

            {/* LOGO */}
            <motion.div
              className="text-xl lg:text-2xl font-black bg-gradient-to-r from-gray-900 via-emerald-600 to-teal-600 bg-clip-text text-transparent cursor-pointer select-none tracking-tight"
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={handleLogoClick}
            >
              OikosSteel
            </motion.div>

            {/* DESKTOP NA */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                >
                  <motion.button
                    onClick={() => scrollToSection(item.href)}
                    className="group relative px-3 py-2 text-sm font-semibold text-gray-700 hover:text-gray-900 transition-all duration-300 bg-transparent border-none cursor-pointer"
                    whileHover={{ y: -3, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="tracking-wide">{item.name}</span>
                    <motion.div
                      className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r ${item.color} to-teal-500 rounded-full`}
                      initial={{ width: 0 }}
                      whileHover={{ width: "2.5rem" }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  </motion.button>
                </motion.div>
              ))}
            </div>

            {/* DESKTOP CTAs */}
            <div className="hidden lg:flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 text-emerald-700 font-semibold text-sm border-2 border-emerald-200 rounded-xl hover:border-emerald-400 hover:bg-emerald-50 hover:shadow-lg transition-all duration-300 shadow-sm"
                onClick={() => scrollToSection("capabilities")}
              >
                View Materials
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-white font-bold text-sm rounded-xl shadow-xl hover:shadow-2xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300"
                onClick={openQuotePopup}
              >
                Get Quote
              </motion.button>
            </div>

            {/* MOBILE MENU BUTTON */}
            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-1.5 rounded-xl hover:bg-emerald-50/50 hover:shadow-md transition-all duration-200"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.1 }}
            >
              <svg
                className={`w-5 h-5 transition-all duration-500 ${mobileOpen ? "rotate-180 text-emerald-600" : "text-gray-700"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </motion.button>
          </div>

          {/* MOBILE MENU */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden pb-6 overflow-hidden border-t border-emerald-100/50"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="px-4 pt-6 space-y-4"
                >
                  <div className="space-y-3">
                    {navItems.map((item, idx) => (
                      <motion.button
                        key={item.name}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ delay: idx * 0.08 }}
                        onClick={() => scrollToSection(item.href)}
                        className="w-full flex items-center p-4 text-base font-semibold text-gray-800 hover:text-emerald-600 hover:bg-emerald-50/50 rounded-xl transition-all duration-300 border-l-4 border-transparent hover:border-emerald-400 pl-6 shadow-sm hover:shadow-md"
                      >
                        <span className="flex-1 text-left tracking-wide">{item.name}</span>
                        <svg className="w-4 h-4 text-emerald-500 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.button>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-gray-200 space-y-3">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-white py-4 rounded-xl font-bold text-base shadow-2xl transition-all duration-300"
                      onClick={openQuotePopup}
                    >
                      Get Steel Quote
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full border-2 border-emerald-300 text-emerald-700 py-4 rounded-xl font-bold text-base hover:bg-emerald-50 hover:shadow-xl transition-all duration-300"
                      onClick={() => scrollToSection("capabilities")}
                    >
                      View Materials
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Quote Popup - Controlled by Navbar state */}
      <QuotePopup isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
}
