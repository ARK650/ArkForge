import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Container, SectionWrapper, Button, Card } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Gallery | ArkForge Custom',
  description:
    'Browse our gallery of custom branded clicky keychains. See examples of Budget, Brand, and Premium series designs.',
};

// Gallery items data with images
const galleryItems = [
  {
    id: 1,
    caption: 'Simple geometric shape with 2-color branding',
    image: '/ArkForge/images/gal-budget.jpg',
    tierColor: 'bg-blue-500',
  },
  {
    id: 2,
    caption: 'Clean design with logo engraving',
    image: '/ArkForge/images/gal-budget-1.jpg',
    tierColor: 'bg-blue-500',
  },
  {
    id: 3,
    caption: 'Compact design with single color logo',
    image: '/ArkForge/images/gal-budget-2.jpg',
    tierColor: 'bg-blue-500',
  },
  {
    id: 4,
    caption: 'Custom shape with full color branding',
    image: '/ArkForge/images/gal-brand.jpg',
    tierColor: 'bg-accent',
  },
  {
    id: 5,
    caption: 'Logo-integrated premium design',
    image: '/ArkForge/images/gal-brand-1.jpg',
    tierColor: 'bg-accent',
  },
  {
    id: 6,
    caption: 'Multi-color branded keychain',
    image: '/ArkForge/images/gal-brand-2.jpg',
    tierColor: 'bg-accent',
  },
  {
    id: 7,
    caption: 'Fully custom 3D design',
    image: '/ArkForge/images/gal-premium.jpg',
    tierColor: 'bg-purple-500',
  },
  {
    id: 8,
    caption: 'Multiple fidget mechanisms',
    image: '/ArkForge/images/gal-premium-1.jpg',
    tierColor: 'bg-purple-500',
  },
  {
    id: 9,
    caption: 'Complex multi-feature design',
    image: '/ArkForge/images/gal-premium-2.jpg',
    tierColor: 'bg-purple-500',
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper>
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
              Our Gallery
            </h1>
            <p className="mt-4 text-lg text-text-secondary">
              Browse examples of our clicky keychains across all three tiers. 
              Each design is fully customizable with your branding.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* Gallery Grid */}
      <SectionWrapper className="pt-0">
        <Container>
          {/* Color Legend */}
          <div className="flex flex-wrap justify-center gap-8 mb-10 px-4 py-4 bg-surface/50 rounded-full border border-border/50 max-w-fit mx-auto">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500 ring-2 ring-blue-500/30" />
              <span className="text-sm text-text-secondary font-medium">Budget Series</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent ring-2 ring-accent/30" />
              <span className="text-sm text-text-secondary font-medium">Brand Series</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500 ring-2 ring-purple-500/30" />
              <span className="text-sm text-text-secondary font-medium">Premium Series</span>
            </div>
          </div>

          {/* Gallery List */}
          <div className="space-y-4">
            {galleryItems.map((item, index) => (
              <div 
                key={item.id} 
                className="group flex items-center bg-surface rounded-2xl border border-border overflow-hidden hover:border-border/80 hover:shadow-lg hover:shadow-black/20 transition-all duration-300"
              >
                {/* Image on left */}
                <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 relative flex-shrink-0 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.caption}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="176px"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/20" />
                </div>

                {/* Description in center */}
                <div className="flex-grow px-5 py-4 md:px-8 md:py-6">
                  <p className="text-text-primary text-sm md:text-base lg:text-lg font-medium leading-relaxed">
                    {item.caption}
                  </p>
                  <p className="text-text-secondary text-xs md:text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Click to learn more →
                  </p>
                </div>

                {/* Color accent stripe on right */}
                <div className={`w-1.5 md:w-2 self-stretch ${item.tierColor} group-hover:w-3 transition-all duration-300`} />
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="bg-surface/50">
        <Container>
          <div className="text-center py-8">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              Like What You See?
            </h2>
            <p className="mt-4 text-text-secondary max-w-xl mx-auto">
              Let&apos;s create something unique for your brand. Contact us to 
              discuss your project.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Start Your Project
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" size="lg">
                  View Products
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
