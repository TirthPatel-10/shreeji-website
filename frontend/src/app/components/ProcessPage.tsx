import { motion } from 'motion/react';
import { MessageSquare, Palette, Package, Hammer, CheckCircle, Award, Shield, Users, Zap, Wrench, Leaf } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { PageType } from '../lib/types';
import { processSteps, benefits } from '../lib/data';

interface ProcessPageProps {
  onNavigate: (page: PageType) => void;
}

const iconMap: Record<string, any> = {
  MessageSquare,
  Palette,
  Package,
  Hammer,
  CheckCircle,
  Award,
  Shield,
  Users,
  Zap,
  Wrench,
  Leaf
};

export function ProcessPage({ onNavigate }: ProcessPageProps) {
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
            How We Work
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our Process
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            From concept to installation, we follow a proven methodology that ensures exceptional results every time.
          </motion.p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical Line - Hidden on Mobile */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#06b6d4] via-[#3b82f6] to-[#8b5cf6]" />

            <div className="space-y-16 md:space-y-24">
              {processSteps.map((step, index) => {
                const Icon = iconMap[step.icon];
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 ${
                      isEven ? '' : 'md:grid-flow-dense'
                    }`}
                  >
                    {/* Step Number Circle - Center on Desktop */}
                    <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-[#06b6d4] to-[#3b82f6] items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                      {step.id}
                    </div>

                    {/* Mobile Step Number */}
                    <div className="md:hidden flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#06b6d4] to-[#3b82f6] flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {step.id}
                      </div>
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-[#06b6d4] to-transparent" />
                    </div>

                    {/* Empty Space on Opposite Side - Desktop Only */}
                    <div className={`hidden md:block ${isEven ? '' : 'md:col-start-2'}`} />

                    {/* Content Card */}
                    <Card className={`p-8 shadow-xl hover:shadow-2xl transition-shadow ${isEven ? 'md:text-right' : ''}`}>
                      <div className={`flex items-start ${isEven ? 'md:flex-row-reverse' : ''} space-x-4 md:space-x-6 mb-6`}>
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#06b6d4]/20 to-[#3b82f6]/20 flex items-center justify-center flex-shrink-0">
                          <Icon className="text-[#06b6d4]" size={28} />
                        </div>
                        <div className={`flex-1 ${isEven ? 'md:pr-4' : ''}`}>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                      <ul className={`space-y-2 ${isEven ? 'md:text-right' : ''}`}>
                        {step.details.map((detail, idx) => (
                          <li key={idx} className={`flex items-center ${isEven ? 'md:flex-row-reverse md:justify-end' : ''} space-x-2 text-gray-700`}>
                            <div className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose SHREEJI ART
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence and customer satisfaction sets us apart in the signage industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = iconMap[benefit.icon];
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-8 h-full hover:shadow-2xl transition-shadow group">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#06b6d4]/20 to-[#3b82f6]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="text-[#06b6d4]" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </Card>
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
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 mb-10"
          >
            Let's discuss your signage project and bring your vision to life.
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
              Request a Quote
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
