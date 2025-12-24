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
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-blue-500" />
              <span className="text-sm text-text-secondary">Budget Series</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-accent" />
              <span className="text-sm text-text-secondary">Brand Series</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-purple-500" />
              <span className="text-sm text-text-secondary">Premium Series</span>
            </div>
          </div>

          {/* Gallery List */}
          <div className="space-y-4">
            {galleryItems.map((item) => (
              <div key={item.id} className="flex items-center bg-surface rounded-xl border border-border overflow-hidden">
                {/* Image on left */}
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 relative flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.caption}
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </div>

                {/* Description in center */}
                <div className="flex-grow px-4 py-3 md:px-6">
                  <p className="text-text-primary text-sm md:text-base">
                    {item.caption}
                  </p>
                </div>

                {/* Color accent on right */}
                <div className={`w-2 md:w-3 self-stretch ${item.tierColor}`} />
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
