import Link from 'next/link';
import Image from 'next/image';
import { Container, SectionWrapper, Button, Card } from '@/components/ui';

// Feature cards data
const features = [
  {
    title: 'Low Minimums',
    description: 'Start with as few as 50 units. Perfect for small businesses testing the waters.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: 'Fast Turnaround',
    description: 'Local Toronto production means faster delivery. From design to delivery in 2-3 weeks.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Custom Branding',
    description: 'Your logo becomes the design. Up to 24 colors with premium finishes available.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
];

// Product tiers preview
const productTiers = [
  {
    title: 'Budget Series',
    description: 'Simple shapes, 1-2 colors. Starting at $4.75/unit.',
    image: '/ArkForge/images/budget-series.jpg',
    badge: 'From 50 units',
  },
  {
    title: 'Brand Series',
    description: 'Custom logo, up to 4 colors. Starting at $7.50/unit.',
    image: '/ArkForge/images/brand-series.jpg',
    badge: 'Most Popular',
  },
  {
    title: 'Premium Series',
    description: 'Fully custom 3D shapes. Starting at $10.50/unit.',
    image: '/ArkForge/images/premium-series.jpg',
    badge: 'Maximum Impact',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="relative overflow-hidden">
        <Container>
          <div className="py-12 md:py-20 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Hero Text */}
              <div className="max-w-xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight text-balance">
                  Custom Clicky Keychains That{' '}
                  <span className="text-accent">People Actually Keep</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
                  Branded fidget keychains with satisfying mechanical switches. 
                  Three pricing tiers to fit any budget, with minimums starting 
                  at just 50 units. Made locally in Toronto.
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

              {/* Hero Image */}
              <div className="relative">
                <div className="aspect-square relative rounded-2xl overflow-hidden border border-border shadow-2xl">
                  <Image
                    src="/ArkForge/images/hero.jpg"
                    alt="Custom Clicky Keychain"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Decorative glow behind image */}
                <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full -z-10" />
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

      {/* Stats Pill Section */}
      <SectionWrapper className="py-8">
        <Container>
          <div className="flex justify-center">
            <div className="inline-flex flex-wrap justify-center items-center gap-4 md:gap-8 px-8 py-4 bg-surface rounded-full border border-border shadow-lg">
              <div className="flex items-center gap-2">
                <span className="text-2xl md:text-3xl font-bold text-accent">10+</span>
                <span className="text-sm text-text-secondary">Unique Materials</span>
              </div>
              <div className="hidden md:block w-px h-8 bg-border" />
              <div className="flex items-center gap-2">
                <span className="text-2xl md:text-3xl font-bold text-accent">100+</span>
                <span className="text-sm text-text-secondary">Customers</span>
              </div>
              <div className="hidden md:block w-px h-8 bg-border" />
              <div className="flex items-center gap-2">
                <span className="text-2xl md:text-3xl font-bold text-accent">180+</span>
                <span className="text-sm text-text-secondary">Keychains Manufactured</span>
              </div>
            </div>
          </div>
        </Container>
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
              Three Tiers to Fit Any Budget
            </h2>
            <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
              From simple branded shapes to fully custom mascot designs, 
              we have options for every business size and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {productTiers.map((tier) => (
              <Card key={tier.title} className="group">
                {/* Product Image */}
                <div className="aspect-video bg-background relative overflow-hidden border-b border-border">
                  <Image
                    src={tier.image}
                    alt={tier.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">
                    {tier.badge}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-text-primary">
                    {tier.title}
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    {tier.description}
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
                Toronto Made.{' '}
                <span className="text-accent">Lower Minimums. Faster.</span>
              </h2>
              <p className="mt-6 text-text-secondary leading-relaxed">
                ArkForge Custom is a boutique manufacturing studio based in Toronto. 
                We specialize in custom clicky keychains and fidget toys for businesses 
                who want branded products people actually want to keep.
              </p>
              <p className="mt-4 text-text-secondary leading-relaxed">
                Our local production means lower minimums (starting at 50 units), 
                faster turnaround, and personalized service that overseas manufacturers 
                simply can&apos;t match.
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
