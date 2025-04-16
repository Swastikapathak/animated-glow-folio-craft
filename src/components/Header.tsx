
import { useEffect, useState } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-background/80 backdrop-blur-md py-4' : 'py-6'}`}>
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <a href="#hero" className="font-display text-xl font-bold hover-trigger hover-line">James Smith</a>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#about" className="hover-trigger hover-line">About</a></li>
            <li><a href="#projects" className="hover-trigger hover-line">Projects</a></li>
            <li><a href="#contact" className="hover-trigger hover-line">Contact</a></li>
          </ul>
        </nav>
        <div className="block md:hidden hover-trigger">
          <span className="block w-6 h-0.5 bg-foreground mb-1.5"></span>
          <span className="block w-6 h-0.5 bg-foreground mb-1.5"></span>
          <span className="block w-6 h-0.5 bg-foreground"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
