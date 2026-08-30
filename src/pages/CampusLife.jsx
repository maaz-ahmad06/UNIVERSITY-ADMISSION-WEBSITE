import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaExpand } from 'react-icons/fa';

export default function CampusLife() {
  const tabs = ['All', 'Campus', 'Events', 'Sports', 'Labs'];

  const galleryItems = [
    {
      id: 1,
      title: 'Central Library Hall',
      category: 'Campus',
      img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Convocation Ceremony 2025',
      category: 'Events',
      img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Engineering AI & Robotics Lab',
      category: 'Labs',
      img: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      title: 'Annual Football Championship',
      category: 'Sports',
      img: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      title: 'Executive Seminar Hall',
      category: 'Events',
      img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 6,
      title: 'Boys Hostel Courtyard',
      category: 'Campus',
      img: 'https://images.unsplash.com/photo-1559135197-8a45ea74d56b?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 7,
      title: 'Chemistry & Biotech Labs',
      category: 'Labs',
      img: 'https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 8,
      title: 'Multi-purpose Gymnasium',
      category: 'Sports',
      img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const [activeTab, setActiveTab] = useState('All');
  const [selectedImageIdx, setSelectedImageIdx] = useState(null);

  const filteredItems = galleryItems.filter(
    (item) => activeTab === 'All' || item.category === activeTab
  );

  const openLightbox = (id) => {
    const idx = galleryItems.findIndex((item) => item.id === id);
    setSelectedImageIdx(idx);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedImageIdx((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedImageIdx((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-navy-950 text-white min-h-screen pt-28 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-gold-500 text-sm font-bold tracking-widest uppercase block mb-2">
            Campus Galleries
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Discover Campus Life</h1>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            Take a visual tour of Apex University's infrastructure, laboratories, sports matches, 
            academic convocations, and student events.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center flex-wrap gap-2.5">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-maroon-800 to-maroon-700 text-white shadow-md'
                  : 'bg-navy-900 hover:bg-navy-800 text-gray-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Image Grid Layout */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => openLightbox(item.id)}
                className="relative rounded-2xl overflow-hidden group cursor-pointer border border-navy-850 aspect-square shadow-lg"
              >
                {/* Photo */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Hover overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350 p-6 flex flex-col justify-end">
                  <div className="bg-gold-500/10 border border-gold-500/20 backdrop-blur-sm self-start text-gold-400 text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider mb-2">
                    {item.category}
                  </div>
                  <h3 className="text-white text-base font-bold font-serif leading-snug">
                    {item.title}
                  </h3>
                  <div className="mt-2 text-gold-500 flex items-center text-xs space-x-1.5 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    <FaExpand className="h-3 w-3" />
                    <span>View Large Image</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal (Step 9) */}
        <AnimatePresence>
          {selectedImageIdx !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImageIdx(null)}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 select-none"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImageIdx(null)}
                className="absolute top-6 right-6 text-white hover:text-gold-500 bg-navy-900/60 p-3 rounded-full hover:bg-navy-900 border border-navy-800 transition-colors cursor-pointer"
                aria-label="Close lightbox"
              >
                <FaTimes className="h-5 w-5" />
              </button>

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-4 md:left-8 text-white hover:text-gold-500 bg-navy-900/60 p-3.5 rounded-full hover:bg-navy-900 border border-navy-800 transition-colors cursor-pointer"
                aria-label="Previous image"
              >
                <FaChevronLeft className="h-5 w-5" />
              </button>

              {/* Central Expanded Content */}
              <motion.div
                initial={{ scale: 0.9, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 15 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl max-h-[80vh] w-full flex flex-col items-center"
              >
                <img
                  src={galleryItems[selectedImageIdx].img}
                  alt={galleryItems[selectedImageIdx].title}
                  className="max-w-full max-h-[70vh] object-contain rounded-xl border border-navy-800 shadow-2xl"
                />
                {/* Details Footer */}
                <div className="text-center mt-6">
                  <span className="text-xs uppercase tracking-widest text-gold-500 font-bold">
                    {galleryItems[selectedImageIdx].category}
                  </span>
                  <h2 className="text-lg md:text-xl font-serif font-bold text-white mt-1">
                    {galleryItems[selectedImageIdx].title}
                  </h2>
                </div>
              </motion.div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-4 md:right-8 text-white hover:text-gold-500 bg-navy-900/60 p-3.5 rounded-full hover:bg-navy-900 border border-navy-800 transition-colors cursor-pointer"
                aria-label="Next image"
              >
                <FaChevronRight className="h-5 w-5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
