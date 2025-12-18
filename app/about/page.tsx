import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Container, SectionWrapper, Button, Card } from '@/components/ui';

export const metadata: Metadata = {
  title: 'About | ArkForge Custom',
  description:
    'Learn about ArkForge Custom - local, small-batch manufacturing for businesses. Advanced equipment, precision quality, Ontario-based.',
};

// Capabilities data
const capabilities = [
  {
    title: 'Multi-Color Production',
    description: 'Full-color capabilities for vibrant, eye-catching branded products.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: 'Precision Manufacturing',
    description: 'Advanced equipment ensures consistent quality in every piece.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: 'Custom Design',
    description: 'Work directly with us to create products that match your vision.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: 'Low-Volume Friendly',
    description: 'No massive minimum orders. Start small and scale as needed.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: 'Fast Turnaround',
    description: 'Quick production times without sacrificing quality.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Local Support',
    description: 'Ontario-based with hands-on customer service and support.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
                About{' '}
                <span className="text-accent">ArkForge Custom</span>
              </h1>
              <p className="mt-6 text-lg text-text-secondary leading-relaxed">
                ArkForge Custom is a boutique manufacturing studio specializing in 
                custom branded products for businesses. We believe that promotional 
                items should be more than just throwaway trinkets — they should be 
                products people genuinely want to keep and use.
              </p>
              <p className="mt-4 text-text-secondary leading-relaxed">
                Based in Ontario, we use advanced manufacturing equipment to produce 
                small batches of high-quality products. This allows us to offer 
                customization options and attention to detail that larger 
                manufacturers simply can&apos;t match.
              </p>
              <p className="mt-4 text-text-secondary leading-relaxed">
                Whether you need 10 units or 500, we&apos;re equipped to deliver 
                precision-made products that represent your brand the way it deserves.
              </p>
            </div>

            {/* Workshop Image */}
            <div className="aspect-square bg-surface rounded-xl border border-border overflow-hidden relative">
              <Image
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop"
                alt="Advanced manufacturing equipment in workshop"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Mission Section */}
      <SectionWrapper className="bg-surface/50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              Our Mission
            </h2>
            <p className="mt-6 text-xl text-text-secondary leading-relaxed">
              To help businesses make lasting impressions through thoughtfully 
              designed, precision-manufactured products that people actually want 
              to keep. We bridge the gap between mass-produced promotional items 
              and truly custom, quality goods.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* Capabilities Grid */}
      <SectionWrapper>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              Our Capabilities
            </h2>
            <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
              Advanced equipment combined with craftsmanship delivers results that stand out.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability) => (
              <Card key={capability.title} className="p-6">
                <div className="text-accent mb-4">{capability.icon}</div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {capability.title}
                </h3>
                <p className="text-sm text-text-secondary">
                  {capability.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Values Section */}
      <SectionWrapper className="bg-surface/50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">10+</div>
              <p className="text-text-secondary">Minimum Order</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">2-3</div>
              <p className="text-text-secondary">Weeks Typical Turnaround</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">100%</div>
              <p className="text-text-secondary">Quality Inspected</p>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper>
        <Container>
          <div className="text-center py-8">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              Let&apos;s Work Together
            </h2>
            <p className="mt-4 text-text-secondary max-w-xl mx-auto">
              Have a project in mind? We&apos;d love to hear about it. Get in touch 
              and let&apos;s create something great.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Start a Project
                </Button>
              </Link>
              <Link href="/gallery">
                <Button variant="outline" size="lg">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
