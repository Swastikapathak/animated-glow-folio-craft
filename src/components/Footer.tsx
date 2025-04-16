
import FadeUpElement from './FadeUpElement';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-muted">
      <div className="container mx-auto px-4 md:px-8">
        <FadeUpElement>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/70 mb-4 md:mb-0">
              © {currentYear} James Smith. All rights reserved.
            </p>
            
            <div className="flex space-x-8">
              <a href="#" className="text-foreground/70 hover:text-primary hover-trigger">Privacy Policy</a>
              <a href="#" className="text-foreground/70 hover:text-primary hover-trigger">Terms of Service</a>
            </div>
          </div>
        </FadeUpElement>
      </div>
    </footer>
  );
};

export default Footer;
