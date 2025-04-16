
import { MessageCircle } from 'lucide-react';
import FadeUpElement from './FadeUpElement';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "6201195893";
  
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };
  
  return (
    <footer className="py-12 bg-muted">
      <div className="container mx-auto px-4 md:px-8">
        <FadeUpElement>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/70 mb-4 md:mb-0">
              © {currentYear} James Smith. All rights reserved.
            </p>
            
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div className="flex space-x-8 mb-4 md:mb-0">
                <a href="#" className="text-foreground/70 hover:text-primary hover-trigger">Privacy Policy</a>
                <a href="#" className="text-foreground/70 hover:text-primary hover-trigger">Terms of Service</a>
              </div>
              
              <button 
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2 bg-primary/20 hover:bg-primary/30 px-4 py-2 rounded-full transition-colors"
              >
                <MessageCircle size={20} className="text-primary" />
                <span className="text-foreground">WhatsApp</span>
              </button>
            </div>
          </div>
        </FadeUpElement>
      </div>
    </footer>
  );
};

export default Footer;
