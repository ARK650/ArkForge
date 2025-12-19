import Link from 'next/link';
import Container from '../ui/Container';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

const productLinks = [
  { href: '/products#fidget-toys', label: 'Fidget Toys' },
  { href: '/products#phone-docks', label: 'Phone Docks' },
  { href: '/products#coasters', label: 'Coasters' },
  { href: '/products#custom', label: 'Custom Projects' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link
                href="/"
                className="text-2xl font-bold text-text-primary hover:text-accent transition-colors duration-200"
              >
                ArkForge
              </Link>
              <p className="mt-4 text-text-secondary text-sm leading-relaxed">
                Precision branded products that leave an impression. Custom manufacturing for businesses across Ontario.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-text-primary font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-text-secondary hover:text-accent transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-text-primary font-semibold mb-4">Products</h3>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-text-secondary hover:text-accent transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-text-primary font-semibold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:cark98@gmail.com"
                    className="text-text-secondary hover:text-accent transition-colors duration-200 text-sm"
                  >
                    cark98@gmail.com
                  </a>
                </li>
                <li className="text-text-secondary text-sm">
                  Ontario, Canada
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-text-secondary text-sm">
              © {currentYear} ArkForge Custom. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/contact"
                className="text-text-secondary hover:text-accent transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/contact"
                className="text-text-secondary hover:text-accent transition-colors duration-200 text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
