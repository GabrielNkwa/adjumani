import React from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-black text-white">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 md:px-8">
        {/* Mobile Menu Button */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">ADJUMANI</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full bg-black p-0">
            <div className="flex h-full flex-col items-center justify-center gap-6 text-white">
              <Link
                to="/"
                className="text-2xl font-semibold transition-colors hover:text-white/80"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-2xl font-semibold transition-colors hover:text-white/80"
                onClick={() => setOpen(false)}
              >
                About
              </Link>
              <Link
                to="/works"
                className="text-2xl font-semibold transition-colors hover:text-white/80"
                onClick={() => setOpen(false)}
              >
                Our Works
              </Link>
              <Link
                to="/involved"
                className="text-2xl font-semibold transition-colors hover:text-white/80"
                onClick={() => setOpen(false)}
              >
                Get Involved
              </Link>
              <Link
                to="/contact"
                className="text-2xl font-semibold transition-colors hover:text-white/80"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop Navigation */}
        <div className="flex w-full items-center justify-center gap-8">
          <Link to="/" className="text-xl font-bold">
            ADJUMANI
          </Link>
          <div className="hidden gap-6 md:flex">
            <Link
              to="/"
              className="font-medium transition-colors hover:text-white/80"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="font-medium transition-colors hover:text-white/80"
            >
              About
            </Link>
            <Link
              to="/works"
              className="font-medium transition-colors hover:text-white/80"
            >
              Our Works
            </Link>
            <Link
              to="/involved"
              className="font-medium transition-colors hover:text-white/80"
            >
              Get Involved
            </Link>
            <Link
              to="/contact"
              className="font-medium transition-colors hover:text-white/80"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
