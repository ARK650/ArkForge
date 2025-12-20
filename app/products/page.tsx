import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Container, SectionWrapper, Button, Card } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Products | ArkForge Custom',
  description:
    'Custom branded clicky keychains and fidget toys. Three pricing tiers to fit any budget. Low minimums starting at 50 units.',
};

// Product tiers
const productTiers = [
  {
    id: 'tier-1',
    name: 'Budget Series',
    subtitle: 'Simple Shapes',
    description: 'Perfect for businesses testing the waters or with tight budgets. Basic geometric shapes with your branding.',
    features: [
      'Basic geometric shapes (circle, square, hexagon, star)',
      '1-2 solid colors',
      'Text or simple logo only',
      'Mechanical switch integrated',
      'Logo printed/engraved on flat surface',
    ],
    products: [
      { name: 'Simple Fidget Keychain', price: '$6-7/unit', min: '50 units min' },
      { name: 'Basic Clicky Keychain', price: '$7-8/unit', min: '50 units min' },
    ],
    volumePricing: [
      { range: '50-249 units', price: '$6.50/unit' },
      { range: '250-499 units', price: '$5.75/unit' },
      { range: '500-999 units', price: '$5.25/unit' },
      { range: '1000+ units', price: '$4.75/unit' },
    ],
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop',
    accent: 'from-blue-500/20 to-blue-600/20',
    badge: 'Best for Testing',
  },
  {
    id: 'tier-2',
    name: 'Brand Series',
    subtitle: 'Custom Branded',
    description: 'Most businesses choose this tier - best value. Your logo shaped into the design with premium finishes.',
    features: [
      'Your logo in full color (up to 3-4 colors)',
      'Simple shape base (circle, rectangle, etc.)',
      'Premium finish options',
      'Custom shape options (wrench, house, tooth, coffee cup)',
      'Their logo IS the design',
    ],
    products: [
      { name: 'Custom Shape Fidget Toy', price: '$8-10/unit', min: '50 units min' },
      { name: 'Logo-Integrated Clicky Toy', price: '$10-12/unit', min: '75 units min' },
    ],
    volumePricing: [
      { range: '100-249 units', price: '$10.00/unit' },
      { range: '250-499 units', price: '$9.00/unit' },
      { range: '500-999 units', price: '$8.25/unit' },
      { range: '1000+ units', price: '$7.50/unit' },
    ],
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=600&fit=crop',
    accent: 'from-accent/20 to-orange-600/20',
    badge: 'Most Popular',
    featured: true,
  },
  {
    id: 'tier-3',
    name: 'Premium Series',
    subtitle: 'Custom Shape & Mascot',
    description: 'For bigger businesses or special campaigns. Fully custom 3D designs with multiple fidget features.',
    features: [
      'Fully custom 3D shape (mascot, product replica, building)',
      'Unlimited colors',
      'Complex design (your logo AS the shape)',
      'Multiple switches or fidget features',
      'Premium packaging option available',
    ],
    products: [
      { name: 'Custom Mascot Fidget Toy', price: '$12-15/unit', min: '100 units min' },
      { name: 'Multi-Function Fidget Device', price: '$15-18/unit', min: '100 units min' },
    ],
    volumePricing: [
      { range: '100-249 units', price: '$15.00/unit' },
      { range: '250-499 units', price: '$13.50/unit' },
      { range: '500-999 units', price: '$12.00/unit' },
      { range: '1000+ units', price: '$10.50/unit' },
    ],
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=600&fit=crop',
    accent: 'from-purple-500/20 to-purple-600/20',
    badge: 'Maximum Impact',
  },
];

// Examples by industry
const industryExamples = [
  { industry: 'Auto Shops', shape: 'Wrench shaped keychain' },
  { industry: 'Real Estate', shape: 'House shaped keychain' },
  { industry: 'Dentists', shape: 'Tooth shaped keychain' },
  { industry: 'Cafes', shape: 'Coffee cup keychain' },
  { industry: 'Car Dealerships', shape: 'Logo with rotating parts' },
  { industry: 'Banks', shape: 'Mascot with movable features' },
  { industry: 'Schools', shape: 'School mascot mini figure' },
  { industry: 'Tech Companies', shape: 'Custom device replica' },
];

// How It Works steps
const steps = [
  {
    number: '01',
    title: 'Contact',
    description: 'Tell us about your project, quantity needs, and timeline.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'We\'ll work with you on branding placement and customization options.',
  },
  {
    number: '03',
    title: 'Production',
    description: 'Your products are manufactured with precision using advanced equipment.',
  },
  {
    number: '04',
    title: 'Delivery',
    description: 'Quality-checked and shipped directly to your location.',
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper>
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
              Custom Clicky Keychains
            </h1>
            <p className="mt-4 text-lg text-text-secondary">
              Branded fidget keychains that people actually want to keep. 
              Three tiers to fit any budget, with minimums starting at just 50 units.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full">Low Minimums</span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full">Local Toronto Production</span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full">Fast Turnaround</span>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Product Tiers */}
      <SectionWrapper className="pt-0">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {productTiers.map((tier) => (
              <Card
                key={tier.id}
                id={tier.id}
                className={`flex flex-col relative scroll-mt-24 ${tier.featured ? 'ring-2 ring-accent' : ''}`}
                hover={true}
              >
                {/* Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full ${tier.featured ? 'bg-accent text-white' : 'bg-surface text-text-secondary border border-border'}`}>
                  {tier.badge}
                </div>

                {/* Product Image */}
                <div className={`aspect-video bg-gradient-to-br ${tier.accent} relative overflow-hidden border-b border-border`}>
                  <Image
                    src={tier.image}
                    alt={tier.name}
                    fill
                    className="object-cover opacity-80 mix-blend-overlay"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-text-secondary text-sm">{tier.subtitle}</p>
                      <h2 className="text-2xl font-bold text-text-primary">{tier.name}</h2>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-text-secondary text-sm mb-4">
                    {tier.description}
                  </p>

                  {/* Products in tier */}
                  <div className="space-y-3 mb-6">
                    {tier.products.map((product, idx) => (
                      <div key={idx} className="flex justify-between items-center p-3 bg-background rounded-lg">
                        <div>
                          <p className="text-text-primary font-medium text-sm">{product.name}</p>
                          <p className="text-text-secondary text-xs">{product.min}</p>
                        </div>
                        <p className="text-accent font-semibold">{product.price}</p>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-6 flex-grow">
                    <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-3">Features</p>
                    <ul className="space-y-2">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-text-secondary">
                          <span className="text-accent mt-1">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/contact" className="mt-auto">
                    <Button variant={tier.featured ? 'primary' : 'secondary'} size="sm" className="w-full">
                      Get a Quote
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Volume Pricing Chart */}
      <SectionWrapper className="bg-surface/50" id="pricing">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              Volume Pricing
            </h2>
            <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
              The more you order, the more you save. Here&apos;s our complete pricing breakdown by tier and quantity.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 text-text-primary font-semibold">Quantity</th>
                  <th className="text-center py-4 px-4 text-text-primary font-semibold">
                    <span className="block">Budget Series</span>
                    <span className="text-xs text-text-secondary font-normal">Simple Shapes</span>
                  </th>
                  <th className="text-center py-4 px-4 text-accent font-semibold bg-accent/5 rounded-t-lg">
                    <span className="block">Brand Series</span>
                    <span className="text-xs text-text-secondary font-normal">Custom Logo</span>
                  </th>
                  <th className="text-center py-4 px-4 text-text-primary font-semibold">
                    <span className="block">Premium Series</span>
                    <span className="text-xs text-text-secondary font-normal">Custom Shape</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-4 px-4 text-text-secondary">50-99 units</td>
                  <td className="py-4 px-4 text-center text-text-primary">$6.50/unit</td>
                  <td className="py-4 px-4 text-center text-text-primary bg-accent/5">—</td>
                  <td className="py-4 px-4 text-center text-text-primary">—</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-4 px-4 text-text-secondary">100-249 units</td>
                  <td className="py-4 px-4 text-center text-text-primary">$6.50/unit</td>
                  <td className="py-4 px-4 text-center text-text-primary bg-accent/5">$10.00/unit</td>
                  <td className="py-4 px-4 text-center text-text-primary">$15.00/unit</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-4 px-4 text-text-secondary">250-499 units</td>
                  <td className="py-4 px-4 text-center text-text-primary">$5.75/unit</td>
                  <td className="py-4 px-4 text-center text-text-primary bg-accent/5">$9.00/unit</td>
                  <td className="py-4 px-4 text-center text-text-primary">$13.50/unit</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-4 px-4 text-text-secondary">500-999 units</td>
                  <td className="py-4 px-4 text-center text-text-primary">$5.25/unit</td>
                  <td className="py-4 px-4 text-center text-text-primary bg-accent/5">$8.25/unit</td>
                  <td className="py-4 px-4 text-center text-text-primary">$12.00/unit</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-text-secondary font-semibold">1000+ units</td>
                  <td className="py-4 px-4 text-center text-accent font-semibold">$4.75/unit</td>
                  <td className="py-4 px-4 text-center text-accent font-semibold bg-accent/5 rounded-b-lg">$7.50/unit</td>
                  <td className="py-4 px-4 text-center text-accent font-semibold">$10.50/unit</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <p className="text-text-secondary text-sm mb-4">
              <strong className="text-text-primary">Our edge:</strong> Lower minimums + local Toronto production + faster turnaround than competitors
            </p>
            <Link href="/contact">
              <Button variant="primary">Get Custom Quote</Button>
            </Link>
          </div>
        </Container>
      </SectionWrapper>

      {/* Industry Examples */}
      <SectionWrapper>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              Ideas by Industry
            </h2>
            <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
              We&apos;ve created custom keychains for businesses across many industries. Here are some popular examples.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industryExamples.map((example, index) => (
              <div
                key={index}
                className="p-4 bg-surface rounded-xl border border-border text-center hover:border-accent/50 transition-colors"
              >
                <p className="text-accent font-semibold mb-1">{example.industry}</p>
                <p className="text-text-secondary text-sm">{example.shape}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* How It Works Section */}
      <SectionWrapper className="bg-surface/50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              How It Works
            </h2>
            <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
              From initial contact to delivery, we make the process simple and transparent.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector line (hidden on mobile, shown on larger screens) */}
                {index < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-border"
                    aria-hidden="true"
                  />
                )}

                <div className="relative bg-surface rounded-xl p-6 border border-border text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent font-bold text-xl mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper>
        <Container>
          <div className="text-center py-8">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-text-secondary max-w-xl mx-auto">
              Request a quote today. We&apos;ll get back to you within 24-48 hours 
              with pricing and timeline information.
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
