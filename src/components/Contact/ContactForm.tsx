import { Label } from '@radix-ui/react-label';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@radix-ui/react-select';
import React from 'react';
import { Button } from '../ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

const ContactForm = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Get in Touch</CardTitle>
        <CardDescription>
          We'd love to hear from you. Fill out the form below and we'll get back
          to you as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="your@email.com"
                type="email"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="inquiry-type">Type of Inquiry</Label>
            <Select>
              <SelectTrigger id="inquiry-type">
                <SelectValue placeholder="Select inquiry type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="donations">Donations</SelectItem>
                <SelectItem value="volunteering">Volunteering</SelectItem>
                <SelectItem value="partnerships">Partnerships</SelectItem>
                <SelectItem value="general">General Inquiry</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" placeholder="Message subject" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              className="min-h-[150px]"
              id="message"
              placeholder="Your message here..."
              required
            />
          </div>
          <Button className="w-full" size="lg" type="submit">
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
