import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="bg-navy-950 text-white min-h-screen pt-28 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-gold-500 text-sm font-bold tracking-widest uppercase block mb-2">
            Get Support
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Contact Admissions</h1>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            Hamari support team 24/7 online help ke liye maujood hai. Admission queries, technical difficulties, 
            ya fees structure se mutalik questions ke liye neeche diye gaye methods se rabta karein.
          </p>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              title: 'General Inquiries',
              desc: 'info@apex.edu.pk',
              Icon: FaEnvelope,
            },
            {
              title: 'Admissions Office',
              desc: '+92 (21) 111-273-986',
              Icon: FaPhoneAlt,
            },
            {
              title: 'Office Timings',
              desc: 'Mon - Fri (09:00 AM - 05:00 PM)',
              Icon: FaClock,
            },
            {
              title: 'Campus Location',
              desc: 'Gulshan-e-Iqbal, Karachi',
              Icon: FaMapMarkerAlt,
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-navy-900 border border-navy-850 p-6 rounded-2xl text-center flex flex-col items-center"
            >
              <div className="bg-navy-850 p-3 rounded-xl border border-navy-750 text-gold-500 mb-4">
                <item.Icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold font-serif text-white mb-2">{item.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Layout: Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-4">
          {/* Query Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-navy-900 border border-navy-850 p-8 rounded-3xl"
          >
            <h2 className="text-2xl font-serif font-bold text-white mb-6">Send Us A Message</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1">
                  <label className="text-xs text-gray-400 font-bold uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-navy-950 border border-navy-800 text-white rounded-lg p-3 text-sm focus:outline-none focus:border-gold-500"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="text-xs text-gray-400 font-bold uppercase tracking-wider">Your Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-navy-950 border border-navy-800 text-white rounded-lg p-3 text-sm focus:outline-none focus:border-gold-500"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-1">
                <label className="text-xs text-gray-400 font-bold uppercase tracking-wider">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="bg-navy-950 border border-navy-800 text-white rounded-lg p-3 text-sm focus:outline-none focus:border-gold-500"
                  required
                />
              </div>

              <div className="flex flex-col space-y-1">
                <label className="text-xs text-gray-400 font-bold uppercase tracking-wider">Message Details</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="5"
                  className="bg-navy-950 border border-navy-800 text-white rounded-lg p-3 text-sm w-full focus:outline-none focus:border-gold-500 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-navy-950 font-extrabold px-6 py-3 rounded-lg text-sm transition-colors cursor-pointer flex items-center justify-center space-x-2"
              >
                <span>SEND DISPATCH</span>
                <FaPaperPlane className="h-3.5 w-3.5" />
              </button>

              {submitted && (
                <p className="text-sm text-green-400 mt-4">
                  Thank you! Your inquiry was sent successfully. We will respond within 24 hours.
                </p>
              )}
            </form>
          </motion.div>

          {/* Map and Departments */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between space-y-8"
          >
            {/* Google Map */}
            <div className="w-full h-80 rounded-3xl overflow-hidden border border-navy-850 shadow-xl">
              <iframe
                title="Apex University Campus Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.396593574929!2d67.08221601447953!3d24.89131295099307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ed6b23bdf7b%3A0xe54e66299b9cf9a3!2sNational%20University%20of%20Sciences%20and%20Technology%20(NUST)%20Karachi%20Campus!5e0!3m2!1sen!2spk!4v1652398273641!5m2!1sen!2spk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>

            {/* Department extensions */}
            <div className="bg-navy-900 border border-navy-850 p-6 rounded-3xl">
              <h3 className="text-base font-serif font-bold text-white mb-4">Direct Office Extensions</h3>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-gray-500 font-bold block uppercase">Registrar Office</span>
                  <span className="text-gray-300 font-mono">+92 (21) 111-273-986 Ext: 102</span>
                </div>
                <div>
                  <span className="text-gray-500 font-bold block uppercase">Accounts & Finance</span>
                  <span className="text-gray-300 font-mono">+92 (21) 111-273-986 Ext: 204</span>
                </div>
                <div>
                  <span className="text-gray-500 font-bold block uppercase">IT Technical Desk</span>
                  <span className="text-gray-300 font-mono">+92 (21) 111-273-986 Ext: 310</span>
                </div>
                <div>
                  <span className="text-gray-500 font-bold block uppercase">Student Affairs</span>
                  <span className="text-gray-300 font-mono">+92 (21) 111-273-986 Ext: 412</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
