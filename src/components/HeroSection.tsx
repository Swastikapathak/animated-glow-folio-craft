
import { ChevronDown } from 'lucide-react';
import RevealText from './RevealText';
import FadeUpElement from './FadeUpElement';
import BackgroundAnimation from './BackgroundAnimation';

const HeroSection = () => {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <BackgroundAnimation />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 overflow-hidden">
            <RevealText>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                I create digital experiences
              </h1>
            </RevealText>
          </div>
          
          <div className="mb-12 overflow-hidden">
            <RevealText delay={2}>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight text-primary">
                that inspire & engage
              </h2>
            </RevealText>
          </div>
          
          <FadeUpElement delay={4}>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl">
              A passionate creative developer specializing in interactive web experiences 
              and digital solutions that help brands stand out.
            </p>
          </FadeUpElement>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <a href="#about" className="hover-trigger flex flex-col items-center">
          <span className="text-sm mb-2 opacity-70">Scroll Down</span>
          <ChevronDown className="animate-bounce h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
