'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from '@/lib/supabase';

interface QuotePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  project_needs: string;
  quantity: number | null;
  delivery_date: string;
}

export default function QuotePopup({ isOpen, onClose }: QuotePopupProps) {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    project_needs: '',
    quantity: null,
    delivery_date: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Helper functions - NO event parameters
  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();
  
  const handleSubmit = async () => {
    setLoading(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('quotes')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          project_needs: formData.project_needs,
          quantity: formData.quantity || null,
          delivery_date: formData.delivery_date || null,
          admin_email: 'notonce50@gmail.com'
        }]);
      
      if (error) throw error;

      setSubmitStatus('success');
      setFormData({ 
        name: '', email: '', phone: '', project_needs: '', 
        quantity: null, delivery_date: '' 
      });
      
      setTimeout(() => {
        setSubmitStatus('idle');
        onClose();
      }, 2000);

    } catch (error: any) {
      console.error('Supabase error:', error);
      setSubmitStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (name: keyof QuoteFormData) => (value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: name === 'quantity' ? (value === '' ? null : parseFloat(value)) : value
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            {/* Modal Content */}
            <motion.div
              className="bg-white/95 backdrop-blur-2xl border border-gray-200/50 shadow-2xl rounded-2xl max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto"
              onClick={stopPropagation}
            >
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} 
                className="p-8 space-y-6"
              >
                {/* Header */}
                <div className="pb-6 border-b border-gray-200/50">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-black text-gray-900 tracking-tight">
                      Get Steel Quote
                    </h2>
                    <motion.button
                      type="button"
                      onClick={onClose}
                      className="p-2 hover:bg-gray-100 rounded-xl transition-all duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </motion.button>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange('name')(e.target.value)}
                        className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email')(e.target.value)}
                        className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone')(e.target.value)}
                      className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                      placeholder="+63 912 345 6789"
                    />
                  </div>

                  {/* Project Needs */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Needs *
                    </label>
                    <textarea
                      name="project_needs"
                      value={formData.project_needs}
                      onChange={(e) => handleChange('project_needs')(e.target.value)}
                      className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-vertical min-h-[120px] text-sm transition-all duration-200"
                      placeholder="Describe your steel requirements, dimensions, specifications, or any special needs..."
                      required
                    />
                  </div>

                  {/* Quantity & Delivery Date Row */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Quantity (tons)
                      </label>
                      <input
                        name="quantity"
                        type="number"
                        step="0.01"
                        value={formData.quantity ?? ''}
                        onChange={(e) => handleChange('quantity')(e.target.value)}
                        className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                        placeholder="0"
                        min="0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Delivery Date
                      </label>
                      <input
                        name="delivery_date"
                        type="date"
                        value={formData.delivery_date}
                        onChange={(e) => handleChange('delivery_date')(e.target.value)}
                        className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </div>
                </div>

                {/* Status & Submit Button */}
                <div className="pt-4">
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-emerald-100 border border-emerald-300 text-emerald-800 px-4 py-3 rounded-xl text-sm mb-4"
                    >
                      Quote request sent successfully! We'll contact you within 24 hours.
                    </motion.div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-red-100 border border-red-300 text-red-800 px-4 py-3 rounded-xl text-sm mb-4"
                    >
                      Failed to send quote. Please try again.
                    </motion.div>
                  )}
                  
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-white font-bold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Sending...' : 'Request Quote'}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
