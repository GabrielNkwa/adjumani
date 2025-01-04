import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from 'lucide-react';
import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../ui/card';

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
          <CardDescription>
            Reach out to us through any of these channels
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-muted-foreground" />
            <span>contact@example.org</span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-muted-foreground" />
            <span>+256 123 456 789</span>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-muted-foreground" />
            <span>P.O. Box 123, Adjumani, Uganda</span>
          </div>

          <div className="mt-6 space-y-2">
            <h4 className="font-medium">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Map Section */}
      <Card>
        <CardHeader>
          <CardTitle>Our Location</CardTitle>
          <CardDescription>Find us in Adjumani, Uganda</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="aspect-video w-full rounded-lg bg-muted">
            {/* Replace this div with actual map integration */}
            <div className="flex h-full items-center justify-center">
              <MapPin className="h-8 w-8 text-muted-foreground" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactInfo;
