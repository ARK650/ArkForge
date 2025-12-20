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
    title: 'Budget Series - Circle',
    caption: 'Simple geometric shape with 2-color branding',
    category: 'Budget Series',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop',
  },
  {
    id: 2,
    title: 'Budget Series - Hexagon',
    caption: 'Clean hexagon design with logo engraving',
    category: 'Budget Series',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop',
  },
  {
    id: 3,
    title: 'Budget Series - Square',
    caption: 'Compact square with single color logo',
    category: 'Budget Series',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&h=600&fit=crop',
  },
  {
    id: 4,
    title: 'Brand Series - Wrench',
    caption: 'Custom wrench shape for auto shop',
    category: 'Brand Series',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=600&fit=crop',
  },
  {
    id: 5,
    title: 'Brand Series - House',
    caption: 'Real estate agency branded keychain',
    category: 'Brand Series',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop',
  },
  {
    id: 6,
    title: 'Brand Series - Coffee Cup',
    caption: 'Café promotional keychain with 4-color logo',
    category: 'Brand Series',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=600&fit=crop',
  },
  {
    id: 7,
    title: 'Premium Series - Mascot',
    caption: 'Fully custom 3D mascot design',
    category: 'Premium Series',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=600&fit=crop',
  },
  {
    id: 8,
    title: 'Premium Series - Multi-Function',
    caption: 'Multiple fidget mechanisms in one design',
    category: 'Premium Series',
    image: 'https://images.unsplash.com/photo-1591815302525-756a9bcc3425?w=600&h=600&fit=crop',
  },
  {
    id: 9,
    title: 'Premium Series - Logo Sculpture',
    caption: 'Company logo as the entire keychain shape',
    category: 'Premium Series',
    image: 'https://images.unsplash.com/photo-1611791484670-ce19b801d192?w=600&h=600&fit=crop',
  },
];

// Filter categories
const categories = ['All', 'Budget Series', 'Brand Series', 'Premium Series'];

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
          {/* Category Filter (visual only for now) */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  category === 'All'
                    ? 'bg-accent text-white'
                    : 'bg-surface text-text-secondary hover:text-text-primary border border-border'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <Card key={item.id} className="group overflow-hidden">
                {/* Gallery Image */}
                <div className="aspect-square bg-background relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <div className="text-center p-4">
                      <span className="text-xs uppercase tracking-wider text-accent font-medium">
                        {item.category}
                      </span>
                      <h3 className="text-lg font-semibold text-text-primary mt-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-text-secondary mt-1">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Caption (visible on mobile) */}
                <div className="p-4 sm:hidden">
                  <span className="text-xs uppercase tracking-wider text-accent font-medium">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-semibold text-text-primary mt-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary">{item.caption}</p>
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
