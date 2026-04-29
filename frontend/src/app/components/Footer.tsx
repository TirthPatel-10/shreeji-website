import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { LogoIcon } from './Logo';

export function Footer() {
  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center space-x-3">
              <LogoIcon size={40} />
              <div className="flex flex-col leading-[1]">
                <span className="text-xl font-medium tracking-wide text-white">
                  SHREEJI ART
                </span>
                <span className="text-xs font-medium text-gray-400 tracking-[0.10em] uppercase mt-[2px]">
                  PREMIUM SIGNAGE
                </span>
              </div>
            </div>

            <p className="text-[15px] text-gray-400 leading-relaxed max-w-xs">
              Crafting premium signage solutions with 15+ years of industrial excellence and creative innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold tracking-wide text-white mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3 text-[15px] text-gray-400">
              <li><a href="#" className="hover:text-[#06b6d4] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#06b6d4] transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-[#06b6d4] transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-[#06b6d4] transition-colors">Get Quote</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-semibold tracking-wide text-white mb-5">
              Our Services
            </h3>
            <ul className="space-y-3 text-[15px] text-gray-400">
              <li><a href="#" className="hover:text-[#06b6d4] transition-colors">LED Signage</a></li>
              <li><a href="#" className="hover:text-[#06b6d4] transition-colors">Acrylic Signs</a></li>
              <li><a href="#" className="hover:text-[#06b6d4] transition-colors">3D Letters</a></li>
              <li><a href="#" className="hover:text-[#06b6d4] transition-colors">Metal Signage</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold tracking-wide text-white mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4 text-[15px] text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-[#06b6d4]" />
                <span className="leading-relaxed">
                  C-60, Karmchari Nagar Part 1, Rannapark, Ghatlodia, Ahmedabad, Gujarat 380061, India.
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0 text-[#06b6d4]" />
                <span>+91 98253 47741</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0 text-[#06b6d4]" />
                <span>shreejiart1311@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-[14px] text-gray-400">
            © 2026 SHREEJI ART. All rights reserved.
          </p>

          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-[#06b6d4] hover:to-[#3b82f6] flex items-center justify-center transition-all"
                  aria-label={social.label}
                >
                  <Icon size={17} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}