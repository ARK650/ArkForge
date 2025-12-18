import Link from 'next/link';
import Image from 'next/image';
import { Container, SectionWrapper, Button, Card } from '@/components/ui';

// Feature cards data
const features = [
  {
    title: 'Low Minimums',
    description: 'Start with as few as 10 units. Perfect for small businesses, events, or testing the market.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: 'Fast Turnaround',
    description: 'From approved design to delivery in as little as 2-3 weeks. Rush orders available.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Custom Branding',
    description: 'Your logo, your colors. Multi-color production capabilities for premium branded products.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
];

// Product preview data
const products = [
  {
    title: 'Fidget Toys',
    description: 'Desk-friendly stress relief with mechanical switches.',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop',
  },
  {
    title: 'Phone Stands',
    description: 'Stylish docks for iPhone and Apple Watch.',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=600&fit=crop',
  },
  {
    title: 'Coasters',
    description: 'Premium branded coasters in sets of 4.',
    image: 'https://images.unsplash.com/photo-1611791484670-ce19b801d192?w=600&h=600&fit=crop',
  },
  {
    title: 'Custom Projects',
    description: 'Bring your unique ideas to life.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=600&fit=crop',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="relative overflow-hidden">
        <Container>
          <div className="py-12 md:py-20 lg:py-28">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight text-balance">
                Precision Branded Products That{' '}
                <span className="text-accent">Leave an Impression</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
                Custom branded fidget toys, phone docks, coasters, and more. 
                Small-batch manufacturing with premium quality for businesses 
                that want to stand out.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Request a Quote
                  </Button>
                </Link>
                <Link href="/gallery">
                  <Button variant="outline" size="lg">
                    View Gallery
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>

        {/* Decorative background element */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-96 bg-accent/5 blur-3xl rounded-full pointer-events-none"
        />
      </SectionWrapper>

      {/* Features Section */}
      <SectionWrapper className="bg-surface/50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              Why Choose ArkForge?
            </h2>
            <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
              We combine advanced manufacturing equipment with attention to detail 
              to deliver products that represent your brand perfectly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="p-6 lg:p-8">
                <div className="text-accent mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-text-secondary">{feature.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* What We Create Section */}
      <SectionWrapper>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              What We Create
            </h2>
            <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
              From desk accessories to promotional giveaways, we manufacture 
              products that people actually want to keep.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.title} className="group">
                {/* Product Image */}
                <div className="aspect-square bg-background relative overflow-hidden border-b border-border">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-text-primary">
                    {product.title}
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    {product.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/products">
              <Button variant="secondary" size="lg">
                View All Products
              </Button>
            </Link>
          </div>
        </Container>
      </SectionWrapper>

      {/* About Teaser Section */}
      <SectionWrapper className="bg-surface/50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
                Local. Small-Batch.{' '}
                <span className="text-accent">Precision Made.</span>
              </h2>
              <p className="mt-6 text-text-secondary leading-relaxed">
                ArkForge Custom is a boutique manufacturing studio based in Ontario. 
                We specialize in creating branded products for businesses who understand 
                that quality promotional items speak volumes about their brand.
              </p>
              <p className="mt-4 text-text-secondary leading-relaxed">
                Using advanced manufacturing equipment, we produce small batches 
                of high-quality products with multi-color capabilities and 
                precision finishing that larger manufacturers simply can&apos;t match.
              </p>
              <div className="mt-8">
                <Link href="/about">
                  <Button variant="outline" size="md">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>

            {/* Workshop Image */}
            <div className="aspect-video bg-background rounded-xl border border-border overflow-hidden relative">
              <Image
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=450&fit=crop"
                alt="Advanced manufacturing workshop"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper>
        <Container>
          <div className="text-center py-8 md:py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              Ready to Create Something Great?
            </h2>
            <p className="mt-4 text-text-secondary max-w-xl mx-auto">
              Tell us about your project. We&apos;ll provide a custom quote within 
              24-48 hours.
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Get Your Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
