
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';
import RevealText from './RevealText';
import FadeUpElement from './FadeUpElement';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const whatsappNumber = "6201195893";
  
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };
  
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto mb-16">
          <div className="mb-6">
            <RevealText>
              <h2 className="text-3xl md:text-5xl font-display font-bold">Let's Work Together</h2>
            </RevealText>
          </div>
          
          <FadeUpElement delay={1}>
            <p className="text-lg text-foreground/80">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
          </FadeUpElement>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <FadeUpElement delay={1}>
              <div className="mb-8">
                <h3 className="text-2xl font-display font-bold mb-4">Contact Information</h3>
                <p className="text-foreground/80 mb-6">
                  Fill out the form or contact me directly and I'll get back to you within 24 hours.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Phone className="mr-4 text-primary" size={20} />
                    <span className="hover-trigger">(+1) 123 456 7890</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="mr-4 text-primary" size={20} />
                    <span className="hover-trigger">hello@jamessmith.dev</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="mr-4 text-primary" size={20} />
                    <span className="hover-trigger">New York, NY</span>
                  </li>
                  <li className="flex items-center cursor-pointer hover:text-primary transition-colors" onClick={handleWhatsAppClick}>
                    <MessageSquare className="mr-4 text-primary" size={20} />
                    <span className="hover-trigger">WhatsApp: +62 0119 5893</span>
                  </li>
                </ul>
              </div>
            </FadeUpElement>
            
            <FadeUpElement delay={2}>
              <div>
                <h3 className="text-2xl font-display font-bold mb-4">Connect</h3>
                <div className="flex space-x-6">
                  <a href="#" className="hover-trigger p-2 rounded-full bg-muted">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="#" className="hover-trigger p-2 rounded-full bg-muted">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                    </svg>
                  </a>
                  <a href="#" className="hover-trigger p-2 rounded-full bg-muted">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="#" className="hover-trigger p-2 rounded-full bg-muted">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </FadeUpElement>
            
            <FadeUpElement delay={3}>
              <div className="mt-8">
                <Button 
                  className="hover-trigger flex items-center gap-2"
                  onClick={handleWhatsAppClick}
                >
                  <MessageSquare size={18} />
                  Chat on WhatsApp
                </Button>
              </div>
            </FadeUpElement>
          </div>
          
          <div>
            <FadeUpElement delay={2}>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-md bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-md bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-md bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-md bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your Message"
                  />
                </div>
                
                <div>
                  <Button className="hover-trigger w-full py-6 text-base">
                    Send Message
                  </Button>
                </div>
              </form>
            </FadeUpElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
