import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Container, SectionWrapper, Button, Card } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Products | ArkForge Custom',
  description:
    'Browse our custom branded products: fidget toys, phone docks, coasters, and more. Low minimums, premium quality.',
};

// Products data
const products = [
  {
    id: 'fidget-toys',
    name: 'Custom Fidget Toys',
    description:
      'Satisfying mechanical switches in a compact, desk-friendly design. Perfect for stress relief and brand promotion.',
    price: 'Starting at $15/unit',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop',
  },
  {
    id: 'retro-dock',
    name: 'Retro Radio iPhone & Apple Watch Dock',
    description:
      'Nostalgic design meets modern functionality. A statement piece for any desk that charges iPhone and Apple Watch.',
    price: 'Starting at $45/unit',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=600&fit=crop',
  },
  {
    id: 'standby-dock',
    name: 'StandBy iPhone Dock',
    description:
      'Optimized for iOS StandBy mode. Clean lines, solid construction, and your branding front and center.',
    price: 'Starting at $35/unit',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=600&fit=crop',
  },
  {
    id: 'coasters',
    name: 'Branded Coasters (Set of 4)',
    description:
      'Premium coasters with your logo. Protective cork backing and durable finish for long-lasting impressions.',
    price: 'Starting at $25/set',
    image: 'https://images.unsplash.com/photo-1611791484670-ce19b801d192?w=600&h=600&fit=crop',
  },
  {
    id: 'custom',
    name: 'Custom Projects',
    description:
      'Have something unique in mind? We love a challenge. Let\'s discuss your custom product ideas.',
    price: 'Quote on request',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=600&fit=crop',
  },
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
              Our Products
            </h1>
            <p className="mt-4 text-lg text-text-secondary">
              Quality branded products designed to make an impact. All products 
              available with custom branding and low minimum orders.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* Products Grid */}
      <SectionWrapper className="pt-0">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="flex flex-col"
                hover={true}
              >
                {/* Product Image */}
                <div
                  id={product.id}
                  className="aspect-square bg-background relative overflow-hidden border-b border-border scroll-mt-24"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-semibold text-text-primary">
                    {product.name}
                  </h2>
                  <p className="mt-2 text-text-secondary text-sm flex-grow">
                    {product.description}
                  </p>
                  <p className="mt-4 text-accent font-medium">{product.price}</p>
                  <div className="mt-4">
                    <Link href="/contact">
                      <Button variant="primary" size="sm" className="w-full">
                        Get a Quote
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
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
