'use client';

import { useState } from 'react';
import { Container, SectionWrapper, Button } from '@/components/ui';
import { Input, Select, Textarea } from '@/components/ui/Input';

// Contact email
const CONTACT_EMAIL = 'cark98@gmail.com';

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

  const getProductLabel = (value: string) => {
    return productOptions.find(opt => opt.value === value)?.label || value;
  };

  const getQuantityLabel = (value: string) => {
    return quantityOptions.find(opt => opt.value === value)?.label || value;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Compose email body
    const subject = encodeURIComponent(`Quote Request: ${getProductLabel(formData.productType)} - ${formData.businessName}`);
    const body = encodeURIComponent(
`Hello ArkForge,

I would like to request a quote for your products.

--- CONTACT INFORMATION ---
Name: ${formData.name}
Business: ${formData.businessName}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}

--- PROJECT DETAILS ---
Product Type: ${getProductLabel(formData.productType)}
Quantity: ${getQuantityLabel(formData.quantity)}

--- MESSAGE ---
${formData.message}

---
Sent from ArkForge website contact form`
    );

    // Open email client
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
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
              Ready to create something great? Fill out the form below to compose 
              an email, or reach out directly at{' '}
              <a 
                href={`mailto:${CONTACT_EMAIL}`} 
                className="text-accent hover:underline font-medium"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* Contact Form */}
      <SectionWrapper className="pt-0">
        <Container>
          <div className="max-w-2xl mx-auto">
            {/* Direct Email Option */}
            <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 mb-8 text-center">
              <h2 className="text-xl font-semibold text-text-primary mb-2">
                Prefer to email directly?
              </h2>
              <p className="text-text-secondary mb-4">
                Send us an email with your project details and we&apos;ll get back to you within 24-48 hours.
              </p>
              <a href={`mailto:${CONTACT_EMAIL}`}>
                <Button variant="primary" size="lg">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email {CONTACT_EMAIL}
                </Button>
              </a>
            </div>

            {/* Form */}
            <div className="bg-surface rounded-2xl border border-border p-6 md:p-8">
              <h2 className="text-xl font-semibold text-text-primary mb-2">
                Or use this form
              </h2>
              <p className="text-sm text-text-secondary mb-6">
                Fill out the details below and click submit to open your email client with a pre-filled message.
              </p>

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
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Open Email Client
                  </Button>
                  <p className="text-xs text-text-secondary text-center mt-3">
                    This will open your default email application with your message ready to send.
                  </p>
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
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-accent hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  Location
                </h3>
                <p className="text-text-secondary">Ontario, Canada</p>
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
