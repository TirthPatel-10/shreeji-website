import { motion } from 'motion/react';
import { Lightbulb, Box, Type, Shield, Star, FileImage, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { PageType } from '../lib/types';
import { services } from '../lib/data';

interface ServicesPageProps {
  onNavigate: (page: PageType) => void;
}

const serviceImages: Record<string, string> = {
  'led-signage': 'https://images.unsplash.com/photo-1769490314920-0fdd432f1b42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMRUQlMjBuZW9uJTIwc2lnbiUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3Njk2MzI0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'acrylic-signs': 'https://images.unsplash.com/photo-1724220635197-88733234958c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3J5bGljJTIwc2lnbmFnZSUyMG1vZGVybnxlbnwxfHx8fDE3Njk2MzI0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  '3d-letter-signs': 'https://images.unsplash.com/photo-1645833752297-bdd63db489f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMGxldHRlciUyMHNpZ24lMjBtZXRhbHxlbnwxfHx8fDE3Njk2MzI0MDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'stainless-steel': 'https://images.unsplash.com/photo-1746240199775-1e64c3dc3158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFpbmxlc3MlMjBzdGVlbCUyMHNpZ25hZ2V8ZW58MXx8fHwxNzY5NjMyNDA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'brass-signage': 'https://images.unsplash.com/photo-1762423095510-e6323ba8b67f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFzcyUyMHBsYXF1ZSUyMHNpZ24lMjBsdXh1cnl8ZW58MXx8fHwxNzY5NjMyNDA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'flex-boards': 'https://images.unsplash.com/photo-1676491394429-37341c0ef75a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwYmlsbGJvYXJkJTIwYWR2ZXJ0aXNpbmd8ZW58MXx8fHwxNzY5NTU3NDE5fDA&ixlib=rb-4.1.0&q=80&w=1080'
};

const iconMap: Record<string, any> = {
  Lightbulb,
  Box,
  Type,
  Shield,
  Star,
  FileImage
};

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#06b6d4] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#8b5cf6] rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-[#06b6d4] text-sm font-semibold mb-6"
          >
            What We Offer
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Comprehensive signage solutions designed to elevate your brand presence with precision and creativity.
          </motion.p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  {/* Content */}
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#06b6d4]/20 to-[#3b82f6]/20 flex items-center justify-center mb-6">
                      <Icon className="text-[#06b6d4]" size={32} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">{service.description}</p>
                    
                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="text-white" size={12} />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      onClick={() => onNavigate('quote')}
                      className="bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] hover:opacity-90 text-white"
                    >
                      Request Quote
                    </Button>
                  </div>

                  {/* Image */}
                  <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                      <img
                        src={serviceImages[service.id]}
                        alt={service.title}
                        className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Can't Find What You're Looking For?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 mb-10"
          >
            We specialize in custom signage solutions. Contact us to discuss your unique requirements.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button
              size="lg"
              onClick={() => onNavigate('quote')}
              className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-6"
            >
              Get Custom Quote
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
