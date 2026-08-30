import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaLaptopCode,
  FaBriefcase,
  FaCog,
  FaStethoscope,
  FaPaintBrush,
  FaGlobe,
  FaSearch,
} from 'react-icons/fa';

export default function Programs() {
  const categories = ['All', 'Computing', 'Engineering', 'Business', 'Medical', 'Arts'];

  const programsList = [
    {
      id: 'cs',
      name: 'BS Computer Science',
      category: 'Computing',
      desc: 'Learn software engineering, database management, web development, and cloud computing architectures.',
      duration: '4 Years',
      icon: FaLaptopCode,
    },
    {
      id: 'ai',
      name: 'BS Artificial Intelligence',
      category: 'Computing',
      desc: 'Dive deep into neural networks, machine learning algorithms, computer vision, and robotics engineering.',
      duration: '4 Years',
      icon: FaLaptopCode,
    },
    {
      id: 'bba',
      name: 'Bachelor of Business Admin (BBA)',
      category: 'Business',
      desc: 'Develop leadership, financial management, marketing strategies, and venture creation skills.',
      duration: '4 Years',
      icon: FaBriefcase,
    },
    {
      id: 'ee',
      name: 'BE Electrical Engineering',
      category: 'Engineering',
      desc: 'Master power systems, microcontrollers, control circuits, and high-voltage transmission grids.',
      duration: '4 Years',
      icon: FaCog,
    },
    {
      id: 'me',
      name: 'BE Mechanical Engineering',
      category: 'Engineering',
      desc: 'Understand thermodynamics, fluids dynamics, automotive tech, and automated manufacturing systems.',
      duration: '4 Years',
      icon: FaCog,
    },
    {
      id: 'mbbs',
      name: 'MBBS (Medicine & Surgery)',
      category: 'Medical',
      desc: 'Apex school of health offers clinical practice, pathology, human anatomy, and surgery certifications.',
      duration: '5 Years',
      icon: FaStethoscope,
    },
    {
      id: 'pharmd',
      name: 'Doctor of Pharmacy (Pharm-D)',
      category: 'Medical',
      desc: 'Study pharmacology, industrial pharmaceutics, drug action, and community pharmacy management.',
      duration: '5 Years',
      icon: FaStethoscope,
    },
    {
      id: 'fa',
      name: 'Bachelor of Fine Arts (BFA)',
      category: 'Arts',
      desc: 'Develop your signature style in painting, sculpting, graphic media, and contemporary art history.',
      duration: '4 Years',
      icon: FaPaintBrush,
    },
    {
      id: 'media',
      name: 'BS Media Studies',
      category: 'Arts',
      desc: 'Cover digital journalism, television production, media laws, public relations, and social media marketing.',
      duration: '4 Years',
      icon: FaGlobe,
    },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter logic
  const filteredPrograms = programsList.filter((prog) => {
    const matchesSearch = prog.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prog.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || prog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-navy-950 text-white min-h-screen pt-28 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-gold-500 text-sm font-bold tracking-widest uppercase block mb-2">
            Academic Fields
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Our Programs & Departments</h1>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            Select a pathway to unlock your career potential. We offer accredited degree programs 
            under the supervision of foreign-qualified researchers.
          </p>
        </div>

        {/* Filter controls */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg-navy-900 border border-navy-800 p-6 rounded-2xl">
          {/* Categories tabs */}
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-maroon-800 to-maroon-700 text-white shadow-md'
                    : 'bg-navy-820 hover:bg-navy-800 text-gray-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search programs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-navy-950 border border-navy-800 rounded-xl pl-10 pr-4 py-2.5 text-sm w-full focus:outline-none focus:border-gold-500 text-white"
            />
            <FaSearch className="absolute left-3.5 top-3.5 text-gray-500 h-4 w-4" />
          </div>
        </div>

        {/* Grid Display */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPrograms.length > 0 ? (
              filteredPrograms.map((prog) => (
                <motion.div
                  key={prog.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -6, borderColor: '#D4AF37' }}
                  className="bg-navy-900 border border-navy-850 p-8 rounded-2xl flex flex-col justify-between group transition-all duration-350"
                >
                  <div>
                    {/* Header: Icon & Category */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 flex items-center justify-center bg-navy-850 rounded-xl text-gold-500 group-hover:bg-gradient-to-br group-hover:from-maroon-800 group-hover:to-maroon-900 group-hover:text-white transition-all duration-300">
                        <prog.icon className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] tracking-widest uppercase font-bold text-gray-500 bg-navy-950/40 border border-navy-850 px-2.5 py-1 rounded-full">
                        {prog.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-serif text-white mb-3 group-hover:text-gold-500 transition-colors">
                      {prog.name}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-6">{prog.desc}</p>
                  </div>

                  {/* Card bottom details */}
                  <div className="pt-6 border-t border-navy-850 flex items-center justify-between">
                    <span className="text-xs text-gold-400 font-semibold uppercase tracking-wider">
                      Duration: {prog.duration}
                    </span>
                    <Link
                      to="/apply"
                      className="text-xs font-bold text-white bg-maroon-800 hover:bg-maroon-700 px-3.5 py-2 rounded-lg transition-colors"
                    >
                      Apply Now
                    </Link>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-16 text-center text-gray-500">
                Aapke search query se milta julta koi program nahi mila. Koshish karein aur simple words use karein.
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
