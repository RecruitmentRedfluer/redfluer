import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CTABar from './CTABar';

interface LayoutProps {
  children: React.ReactNode;
  showCTA?: boolean;
  pageTitle?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  showCTA = true,
  pageTitle 
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">
        {pageTitle && (
          <div className="bg-primary-900 text-white py-16">
            <div className="container mx-auto px-4">
              <h1 className="text-3xl md:text-4xl font-bold">{pageTitle}</h1>
            </div>
          </div>
        )}
        {children}
        {showCTA && <CTABar />}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;