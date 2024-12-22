import React, { useEffect, useState } from 'react';
import Footer from './Footer'; // Adjust the import path as necessary

const Layout: React.FC = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false); // Start with the footer hidden

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Check if the user has scrolled to the bottom
    if (scrollTop + windowHeight >= documentHeight) {
      setIsVisible(true); // Show the footer
    } else {
      setIsVisible(false); // Hide the footer
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow pb-16">
        {' '}
        {/* Adjust padding as needed */}
        {children}
      </main>
      <Footer isVisible={isVisible} />
    </div>
  );
};

export default Layout;
