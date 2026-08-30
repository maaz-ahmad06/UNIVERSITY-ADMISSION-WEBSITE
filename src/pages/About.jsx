import React from 'react';
import { motion as dMotion } from 'framer-motion';
import {
  FaGlobe,
  FaChalkboardTeacher,
  FaUniversity,
  FaAward,
  FaLaptopCode,
  FaHandHoldingUsd,
} from 'react-icons/fa';

export default function About() {
  const values = [
    {
      title: 'Global Recognition',
      desc: 'Degrees accredited worldwide and partnerships with top foreign research institutes.',
      Icon: FaGlobe,
    },
    {
      title: 'Experienced Faculty',
      desc: 'Over 80% of our teachers hold PhDs and active patents in their respective research fields.',
      Icon: FaChalkboardTeacher,
    },
    {
      title: 'Modern Campus & Labs',
      desc: 'State-of-the-art tech parks, AI laboratories, high-speed Wi-Fi, and digital libraries.',
      Icon: FaUniversity,
    },
    {
      title: 'Scholarship Programs',
      desc: 'Generous merit and need-based financial aid covering up to 100% of study expenses.',
      Icon: FaHandHoldingUsd,
    },
    {
      title: 'Industry Connections',
      desc: 'Strong internship tie-ups with leading technology conglomerates and corporations.',
      Icon: FaLaptopCode,
    },
    {
      title: 'Extracurricular Life',
      desc: '20+ student clubs ranging from robotics, debating societies, to athletic programs.',
      Icon: FaAward,
    },
  ];

  return (
    <div className="bg-navy-950 text-white min-h-screen pt-28 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Intro */}
        <dMotion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-gold-500 text-sm font-bold tracking-widest uppercase block mb-2">
            Establishment & Legacy
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">About Apex University</h1>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            Apex University has been at the forefront of educational excellence for over three decades. 
            Located in the heart of Karachi, Pakistan, we combine classical academic training with modern 
            technical skills to transform students into leaders.
          </p>
        </dMotion.div>

        {/* History / Vision / Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <dMotion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3.5xl font-serif font-bold text-white border-l-4 border-gold-500 pl-4">
              Our Vision & Core Mission
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Hamara vision ek aesa academic environment create karna hai jahan innovation aur character 
              building ko rawaj diya jaye. Hum students ko na sirf theoretical education farahim karte 
              hain balkay practical industry challenges ke liye taiyar karte hain.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Aalmi mayaar ki laboratories aur global research collaborations ke zariye, Apex ke graduates 
              technological advancement aur business leadership me apna loha manwatay hain.
            </p>
          </dMotion.div>

          <dMotion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl border border-navy-800"
          >
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"
              alt="Apex University Students"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
          </dMotion.div>
        </div>

        {/* Why Choose Us Section */}
        <div className="pt-8">
          <dMotion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-gold-500 text-sm font-bold tracking-widest uppercase block mb-2">
              Our Core Strengths
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">Why Choose Us?</h2>
            <div className="w-16 h-1 bg-maroon-800 mx-auto mt-3 rounded-full" />
          </dMotion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <dMotion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, borderColor: '#D4AF37' }}
                className="bg-navy-900 border border-navy-850 p-8 rounded-2xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-navy-800 rounded-xl border border-navy-750 text-gold-500 mb-6 group-hover:bg-gradient-to-br group-hover:from-maroon-800 group-hover:to-maroon-900 group-hover:text-white transition-all duration-300">
                  <val.Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold font-serif text-white mb-3 group-hover:text-gold-500 transition-colors">
                  {val.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{val.desc}</p>
              </dMotion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
