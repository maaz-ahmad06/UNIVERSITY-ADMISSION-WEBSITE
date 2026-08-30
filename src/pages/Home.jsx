import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaArrowRight,
  FaAward,
  FaBookOpen,
  FaCalendarAlt,
  FaClock,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhoneAlt,
  FaUserGraduate,
  FaUsers,
} from 'react-icons/fa';
import Counter from '../components/Counter';
import Accordion from '../components/Accordion';

export default function Home() {
  // Testimonials slide state
  const testimonials = [
    {
      name: 'Ayesha Khan',
      program: 'BS Computer Science (Class of 2025)',
      quote:
        'Apex University has provided me with endless opportunities. The state-of-the-art labs and supportive faculty helped me land a software engineering internship in my junior year.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Zain Ahmed',
      program: 'MBA (Class of 2024)',
      quote:
        'The entrepreneurship cell at Apex changed my career trajectory. I got funding for my startup idea through the university pitch competition before even graduating!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Sarah Joseph',
      program: 'BS Electrical Engineering (Class of 2026)',
      quote:
        'The research facilities here are top-tier. Working alongside professors on renewable energy projects has been the highlight of my academic journey.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-scroll testimonials
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [testimonials.length]);

  // Contact Form states
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormSubmitted(false), 4000);
    }
  };

  return (
    <div className="bg-navy-950 min-h-screen text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-4 md:px-8">
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 z-0 scale-105 transition-transform duration-10000"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        {/* Navy to Maroon Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-transparent to-navy-950 z-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-transparent to-navy-950/80 z-0" />

        <div className="max-w-5xl mx-auto text-center relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-maroon-900/60 border border-maroon-700/50 rounded-full px-4 py-1.5 mb-6 text-sm text-gold-300 font-semibold"
          >
            <FaAward className="text-gold-500" />
            <span>Top Ranked University in Pakistan</span>
          </motion.div>

          {/* Typewriter Fade-up Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl font-serif font-extrabold tracking-tight leading-tight"
          >
            Shape Your Future <br />
            <span className="bg-gradient-to-r from-gold-500 via-gold-400 to-maroon-700 bg-clip-text text-transparent">
              With Apex University
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-sans leading-relaxed"
          >
            Unlock your full academic and professional potential. Fall Admissions 2026 are now open 
            for Undergraduate, Graduate, and Doctoral programs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/apply"
              className="w-full sm:w-auto bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-navy-950 font-extrabold px-8 py-4 rounded-xl text-base tracking-wider shadow-lg shadow-gold-500/10 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>APPLY ONLINE NOW</span>
              <FaArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/programs"
              className="w-full sm:w-auto bg-navy-900 hover:bg-navy-800 text-white font-bold px-8 py-4 rounded-xl text-base border border-navy-700 tracking-wider transition-colors duration-300 block"
            >
              EXPLORE PROGRAMS
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="relative z-10 py-12 bg-navy-900 border-y border-navy-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Active Students', value: 12000, suffix: '+', Icon: FaUserGraduate },
              { label: 'Expert Faculty', value: 450, suffix: '+', Icon: FaUsers },
              { label: 'Programs Offered', value: 85, suffix: '+', Icon: FaBookOpen },
              { label: 'National Rank', value: 5, suffix: 'th', Icon: FaAward },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center p-4"
              >
                <div className="bg-navy-800 p-4 rounded-full mb-3 border border-navy-750 text-gold-500">
                  <stat.Icon className="h-6 w-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-serif text-white font-bold">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <span className="mt-2 text-xs sm:text-sm text-gray-400 font-semibold tracking-wider uppercase">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements & News Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold-500 text-sm font-bold tracking-widest uppercase block mb-2">
            Campus Updates
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">
            Latest News & Announcements
          </h2>
          <div className="w-20 h-1 bg-maroon-800 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Fall Admission Deadline Extended',
              excerpt:
                'Due to the high volume of applications, the Admissions Council has extended the deadline for undergraduate submissions.',
              date: 'Sep 05, 2026',
              category: 'Admissions',
              icon: FaCalendarAlt,
            },
            {
              title: 'Annual Research Symposium 2026',
              excerpt:
                'Apex is proud to host the International Sciences & IT symposium, featuring keynote researchers from MIT and Oxford.',
              date: 'Oct 12, 2026',
              category: 'Events',
              icon: FaCalendarAlt,
            },
            {
              title: 'Scholarship Grants Allocation',
              excerpt:
                'Over Rs. 50 Million merit and need-based financial aid scholarship packages will be distributed this academic semester.',
              date: 'Aug 28, 2026',
              category: 'Announcements',
              icon: FaAward,
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-navy-900 border border-navy-800 rounded-2xl overflow-hidden hover:border-gold-500/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="p-6">
                {/* Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-navy-800 text-gold-400 text-xs px-3 py-1 rounded-full font-bold border border-navy-750">
                    {item.category}
                  </span>
                  <div className="flex items-center text-xs text-gray-500 space-x-1.5">
                    <FaClock className="h-3 w-3" />
                    <span>{item.date}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold font-serif text-white group-hover:text-gold-500 transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-gray-400 leading-relaxed">{item.excerpt}</p>
              </div>
              <div className="p-6 pt-0 border-t border-navy-850">
                <Link
                  to="/admissions"
                  className="flex items-center text-sm font-bold text-gold-500 hover:text-gold-400 transition-colors group/link"
                >
                  <span>Read Full Article</span>
                  <FaArrowRight className="h-3.5 w-3.5 ml-2 transform group-hover/link:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-navy-900 border-y border-navy-850 relative">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-gold-500 text-sm font-bold tracking-widest uppercase block mb-2">
              Student Success
            </span>
            <h2 className="text-3xl font-serif font-bold text-white">What Our Students Say</h2>
            <div className="w-12 h-1 bg-maroon-800 mx-auto mt-3 rounded-full" />
          </motion.div>

          {/* Testimonial slider view */}
          <div className="relative min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {testimonials.map(
                (test, idx) =>
                  idx === activeTestimonial && (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.4 }}
                      className="text-center flex flex-col items-center"
                    >
                      {/* Quote Mark Icon */}
                      <span className="text-6xl font-serif text-maroon-700/60 leading-none">“</span>
                      <p className="text-lg md:text-xl text-gray-300 italic max-w-2xl leading-relaxed -mt-4">
                        {test.quote}
                      </p>
                      {/* Avatar Image */}
                      <img
                        className="w-16 h-16 rounded-full border-2 border-gold-500 object-cover mt-6 shadow-md shadow-navy-950/60"
                        src={test.image}
                        alt={test.name}
                      />
                      <h4 className="text-base font-bold text-white mt-3 font-serif">{test.name}</h4>
                      <span className="text-xs text-gold-500 font-semibold tracking-wider">
                        {test.program}
                      </span>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2.5 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeTestimonial ? 'bg-gold-500 scale-125' : 'bg-gray-700'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold-500 text-sm font-bold tracking-widest uppercase block mb-2">
            Have Questions?
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-maroon-800 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div>
          <Accordion title="1. Fall Admission form jama karne ki aakhri tareeq kya hai?">
            Fall admissions registration fill karne ki standard deadline 31st August hai, par 
            halia extension ke mutabiq aap 10th September, 2026 tak direct register ho sakte hain. 
            Late fees ke sath admissions 15th September tak allow kiye jayenge.
          </Accordion>
          <Accordion title="2. Entry Test kaisa hoga aur iska syllabus kya hai?">
            Har degree ke liye Entry Test computer-based MCQ format me hoga. Undergraduate level 
            par English, Mathematics/Basic Sci, and Analytical Reasoning ke sections hote hain. 
            Syllabus outline aur sample papers aap hamare admissions portal se download kar sakte hain.
          </Accordion>
          <Accordion title="3. Kya Apex University me Scholarships available hain?">
            Jee haan, Apex University me 3 main categories me financial assistance di jati hai:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Merit Scholarships:</strong> Matric/FSc ya A-Levels me outstanding performance par 50% se 100% tuition fee waiver.</li>
              <li><strong>Need-based Financial Aid:</strong> Un eligible students ke liye jo resource limitations ki wajah se fees pay nahi kar sakte.</li>
              <li><strong>Sport and Extra-Curricular Grants:</strong> National ya Regional levels par achievements par specialized awards.</li>
            </ul>
          </Accordion>
          <Accordion title="4. Admission ke liye kaunse documents darkaar hote hain?">
            Form submit karte waqt aapko Matric/Intermediate marks sheets transcripts, CNIC/B-Form copy, 
            guardian CNIC copy, aur recent passport-sized pictures upload karni hogi. Original 
            documents selection ke baad verification stage par darkaar hote hain.
          </Accordion>
          <Accordion title="5. Entry Test ke baad result aur Merit list kab display hoti hai?">
            Entry test conduct hone ke 5 din ke andar marks result generate ho jata hai. First merit 
            list entry test phase ke mukammal hone ke 10 days baad admissions official dashboard par 
            publish kar di jati hai.
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-8 bg-navy-900 border-t border-navy-850">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info and Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <span className="text-gold-500 text-sm font-bold tracking-widest uppercase block mb-2">
                  Get In Touch
                </span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">
                  Contact Admissions Office
                </h2>
                <p className="mt-4 text-gray-400 leading-relaxed text-sm md:text-base">
                  Aapko admissions checklist, eligibility criteria ya fees structure se mutalik koi bhi 
                  sawal poochna ho, hamare experts aapki help ke liye available hain.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-navy-800 border border-navy-750 p-3 rounded-lg text-gold-500 flex-shrink-0">
                    <FaMapMarkerAlt className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white font-serif">Campus Address</h4>
                    <p className="text-sm text-gray-400">Block 4, Gulshan-e-Iqbal Main Karsaz Rd, Karachi, Pakistan</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-navy-800 border border-navy-750 p-3 rounded-lg text-gold-500 flex-shrink-0">
                    <FaPhoneAlt className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white font-serif">Helpline Contact</h4>
                    <p className="text-sm text-gray-400">+92 (21) 111-273-986 / +92 300 1234567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-navy-800 border border-navy-750 p-3 rounded-lg text-gold-500 flex-shrink-0">
                    <FaEnvelope className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white font-serif">Admissions Support Email</h4>
                    <p className="text-sm text-gray-400">admissions@apex.edu.pk / support@apex.edu.pk</p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-navy-950 border border-navy-800 text-white rounded-lg p-3 text-sm focus:outline-none focus:border-gold-500"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-navy-950 border border-navy-800 text-white rounded-lg p-3 text-sm focus:outline-none focus:border-gold-500"
                    required
                  />
                </div>
                <textarea
                  placeholder="Your Message / Query"
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-navy-950 border border-navy-800 text-white rounded-lg p-3 text-sm w-full focus:outline-none focus:border-gold-500 resize-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-maroon-800 to-maroon-700 hover:from-maroon-700 hover:to-maroon-600 text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors cursor-pointer flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <FaPaperPlane className="h-3 w-3" />
                </button>
                {formSubmitted && (
                  <p className="text-sm text-green-400">Thank you! Your query has been submitted.</p>
                )}
              </form>
            </motion.div>

            {/* Map Embed */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full h-[400px] lg:h-auto min-h-[350px] rounded-2xl overflow-hidden border border-navy-800 shadow-xl"
            >
              <iframe
                title="Apex University Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.396593574929!2d67.08221601447953!3d24.89131295099307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ed6b23bdf7b%3A0xe54e66299b9cf9a3!2sNational%20University%20of%20Sciences%20and%20Technology%20(NUST)%20Karachi%20Campus!5e0!3m2!1sen!2spk!4v1652398273641!5m2!1sen!2spk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
