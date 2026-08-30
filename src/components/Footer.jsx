import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGraduationCap,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-navy-950 text-gray-300 pt-16 pb-8 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Col */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3 text-white group">
              <div className="bg-gradient-to-br from-maroon-800 to-gold-500 p-2 rounded-lg">
                <FaGraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="font-serif font-bold text-xl tracking-wide block">APEX</span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-gold-500 block">
                  University
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed pt-2">
              Empowering brilliant minds through world-class education, state-of-the-art research
              centers, and global industry partnerships since 1994.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-3 pt-3">
              {[
                { Icon: FaFacebookF, url: '#' },
                { Icon: FaTwitter, url: '#' },
                { Icon: FaLinkedinIn, url: '#' },
                { Icon: FaInstagram, url: '#' },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-navy-800 border border-navy-700 hover:border-gold-500 hover:text-gold-500 transition-all duration-300"
                >
                  <item.Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-base font-bold tracking-wider mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gold-500">
              QUICK LINKS
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Admissions & Requirements', path: '/admissions' },
                { name: 'Academic Programs', path: '/programs' },
                { name: 'Campus Gallery', path: '/campus-life' },
                { name: 'About Apex Univ', path: '/about' },
                { name: 'Contact Admissions Office', path: '/contact' },
                { name: 'Apply Now (Online Portal)', path: '/apply' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="hover:text-gold-500 transition-colors duration-200 block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-white text-base font-bold tracking-wider mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gold-500">
              DEPARTMENTS
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                'Computer Science & IT',
                'Business Administration',
                'Mechanical & Electrical Eng.',
                'Medical & Health Sciences',
                'Humanities & Social Sciences',
                'School of Fine Arts & Design',
              ].map((dept, idx) => (
                <li key={idx}>
                  <Link
                    to="/programs"
                    className="hover:text-gold-500 transition-colors duration-200 block"
                  >
                    {dept}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-white text-base font-bold tracking-wider mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gold-500">
                SUBSCRIBE
              </h3>
              <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                Stay updated with the latest admission schedules, campus events, and announcements.
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  className="bg-navy-900 border border-navy-700 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold-500 flex-grow"
                  required
                />
                <button
                  type="submit"
                  className="bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold px-4 py-2 rounded-lg text-sm transition-colors cursor-pointer"
                >
                  Join
                </button>
              </form>
              {subscribed && (
                <p className="text-xs text-green-400 mt-2">Subscribed successfully!</p>
              )}
            </div>

            <div className="space-y-2.5 pt-2 border-t border-navy-850">
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <FaPhoneAlt className="text-gold-500 h-3.5 w-3.5" />
                <span>+92 (21) 111-APEX-UNIV</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <FaEnvelope className="text-gold-500 h-3.5 w-3.5" />
                <span>admissions@apex.edu.pk</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-navy-900 text-center text-xs text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Apex University. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gold-500">Privacy Policy</a>
            <a href="#" className="hover:text-gold-500">Terms of Use</a>
            <a href="#" className="hover:text-gold-500">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
