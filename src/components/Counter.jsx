import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

export default function Counter({ target, duration = 1.5, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const countStarted = useRef(false);

  useEffect(() => {
    if (isInView && !countStarted.current) {
      countStarted.current = true;
      let start = 0;
      const end = parseInt(target, 10);
      if (start === end) return;

      const totalMiliseconds = duration * 1000;
      const intervalTime = 30; // ms per update
      const totalSteps = Math.ceil(totalMiliseconds / intervalTime);
      const increment = (end - start) / totalSteps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        if (currentStep >= totalSteps) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start + increment * currentStep));
        }
      }, intervalTime);

      return () => clearInterval(timer);
    }
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="font-bold tracking-tight">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
