import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { services } from '../lib/data';
import api from '../lib/api';

export function QuotePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    selectedServices: [] as string[],
    projectType: '',
    timeline: '',
    budget: '',
    description: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    location: ''
  });

  const totalSteps = 4;

  const resetForm = () => {
    setSubmitted(false);
    setCurrentStep(1);
    setFormData({
      selectedServices: [],
      projectType: '',
      timeline: '',
      budget: '',
      description: '',
      name: '',
      email: '',
      phone: '',
      company: '',
      location: ''
    });
  };

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(serviceId)
        ? prev.selectedServices.filter(id => id !== serviceId)
        : [...prev.selectedServices, serviceId]
    }));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);

      const selectedServiceNames = formData.selectedServices
        .map(serviceId => services.find(service => service.id === serviceId)?.title)
        .filter(Boolean)
        .join(', ');

      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        location: formData.location,
        projectType: formData.projectType,
        timeline: formData.timeline,
        budget: formData.budget,
        description: formData.description,
        selectedServices: selectedServiceNames
      };

      await api.post('/quote-requests', payload);

      setSubmitted(true);
    } catch (error) {
      console.error('Quote submit error:', error);
      alert('Failed to submit quote request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.selectedServices.length > 0;
      case 2:
        return formData.projectType && formData.timeline;
      case 3:
        return formData.name && formData.email && formData.phone;
      case 4:
        return true;
      default:
        return false;
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto px-4 text-center"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#06b6d4] to-[#3b82f6] flex items-center justify-center mx-auto mb-6">
            <Check className="text-white" size={40} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Quote Request Submitted!</h1>
          <p className="text-lg text-gray-600 mb-8">
            Thank you for your interest in SHREEJI ART. Our team will review your requirements and get back to you within 24 hours.
          </p>
          <Button
            onClick={resetForm}
            className="bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] text-white"
          >
            Submit Another Request
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 pb-24 md:pb-8">
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Get a Free Quote
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-300"
          >
            Tell us about your project and we'll provide a detailed quote tailored to your needs.
          </motion.p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                    step <= currentStep
                      ? 'bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {step < currentStep ? <Check size={20} /> : step}
                </div>
                <div className="text-xs mt-2 text-center hidden sm:block">
                  {step === 1 && 'Services'}
                  {step === 2 && 'Details'}
                  {step === 3 && 'Contact'}
                  {step === 4 && 'Review'}
                </div>
              </div>
              {step < 4 && (
                <div
                  className={`h-1 flex-1 mx-2 rounded ${
                    step < currentStep ? 'bg-gradient-to-r from-[#06b6d4] to-[#3b82f6]' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <Card className="p-8">
          {currentStep === 1 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Services</h2>
              <p className="text-gray-600 mb-6">Choose the signage services you're interested in.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => handleServiceToggle(service.id)}
                    className={`p-6 rounded-lg border-2 transition-all text-left ${
                      formData.selectedServices.includes(service.id)
                        ? 'border-[#06b6d4] bg-[#06b6d4]/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-gray-900">{service.title}</h3>
                      {formData.selectedServices.includes(service.id) && (
                        <div className="w-6 h-6 rounded-full bg-[#06b6d4] flex items-center justify-center">
                          <Check className="text-white" size={14} />
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Project Details</h2>
                <p className="text-gray-600 mb-6">Tell us more about your project requirements.</p>
              </div>

              <div>
                <Label htmlFor="projectType">Project Type</Label>
                <select
                  id="projectType"
                  value={formData.projectType}
                  onChange={(e) => handleInputChange('projectType', e.target.value)}
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06b6d4]"
                >
                  <option value="">Select project type</option>
                  <option value="new">New Installation</option>
                  <option value="replacement">Replacement/Upgrade</option>
                  <option value="maintenance">Maintenance/Repair</option>
                  <option value="custom">Custom Project</option>
                </select>
              </div>

              <div>
                <Label htmlFor="timeline">Desired Timeline</Label>
                <select
                  id="timeline"
                  value={formData.timeline}
                  onChange={(e) => handleInputChange('timeline', e.target.value)}
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06b6d4]"
                >
                  <option value="">Select timeline</option>
                  <option value="urgent">Urgent (1-2 weeks)</option>
                  <option value="normal">Normal (3-4 weeks)</option>
                  <option value="flexible">Flexible (1-2 months)</option>
                  <option value="future">Future Project (2+ months)</option>
                </select>
              </div>

              <div>
                <Label htmlFor="budget">Budget Range (Optional)</Label>
                <select
                  id="budget"
                  value={formData.budget}
                  onChange={(e) => handleInputChange('budget', e.target.value)}
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06b6d4]"
                >
                  <option value="">Select budget range</option>
                  <option value="under-50k">Under ₹50,000</option>
                  <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                  <option value="1l-3l">₹1,00,000 - ₹3,00,000</option>
                  <option value="3l-5l">₹3,00,000 - ₹5,00,000</option>
                  <option value="above-5l">Above ₹5,00,000</option>
                </select>
              </div>

              <div>
                <Label htmlFor="description">Project Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Please provide details about your signage requirements..."
                  rows={6}
                  className="mt-2"
                />
              </div>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact Information</h2>
                <p className="text-gray-600 mb-6">How can we reach you?</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="John Doe"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    placeholder="Your Company"
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="john@example.com"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+91 98765 43210"
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="location">Project Location</Label>
                <Input
                  id="location"
                  type="text"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  placeholder="City, State"
                  className="mt-2"
                />
              </div>
            </motion.div>
          )}

          {currentStep === 4 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Review Your Request</h2>
                <p className="text-gray-600 mb-6">Please review your information before submitting.</p>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Selected Services</h3>
                  <div className="flex flex-wrap gap-2">
                    {formData.selectedServices.map(serviceId => {
                      const service = services.find(s => s.id === serviceId);
                      return (
                        <span key={serviceId} className="px-3 py-1 bg-[#06b6d4]/10 text-[#06b6d4] rounded-full text-sm">
                          {service?.title}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Project Details</h3>
                  <p className="text-sm text-gray-700">Type: {formData.projectType}</p>
                  <p className="text-sm text-gray-700">Timeline: {formData.timeline}</p>
                  {formData.budget && <p className="text-sm text-gray-700">Budget: {formData.budget}</p>}
                  {formData.description && <p className="text-sm text-gray-700 mt-2">Description: {formData.description}</p>}
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Contact Information</h3>
                  <p className="text-sm text-gray-700">Name: {formData.name}</p>
                  {formData.company && <p className="text-sm text-gray-700">Company: {formData.company}</p>}
                  <p className="text-sm text-gray-700">Email: {formData.email}</p>
                  <p className="text-sm text-gray-700">Phone: {formData.phone}</p>
                  {formData.location && <p className="text-sm text-gray-700">Location: {formData.location}</p>}
                </div>
              </div>
            </motion.div>
          )}

          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <Button
              variant="outline"
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1 || isSubmitting}
            >
              <ChevronLeft size={20} className="mr-2" />
              Previous
            </Button>

            {currentStep < totalSteps ? (
              <Button
                onClick={() => setCurrentStep(currentStep + 1)}
                disabled={!canProceed()}
                className="bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] text-white"
              >
                Next
                <ChevronRight size={20} className="ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] text-white"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}