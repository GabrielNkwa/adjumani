// src/components/Layout.tsx
import React from 'react';
import Footer from './Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow pb-16">
        {' '}
        {/* Adjust padding as needed */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
