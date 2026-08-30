import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCheckCircle,
  FaFileInvoice,
  FaFileSignature,
  FaLaptopCode,
  FaListOl,
  FaRegComments,
} from 'react-icons/fa';
import Accordion from '../components/Accordion';

export default function Admissions() {
  const steps = [
    {
      title: 'Apply Online',
      desc: 'Form portal par register hon aur personal details, degree preferences and academic records select karein.',
      Icon: FaLaptopCode,
    },
    {
      title: 'Submit Documents',
      desc: 'Matric/Intermediate marksheets transcripts aur photo digital format me portal par upload karein.',
      Icon: FaFileInvoice,
    },
    {
      title: 'Entry Test',
      desc: 'Selected undergraduate/graduate degrees ke liye computer-based entry exam pass karein.',
      Icon: FaFileSignature,
    },
    {
      title: 'Interview & Evaluation',
      desc: 'Selected programs ke departments qualified candidates ka interview panel conduct karte hain.',
      Icon: FaRegComments,
    },
    {
      title: 'Merit List Publication',
      desc: 'Entry test marks aur academic results ki base par final lists website par lagayi jati hain.',
      Icon: FaListOl,
    },
    {
      title: 'Fee Submission & Enrollment',
      desc: 'Admissions confirm karne ke liye relevant semester voucher bank me submit karein aur roll number receive karein.',
      Icon: FaCheckCircle,
    },
  ];

  return (
    <div className="bg-navy-950 text-white min-h-screen pt-28 pb-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto space-y-20">
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-gold-500 text-sm font-bold tracking-widest uppercase block mb-2">
            Admission Guidelines
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">How to Apply & Enroll</h1>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            Apex Admission Process bilkul transparent aur streamlined hai. Neeche diye gaye steps ko step-by-step 
            follow karke online apply karein.
          </p>
        </div>

        {/* Timeline (Step 7) */}
        <div>
          <h2 className="text-2xl md:text-3.5xl font-serif font-bold text-center text-white mb-16 relative">
            Admission Steps Timeline
            <div className="w-16 h-1 bg-maroon-800 mx-auto mt-4 rounded-full" />
          </h2>

          <div className="relative border-l-2 border-navy-800 ml-4 md:ml-32 space-y-12">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline Icon Node */}
                <div className="absolute -left-[21px] top-0.5 w-10 h-10 rounded-full bg-navy-900 border-2 border-gold-500 flex items-center justify-center text-gold-500 shadow-md shadow-navy-950">
                  <step.Icon className="h-4.5 w-4.5" />
                </div>

                {/* Left side Badge (only on md screens) */}
                <div className="hidden md:block absolute -left-28 top-2 text-right w-20">
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-500 bg-navy-900 border border-navy-800 px-2 py-1 rounded-md">
                    Step {idx + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="bg-navy-900/60 border border-navy-850 p-6 rounded-2xl hover:border-gold-500/30 transition-colors duration-300">
                  {/* Step Badge (Mobile only) */}
                  <span className="md:hidden inline-block text-[10px] font-bold uppercase tracking-wider text-gold-500 bg-navy-850 border border-navy-800 px-2 py-0.5 rounded-md mb-2">
                    Step {idx + 1}
                  </span>
                  <h3 className="text-xl font-bold font-serif text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Eligibility Accordion (Step 7) */}
        <div className="pt-8">
          <h2 className="text-2xl md:text-3.5xl font-serif font-bold text-center text-white mb-12 relative">
            Eligibility Criteria
            <div className="w-16 h-1 bg-maroon-800 mx-auto mt-4 rounded-full" />
          </h2>

          <div className="space-y-4">
            <Accordion title="1. Undergraduate Programs (BS Degrees)">
              <p className="mb-2">BS level degree programs me admissions ke liye eligibility standard ye hai:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li>Intermediate (HSSC) Pre-Engineering/Pre-Medical/ICS ya General Science me minimum 60% standard aggregate marks hon.</li>
                <li>A-Levels candidates ke liye minimum CCC grades aur IBCC certificate verification mandatory hai.</li>
                <li>Apex University Entry Test me min 50% score hasil karna lazmi hai.</li>
              </ul>
            </Accordion>

            <Accordion title="2. Graduate Programs (MS / MBA Degrees)">
              <p className="mb-2">MS programs and Post-graduate business degrees ke liye eligibility details:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li>Relevant field me 16 Years degree (BS/BE) recognized institution se completed ho, with minimum CGPA 2.50 out of 4.0.</li>
                <li>GAT (General) score minimum 50% result ke sath valid state check system me ho.</li>
                <li>Admissions department aur research panel review evaluate karega.</li>
              </ul>
            </Accordion>

            <Accordion title="3. Doctoral Research (PhD Degrees)">
              <p className="mb-2">PhD Programs registration rules:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li>MS/MPhil degree with research thesis, minimum CGPA 3.0 out of 4.0 hold karte hon.</li>
                <li>GRE/GAT Subjective criteria checklist complete honi chahiye.</li>
                <li>Research proposal brief and two academic recommendation letter of references required.</li>
              </ul>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
