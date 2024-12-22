import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button'; // Ensure this path is correct
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

export default function Footer({ isVisible }) {
  return (
    <footer
      className={`fixed bottom-0 left-0 right-0 w-full border-t bg-background flex flex-col items-center transition-transform duration-300 transform ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="container px-4 md:px-6 py-8 sm:py-12 lg:py-16">
        <div className="grid gap-8 sm:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-center md:text-left">
              Contact Us
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="h-4 w-4" />
                <span>contact@example.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <MapPin className="h-4 w-4" />
                <span>123 Main St, City, Country</span>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-center md:text-left">
              Follow Us
            </h3>
            <div className="flex justify-center md:justify-start gap-4">
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-center md:text-left">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-2 text-sm items-center md:items-start">
              <Link to="#" className="hover:underline">
                About Us
              </Link>
              <Link to="#" className="hover:underline">
                Programs
              </Link>
              <Link to="#" className="hover:underline">
                News
              </Link>
              <Link to="#" className="hover:underline">
                Contact
              </Link>
            </nav>
          </div>

          {/* Donation Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-center md:text-left">
              Support Our Cause
            </h3>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Your donation helps us make a difference in our community.
            </p>
            <Button asChild className="w-full">
              <Link to="/donate">Donate Now</Link>
            </Button>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Your Organization Name. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
