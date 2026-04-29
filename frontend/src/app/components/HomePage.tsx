import { motion } from 'motion/react';
import { Check, Lightbulb, Box, Type, Shield, Star, FileImage, ArrowRight, Award, TrendingUp, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { PageType } from '../lib/types';
import { stats } from '../lib/data';
import { FloatingOrbs } from './FloatingOrbs';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const services = [
    { icon: Lightbulb, title: 'LED Signage', description: 'Vibrant, energy-efficient LED signs that capture attention day and night.' },
    { icon: Box, title: 'Acrylic Signs', description: 'Premium acrylic signage with modern aesthetics and durability.' },
    { icon: Type, title: '3D Letter Signs', description: 'Dimensional lettering that adds depth and sophistication.' },
    { icon: Shield, title: 'Stainless Steel', description: 'Industrial-strength stainless steel signs built to last.' },
    { icon: Star, title: 'Brass Signage', description: 'Elegant brass signs that exude luxury and timeless appeal.' },
    { icon: FileImage, title: 'Flex Boards', description: 'Large-format flex printing for impactful outdoor advertising.' }
  ];

  const features = [
    '15+ years of industry experience',
    'Premium quality materials',
    'Custom design solutions',
    'Professional installation'
  ];

  const iconMap: Record<string, any> = {
    Award,
    TrendingUp,
    Users
  };

  // Animation variants for stagger effects
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552311412-02930b11ce59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMRUQlMjBuZW9uJTIwc3RvcmVmcm9udCUyMHNpZ25hZ2UlMjBuaWdodHxlbnwxfHx8fDE3Njk2MzIzMzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="LED Signage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/70 to-gray-900/90" />
        </div>

        {/* Animated Floating Orbs */}
        <FloatingOrbs variant="dark" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Elevate Your Brand with{' '}
            <span className="bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] bg-clip-text text-transparent">
              Premium Signage
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Industrial-grade quality meets creative excellence. Transform your business presence with custom signage solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              onClick={() => onNavigate('quote')}
              className="bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] hover:opacity-90 text-white text-lg px-8 py-6"
            >
              Get a Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate('projects')}
              className="border-2 border-white text-[rgb(21,48,102)] bg-white hover:bg-gray-100 hover:text-gray-900 text-lg px-8 py-6 bg-[rgb(223,232,246)]"
            >
              View Our Work
            </Button>
          </motion.div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Stats Section - Overlapping Hero */}
      <section className="relative -mt-24 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.icon];
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
              >
                <Card className="p-8 bg-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#06b6d4]/20 to-[#3b82f6]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="text-[#06b6d4]" size={32} />
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Decorative Orbs */}
        <FloatingOrbs variant="light" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-[#06b6d4]/10 rounded-full text-[#06b6d4] text-sm font-semibold mb-4">
                About Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Crafting Brand Identity Through{' '}
                <span className="bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] bg-clip-text text-transparent">
                  Premium Signage
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With over 15 years of expertise, SHREEJI ART has established itself as a leader in premium signage solutions. 
                We combine industrial precision with creative innovation to deliver signage that not only meets but exceeds expectations.
              </p>
              <motion.ul
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4 mb-8"
              >
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] flex items-center justify-center flex-shrink-0">
                      <Check className="text-white" size={14} />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1746128784420-679b242d2a5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzaWduYWdlJTIwd29ya3Nob3AlMjBmYWN0b3J5fGVufDF8fHx8MTc2OTYzMjM0MHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Signage Workshop"
                  className="w-full h-[500px] object-cover"
                />
                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-8 right-8 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl"
                >
                  <div className="text-sm font-semibold text-gray-900">15+ Years</div>
                  <div className="text-xs text-gray-600">Industry Excellence</div>
                </motion.div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gradient-to-br from-[#06b6d4]/30 to-[#3b82f6]/30 rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-gradient-to-br from-[#8b5cf6]/30 to-[#06b6d4]/30 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[#06b6d4]/10 rounded-full text-[#06b6d4] text-sm font-semibold mb-4">
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete Signage Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From LED displays to traditional materials, we offer comprehensive signage services tailored to your needs.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                >
                  <Card className="p-8 h-full bg-white hover:shadow-2xl transition-all duration-300 group cursor-pointer relative overflow-hidden">
                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#06b6d4]/10 to-transparent transform translate-x-8 -translate-y-8 rounded-full" />
                    
                    <div className="relative">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#06b6d4]/20 to-[#3b82f6]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="text-[#06b6d4]" size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="flex items-center text-[#06b6d4] opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-sm font-semibold">Learn More</span>
                        <ArrowRight size={16} className="ml-2" />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button
              size="lg"
              onClick={() => onNavigate('services')}
              className="bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] hover:opacity-90 text-white"
            >
              Explore All Services
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800">
          <motion.div
            className="absolute top-0 left-0 w-full h-full opacity-30"
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)'
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Transform Your Brand?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 mb-10"
          >
            Get a free quote today and discover how premium signage can elevate your business presence.
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
              Get Started Now
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}