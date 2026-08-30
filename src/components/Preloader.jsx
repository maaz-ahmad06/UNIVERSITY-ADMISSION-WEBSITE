import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Increment progress counter over 2.2 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    const timeout = setTimeout(() => {
      if (onComplete) onComplete();
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-navy-950 text-white select-none"
    >
      <div className="relative flex flex-col items-center">
        {/* Spinner & Cap Container - Centered */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* Animated outer ring spinner */}
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-t-gold-500 border-r-transparent border-b-maroon-800 border-l-transparent"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
          />

          {/* Animated graduation cap icon inside */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-12 h-12 text-gold-500"
            animate={{
              scale: [1, 1.15, 1],
              rotate: [0, -5, 5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: 'easeInOut',
            }}
          >
            <path d="M12 3L1 9L12 15L21 10.09V17H23V9L12 3Z" />
            <path d="M4.5 12.06V16.71C4.5 18.25 7.86 19.5 12 19.5C16.14 19.5 19.5 18.25 19.5 16.71V12.06L12 16.15L4.5 12.06Z" />
          </motion.svg>
        </div>

        {/* Loading Text */}
        <motion.h1
          className="mt-8 text-2xl font-serif tracking-wider font-semibold text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          APEX UNIVERSITY
        </motion.h1>

        {/* Subtitle / Tagline */}
        <motion.p
          className="mt-2 text-sm text-gray-400 tracking-widest text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          SHAPING THE FUTURE
        </motion.p>

        {/* Progress Bar Container */}
        <div className="mt-8 w-64 h-1.5 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-maroon-800 via-gold-500 to-gold-400"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Progress Percent Text */}
        <span className="mt-2 text-xs font-mono text-gold-300">{progress}%</span>
      </div>
    </motion.div>
  );
}
