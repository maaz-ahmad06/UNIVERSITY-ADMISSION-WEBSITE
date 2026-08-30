import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaUser,
  FaGraduationCap,
  FaList,
  FaCloudUploadAlt,
  FaCheckCircle,
  FaArrowRight,
  FaArrowLeft,
  FaExclamationCircle,
} from 'react-icons/fa';

export default function Apply() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [isSuccess, setIsSuccess] = useState(false);
  const [shake, setShake] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    defaultValues: {
      name: '',
      cnic: '',
      email: '',
      phone: '',
      address: '',
      matricMarks: '',
      matricBoard: '',
      interMarks: '',
      interBoard: '',
      program: '',
      transcriptFile: null,
      cnicFile: null,
      photoFile: null,
    },
  });

  const stepsInfo = [
    { num: 1, title: 'Personal Info', Icon: FaUser },
    { num: 2, title: 'Academic Details', Icon: FaGraduationCap },
    { num: 3, title: 'Program Choice', Icon: FaList },
    { num: 4, title: 'Upload Files', Icon: FaCloudUploadAlt },
    { num: 5, title: 'Review & Send', Icon: FaCheckCircle },
  ];

  // Validate the current step before advancing
  const handleNext = async () => {
    let fieldsToValidate = [];
    if (step === 1) {
      fieldsToValidate = ['name', 'cnic', 'email', 'phone', 'address'];
    } else if (step === 2) {
      fieldsToValidate = ['matricMarks', 'matricBoard', 'interMarks', 'interBoard'];
    } else if (step === 3) {
      fieldsToValidate = ['program'];
    } else if (step === 4) {
      fieldsToValidate = ['transcriptFile', 'cnicFile', 'photoFile'];
    }

    const isValid = await trigger(fieldsToValidate);

    if (isValid) {
      setDirection(1);
      setStep((prev) => prev + 1);
    } else {
      // Trigger error shake animation
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  const handlePrev = () => {
    setDirection(-1);
    setStep((prev) => prev - 1);
  };

  const onSubmit = (data) => {
    console.log('Final Data Submission:', data);
    setIsSuccess(true);
  };

  // Framer motion variants for step panels slide transitions
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 150 : -150,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir < 0 ? 150 : -150,
      opacity: 0,
    }),
  };

  if (isSuccess) {
    return (
      <div className="bg-navy-950 text-white min-h-screen pt-28 pb-20 px-4 md:px-8 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', duration: 0.6 }}
          className="max-w-md w-full bg-navy-900 border border-navy-800 rounded-3xl p-8 text-center space-y-6 shadow-2xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-24 h-24 bg-gradient-to-tr from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto text-white text-5xl shadow-lg shadow-green-900/30"
          >
            <FaCheckCircle />
          </motion.div>
          <h1 className="text-3xl font-serif font-bold text-white">Application Sent!</h1>
          <p className="text-gray-300 leading-relaxed text-sm">
            Aapki application dashboard me successfully save ho gayi hai. Hamara admissions panel 
            academic documents verify karne ke baad aapko email par details notify karega.
          </p>

          <div className="bg-navy-950 p-4 rounded-xl border border-navy-850 font-mono text-xs">
            <span className="text-gray-500 block">APPLICATION ID</span>
            <span className="text-gold-500 font-bold text-lg">APEX-2026-{Math.floor(1000 + Math.random() * 9000)}</span>
          </div>

          <a
            href="/"
            className="w-full inline-block bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-navy-950 font-extrabold py-3.5 rounded-xl text-sm transition-colors"
          >
            BACK TO HOMEPAGE
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-navy-950 text-white min-h-screen pt-28 pb-20 px-4 md:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white">Online Admission Form</h1>
          <p className="text-sm text-gray-400 mt-2">
            Fall admissions process register karne ke liye niche di gayi multi-step instructions follow karein.
          </p>
        </div>

        {/* Stepper Progress Bar */}
        <div className="bg-navy-900 border border-navy-850 rounded-2xl p-4 md:p-6 shadow-lg overflow-x-auto">
          <div className="flex justify-between items-center min-w-[550px] px-2">
            {stepsInfo.map((s, idx) => (
              <React.Fragment key={s.num}>
                {/* Step circle */}
                <div className="flex flex-col items-center relative z-10">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 border-2 ${
                      step >= s.num
                        ? 'bg-gradient-to-tr from-maroon-800 to-maroon-700 border-gold-500 text-white shadow-md'
                        : 'bg-navy-950 border-navy-800 text-gray-500'
                    }`}
                  >
                    <s.Icon className="h-4.5 w-4.5" />
                  </div>
                  <span
                    className={`text-[10px] md:text-xs font-semibold mt-2 tracking-wide transition-colors ${
                      step >= s.num ? 'text-white' : 'text-gray-500'
                    }`}
                  >
                    {s.title}
                  </span>
                </div>

                {/* Connecting Line */}
                {idx < stepsInfo.length - 1 && (
                  <div className="flex-grow h-0.5 bg-navy-850 mx-2 relative -top-3">
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 bg-gold-500"
                      initial={{ width: '0%' }}
                      animate={{ width: step > s.num ? '100%' : '0%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Form Container with optional Shake Animation */}
        <motion.div
          animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.4 }}
          className="bg-navy-900 border border-navy-850 rounded-3xl p-6 md:p-8 shadow-2xl relative"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={step}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="space-y-6"
              >
                {/* STEP 1: Personal Info */}
                {step === 1 && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold font-serif border-l-4 border-gold-500 pl-3">
                      1. Personal Information
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="flex flex-col space-y-1">
                        <label className="text-xs text-gray-400 font-bold uppercase">Candidate Full Name</label>
                        <input
                          type="text"
                          {...register('name', { required: 'Naam likhna lazmi hai' })}
                          className={`bg-navy-950 border text-white rounded-lg p-3 text-sm focus:outline-none ${
                            errors.name ? 'border-red-500' : 'border-navy-800 focus:border-gold-500'
                          }`}
                        />
                        {errors.name && (
                          <span className="text-red-400 text-xs flex items-center gap-1.5 mt-1">
                            <FaExclamationCircle /> {errors.name.message}
                          </span>
                        )}
                      </div>

                      {/* CNIC */}
                      <div className="flex flex-col space-y-1">
                        <label className="text-xs text-gray-400 font-bold uppercase">CNIC / B-Form Number</label>
                        <input
                          type="text"
                          placeholder="e.g., 42101-1234567-1"
                          {...register('cnic', {
                            required: 'CNIC number likhna lazmi hai',
                            pattern: {
                              value: /^\d{5}-\d{7}-\d{1}$/,
                              message: 'Format thik karein (#####-#######-#)',
                            },
                          })}
                          className={`bg-navy-950 border text-white rounded-lg p-3 text-sm focus:outline-none ${
                            errors.cnic ? 'border-red-500' : 'border-navy-800 focus:border-gold-500'
                          }`}
                        />
                        {errors.cnic && (
                          <span className="text-red-400 text-xs flex items-center gap-1.5 mt-1">
                            <FaExclamationCircle /> {errors.cnic.message}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Email */}
                      <div className="flex flex-col space-y-1">
                        <label className="text-xs text-gray-400 font-bold uppercase">Email Address</label>
                        <input
                          type="email"
                          {...register('email', {
                            required: 'Email add karna lazmi hai',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Valid email type enter karein',
                            },
                          })}
                          className={`bg-navy-950 border text-white rounded-lg p-3 text-sm focus:outline-none ${
                            errors.email ? 'border-red-500' : 'border-navy-800 focus:border-gold-500'
                          }`}
                        />
                        {errors.email && (
                          <span className="text-red-400 text-xs flex items-center gap-1.5 mt-1">
                            <FaExclamationCircle /> {errors.email.message}
                          </span>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col space-y-1">
                        <label className="text-xs text-gray-400 font-bold uppercase">Phone Number</label>
                        <input
                          type="text"
                          placeholder="e.g., 03001234567"
                          {...register('phone', {
                            required: 'Phone number compulsory hai',
                            pattern: {
                              value: /^[0-9]{11}$/,
                              message: 'Valid 11 digit mobile number type karein',
                            },
                          })}
                          className={`bg-navy-950 border text-white rounded-lg p-3 text-sm focus:outline-none ${
                            errors.phone ? 'border-red-500' : 'border-navy-800 focus:border-gold-500'
                          }`}
                        />
                        {errors.phone && (
                          <span className="text-red-400 text-xs flex items-center gap-1.5 mt-1">
                            <FaExclamationCircle /> {errors.phone.message}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex flex-col space-y-1">
                      <label className="text-xs text-gray-400 font-bold uppercase">Home Address</label>
                      <textarea
                        {...register('address', { required: 'Pata likhna lazmi hai' })}
                        rows="3"
                        className={`bg-navy-950 border text-white rounded-lg p-3 text-sm focus:outline-none resize-none ${
                          errors.address ? 'border-red-500' : 'border-navy-800 focus:border-gold-500'
                        }`}
                      />
                      {errors.address && (
                        <span className="text-red-400 text-xs flex items-center gap-1.5 mt-1">
                          <FaExclamationCircle /> {errors.address.message}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* STEP 2: Academic details */}
                {step === 2 && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold font-serif border-l-4 border-gold-500 pl-3">
                      2. Previous Academic Details
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Matric / O-level Marks */}
                      <div className="flex flex-col space-y-1">
                        <label className="text-xs text-gray-400 font-bold uppercase">Matric / O-level Marks (%)</label>
                        <input
                          type="number"
                          placeholder="e.g., 85"
                          {...register('matricMarks', {
                            required: 'Matric numbers enter karein',
                            min: { value: 50, message: 'Minimum 50% required' },
                            max: { value: 100, message: 'Cannot exceed 100%' },
                          })}
                          className={`bg-navy-950 border text-white rounded-lg p-3 text-sm focus:outline-none ${
                            errors.matricMarks ? 'border-red-500' : 'border-navy-800 focus:border-gold-500'
                          }`}
                        />
                        {errors.matricMarks && (
                          <span className="text-red-400 text-xs flex items-center gap-1.5 mt-1">
                            <FaExclamationCircle /> {errors.matricMarks.message}
                          </span>
                        )}
                      </div>

                      {/* Matric Board */}
                      <div className="flex flex-col space-y-1">
                        <label className="text-xs text-gray-400 font-bold uppercase">Matric Board / Institute</label>
                        <input
                          type="text"
                          {...register('matricBoard', { required: 'Board/Institution name lazmi hai' })}
                          className={`bg-navy-950 border text-white rounded-lg p-3 text-sm focus:outline-none ${
                            errors.matricBoard ? 'border-red-500' : 'border-navy-800 focus:border-gold-500'
                          }`}
                        />
                        {errors.matricBoard && (
                          <span className="text-red-400 text-xs flex items-center gap-1.5 mt-1">
                            <FaExclamationCircle /> {errors.matricBoard.message}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Intermediate Marks */}
                      <div className="flex flex-col space-y-1">
                        <label className="text-xs text-gray-400 font-bold uppercase">Inter / A-level Marks (%)</label>
                        <input
                          type="number"
                          placeholder="e.g., 78"
                          {...register('interMarks', {
                            required: 'Intermediate percentage type karein',
                            min: { value: 50, message: 'Minimum 50% check aggregates' },
                            max: { value: 100, message: 'Cannot exceed 100%' },
                          })}
                          className={`bg-navy-950 border text-white rounded-lg p-3 text-sm focus:outline-none ${
                            errors.interMarks ? 'border-red-500' : 'border-navy-800 focus:border-gold-500'
                          }`}
                        />
                        {errors.interMarks && (
                          <span className="text-red-400 text-xs flex items-center gap-1.5 mt-1">
                            <FaExclamationCircle /> {errors.interMarks.message}
                          </span>
                        )}
                      </div>

                      {/* Inter Board */}
                      <div className="flex flex-col space-y-1">
                        <label className="text-xs text-gray-400 font-bold uppercase">Inter Board / Institution</label>
                        <input
                          type="text"
                          {...register('interBoard', { required: 'Board/College name details entry obligatory' })}
                          className={`bg-navy-950 border text-white rounded-lg p-3 text-sm focus:outline-none ${
                            errors.interBoard ? 'border-red-500' : 'border-navy-800 focus:border-gold-500'
                          }`}
                        />
                        {errors.interBoard && (
                          <span className="text-red-400 text-xs flex items-center gap-1.5 mt-1">
                            <FaExclamationCircle /> {errors.interBoard.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: Program Selection */}
                {step === 3 && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold font-serif border-l-4 border-gold-500 pl-3">
                      3. Select Academic Program
                    </h2>
                    <div className="flex flex-col space-y-1">
                      <label className="text-xs text-gray-400 font-bold uppercase">Desired Degree Program</label>
                      <select
                        {...register('program', { required: 'Degree choose karna lazmi hai' })}
                        className={`bg-navy-950 border text-white rounded-lg p-3 text-sm focus:outline-none ${
                          errors.program ? 'border-red-500' : 'border-navy-800 focus:border-gold-500'
                        }`}
                      >
                        <option value="">-- Choose Program --</option>
                        <option value="BS Computer Science">BS Computer Science (BS CS)</option>
                        <option value="BS Artificial Intelligence">BS Artificial Intelligence (BS AI)</option>
                        <option value="BBA">Bachelor of Business Admin (BBA)</option>
                        <option value="BE Electrical Engineering">BE Electrical Engineering (BE EE)</option>
                        <option value="BE Mechanical Engineering">BE Mechanical Engineering (BE ME)</option>
                        <option value="MBBS">MBBS (Medicine & Surgery)</option>
                        <option value="Bachelor of Fine Arts">Bachelor of Fine Arts (BFA)</option>
                      </select>
                      {errors.program && (
                        <span className="text-red-400 text-xs flex items-center gap-1.5 mt-1">
                          <FaExclamationCircle /> {errors.program.message}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* STEP 4: Document Upload */}
                {step === 4 && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold font-serif border-l-4 border-gold-500 pl-3">
                      4. Document Uploads (Mockup)
                    </h2>

                    {/* Transcript Upload */}
                    <div className="flex flex-col space-y-1">
                      <label className="text-xs text-gray-400 font-bold uppercase">Matric & Intermediate Transcripts (PDF/JPG)</label>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        {...register('transcriptFile', { required: 'Academic Transcripts attach karna lazmi hai' })}
                        className="bg-navy-950 border border-navy-800 text-white rounded-lg p-2.5 text-sm file:mr-4 file:py-1.5 file:px-3.5 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-navy-850 file:text-gold-500 hover:file:bg-navy-800 cursor-pointer"
                      />
                      {errors.transcriptFile && (
                        <span className="text-red-400 text-xs flex items-center gap-1.5 mt-1">
                          <FaExclamationCircle /> {errors.transcriptFile.message}
                        </span>
                      )}
                    </div>

                    {/* CNIC Copy */}
                    <div className="flex flex-col space-y-1">
                      <label className="text-xs text-gray-400 font-bold uppercase">CNIC / B-Form Front Image (PDF/JPG)</label>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        {...register('cnicFile', { required: 'CNIC copy attachment is required' })}
                        className="bg-navy-950 border border-navy-800 text-white rounded-lg p-2.5 text-sm file:mr-4 file:py-1.5 file:px-3.5 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-navy-850 file:text-gold-500 hover:file:bg-navy-800 cursor-pointer"
                      />
                      {errors.cnicFile && (
                        <span className="text-red-400 text-xs flex items-center gap-1.5 mt-1">
                          <FaExclamationCircle /> {errors.cnicFile.message}
                        </span>
                      )}
                    </div>

                    {/* Photo upload */}
                    <div className="flex flex-col space-y-1">
                      <label className="text-xs text-gray-400 font-bold uppercase">Recent Passport Size Photo (JPG/PNG)</label>
                      <input
                        type="file"
                        accept=".jpg,.jpeg,.png"
                        {...register('photoFile', { required: 'Passport sized photo is mandatory' })}
                        className="bg-navy-950 border border-navy-800 text-white rounded-lg p-2.5 text-sm file:mr-4 file:py-1.5 file:px-3.5 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-navy-850 file:text-gold-500 hover:file:bg-navy-800 cursor-pointer"
                      />
                      {errors.photoFile && (
                        <span className="text-red-400 text-xs flex items-center gap-1.5 mt-1">
                          <FaExclamationCircle /> {errors.photoFile.message}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* STEP 5: Review & Submit */}
                {step === 5 && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold font-serif border-l-4 border-gold-500 pl-3">
                      5. Review Your Application
                    </h2>

                    <div className="bg-navy-950 border border-navy-850 rounded-2xl p-6 text-sm space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-gray-500 block uppercase text-[10px] font-bold">Candidate Name</span>
                          <span className="text-white text-base font-semibold">{getValues('name')}</span>
                        </div>
                        <div>
                          <span className="text-gray-500 block uppercase text-[10px] font-bold">CNIC Number</span>
                          <span className="text-white text-base font-semibold">{getValues('cnic')}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-gray-500 block uppercase text-[10px] font-bold">Email Address</span>
                          <span className="text-white font-mono">{getValues('email')}</span>
                        </div>
                        <div>
                          <span className="text-gray-500 block uppercase text-[10px] font-bold">Phone Number</span>
                          <span className="text-white">{getValues('phone')}</span>
                        </div>
                      </div>

                      <div>
                        <span className="text-gray-500 block uppercase text-[10px] font-bold">Home Address</span>
                        <span className="text-white">{getValues('address')}</span>
                      </div>

                      <div className="border-t border-navy-850 pt-4 grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-gray-500 block uppercase text-[10px] font-bold">Matric Board & Marks</span>
                          <span className="text-white">
                            {getValues('matricBoard')} ({getValues('matricMarks')}%)
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-500 block uppercase text-[10px] font-bold">Intermediate Board & Marks</span>
                          <span className="text-white">
                            {getValues('interBoard')} ({getValues('interMarks')}%)
                          </span>
                        </div>
                      </div>

                      <div className="border-t border-navy-850 pt-4">
                        <span className="text-gray-500 block uppercase text-[10px] font-bold">Selected Program Choice</span>
                        <span className="text-gold-500 text-lg font-bold font-serif">{getValues('program')}</span>
                      </div>
                    </div>

                    <p className="text-xs text-gray-500">
                      Submit dabane se pehle check karlein ke details correct hain. Final submission ke 
                      baad credentials edit nahi ho sakenge.
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Form Nav Buttons */}
            <div className="border-t border-navy-850 pt-6 flex justify-between">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="bg-navy-950 border border-navy-800 hover:bg-navy-800 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors cursor-pointer flex items-center space-x-2"
                >
                  <FaArrowLeft className="h-3 w-3" />
                  <span>Previous</span>
                </button>
              ) : (
                <div />
              )}

              {step < 5 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-navy-950 font-extrabold px-6 py-3 rounded-xl text-sm transition-colors cursor-pointer flex items-center space-x-2"
                >
                  <span>Next Step</span>
                  <FaArrowRight className="h-3 w-3" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-gradient-to-r from-maroon-800 to-maroon-700 hover:from-maroon-700 hover:to-maroon-600 text-white font-bold px-8 py-3 rounded-xl text-sm transition-colors cursor-pointer flex items-center space-x-2 shadow-lg shadow-maroon-900/30"
                >
                  <span>Submit Application</span>
                  <FaCheckCircle className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
