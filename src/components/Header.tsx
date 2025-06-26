
import React from 'react';

const Header = () => {
  return (
    <header className="py-8 lg:py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-6">
          <h1 className="text-4xl lg:text-6xl font-light tracking-wide mb-4">
            Design <span className="italic">Gallery</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Immersive spaces crafted for extraordinary experiences. 
            Explore our portfolio of architectural and interior design projects.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
