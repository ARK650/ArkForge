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
    title: 'Budget Series',
    caption: 'Simple geometric shape with 2-color branding',
    category: 'Budget Series',
    image: '/ArkForge/images/gal-budget.jpg',
    tierColor: 'border-l-blue-500',
  },
  {
    id: 2,
    title: 'Budget Series',
    caption: 'Clean design with logo engraving',
    category: 'Budget Series',
    image: '/ArkForge/images/gal-budget-1.jpg',
    tierColor: 'border-l-blue-500',
  },
  {
    id: 3,
    title: 'Budget Series',
    caption: 'Compact design with single color logo',
    category: 'Budget Series',
    image: '/ArkForge/images/gal-budget-2.jpg',
    tierColor: 'border-l-blue-500',
  },
  {
    id: 4,
    title: 'Brand Series',
    caption: 'Custom shape with full color branding',
    category: 'Brand Series',
    image: '/ArkForge/images/gal-brand.jpg',
    tierColor: 'border-l-accent',
  },
  {
    id: 5,
    title: 'Brand Series',
    caption: 'Logo-integrated premium design',
    category: 'Brand Series',
    image: '/ArkForge/images/gal-brand-1.jpg',
    tierColor: 'border-l-accent',
  },
  {
    id: 6,
    title: 'Brand Series',
    caption: 'Multi-color branded keychain',
    category: 'Brand Series',
    image: '/ArkForge/images/gal-brand-2.jpg',
    tierColor: 'border-l-accent',
  },
  {
    id: 7,
    title: 'Premium Series',
    caption: 'Fully custom 3D design',
    category: 'Premium Series',
    image: '/ArkForge/images/gal-premium.jpg',
    tierColor: 'border-l-purple-500',
  },
  {
    id: 8,
    title: 'Premium Series',
    caption: 'Multiple fidget mechanisms',
    category: 'Premium Series',
    image: '/ArkForge/images/gal-premium-1.jpg',
    tierColor: 'border-l-purple-500',
  },
  {
    id: 9,
    title: 'Premium Series',
    caption: 'Complex multi-feature design',
    category: 'Premium Series',
    image: '/ArkForge/images/gal-premium-2.jpg',
    tierColor: 'border-l-purple-500',
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

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <Card key={item.id} className={`overflow-hidden border-l-4 ${item.tierColor}`}>
                {/* Gallery Image */}
                <div className="aspect-square bg-background relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Caption always visible */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary mt-1">
                    {item.caption}
                  </p>
                </div>
              </Card>
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
