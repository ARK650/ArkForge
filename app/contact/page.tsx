'use client';

import { useState } from 'react';
import { Container, SectionWrapper, Button } from '@/components/ui';
import { Input, Select, Textarea } from '@/components/ui/Input';

// Product type options
const productOptions = [
  { value: 'fidget-toys', label: 'Custom Fidget Toys' },
  { value: 'retro-dock', label: 'Retro Radio Dock' },
  { value: 'standby-dock', label: 'StandBy iPhone Dock' },
  { value: 'coasters', label: 'Branded Coasters' },
  { value: 'custom', label: 'Custom Project' },
  { value: 'other', label: 'Other / Not Sure' },
];

// Quantity options
const quantityOptions = [
  { value: '10-25', label: '10-25 units' },
  { value: '26-50', label: '26-50 units' },
  { value: '51-100', label: '51-100 units' },
  { value: '101-250', label: '101-250 units' },
  { value: '251-500', label: '251-500 units' },
  { value: '500+', label: '500+ units' },
];

interface FormData {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  productType: string;
  quantity: string;
  message: string;
}

interface FormErrors {
  name?: string;
  businessName?: string;
  email?: string;
  productType?: string;
  quantity?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    productType: '',
    quantity: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Business name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.productType) {
      newErrors.productType = 'Please select a product type';
    }

    if (!formData.quantity) {
      newErrors.quantity = 'Please select a quantity range';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us about your project';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Log form data to console
    console.log('Form submitted:', formData);

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset form after success
    setFormData({
      name: '',
      businessName: '',
      email: '',
      phone: '',
      productType: '',
      quantity: '',
      message: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSuccess) {
    return (
      <SectionWrapper>
        <Container>
          <div className="max-w-2xl mx-auto text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 text-accent mb-6">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary">
              Message Sent!
            </h1>
            <p className="mt-4 text-lg text-text-secondary">
              Thank you for reaching out. We&apos;ll review your request and get 
              back to you within 24-48 hours.
            </p>
            <div className="mt-8">
              <Button
                variant="primary"
                size="lg"
                onClick={() => setIsSuccess(false)}
              >
                Send Another Message
              </Button>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <SectionWrapper>
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-text-secondary">
              Ready to create something great? Fill out the form below and we&apos;ll 
              get back to you within 24-48 hours with a custom quote.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* Contact Form */}
      <SectionWrapper className="pt-0">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="bg-surface rounded-2xl border border-border p-6 md:p-8">
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                  <Input
                    label="Name *"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                    placeholder="Your name"
                    autoComplete="name"
                  />

                  <Input
                    label="Business Name *"
                    name="businessName"
                    type="text"
                    value={formData.businessName}
                    onChange={handleChange}
                    error={errors.businessName}
                    placeholder="Your company"
                    autoComplete="organization"
                  />

                  <Input
                    label="Email *"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    placeholder="you@company.com"
                    autoComplete="email"
                  />

                  <Input
                    label="Phone (Optional)"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    autoComplete="tel"
                  />

                  <Select
                    label="Product Type *"
                    name="productType"
                    value={formData.productType}
                    onChange={handleChange}
                    error={errors.productType}
                    options={productOptions}
                  />

                  <Select
                    label="Quantity Range *"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    error={errors.quantity}
                    options={quantityOptions}
                  />
                </div>

                <Textarea
                  label="Tell Us About Your Project *"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                  placeholder="Describe your project, branding requirements, timeline, and any other details..."
                  rows={5}
                />

                <div className="mt-6">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            </div>

            {/* Additional Contact Info */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  Email Us
                </h3>
                <a
                  href="mailto:contact@arkforge.ca"
                  className="text-accent hover:underline"
                >
                  contact@arkforge.ca
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  Location
                </h3>
                <p className="text-text-secondary">[Your City], Ontario</p>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* FAQ Section */}
      <SectionWrapper className="bg-surface/50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary text-center mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-background rounded-xl border border-border p-6">
                <h3 className="font-semibold text-text-primary">
                  What&apos;s the minimum order quantity?
                </h3>
                <p className="mt-2 text-text-secondary">
                  Our minimum order is typically 10 units, depending on the product. 
                  We&apos;re set up for small-batch production, making us ideal for 
                  businesses that don&apos;t need thousands of units.
                </p>
              </div>

              <div className="bg-background rounded-xl border border-border p-6">
                <h3 className="font-semibold text-text-primary">
                  How long does production take?
                </h3>
                <p className="mt-2 text-text-secondary">
                  Standard turnaround is 2-3 weeks from design approval. Rush orders 
                  are available for an additional fee.
                </p>
              </div>

              <div className="bg-background rounded-xl border border-border p-6">
                <h3 className="font-semibold text-text-primary">
                  Can you match my brand colors?
                </h3>
                <p className="mt-2 text-text-secondary">
                  Yes! Our multi-color production capabilities allow us to match 
                  your brand colors accurately. Just provide your brand guidelines 
                  or Pantone colors.
                </p>
              </div>

              <div className="bg-background rounded-xl border border-border p-6">
                <h3 className="font-semibold text-text-primary">
                  Do you ship outside Ontario?
                </h3>
                <p className="mt-2 text-text-secondary">
                  We ship across Canada. Shipping costs are calculated based on 
                  order size and destination.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
