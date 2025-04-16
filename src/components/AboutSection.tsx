
import FadeUpElement from './FadeUpElement';
import RevealText from './RevealText';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { User } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center lg:justify-start">
            <Avatar className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20">
              <AvatarImage 
                src="/lovable-uploads/d9ffc1f3-8815-4c5f-ad65-5a975c89b4d5.png" 
                alt="Profile Picture" 
                className="object-cover"
              />
              <AvatarFallback>
                <User className="w-32 h-32 text-muted-foreground" />
              </AvatarFallback>
            </Avatar>
          </div>
          
          <div>
            <div className="mb-8">
              <RevealText>
                <h2 className="text-5xl md:text-6xl font-display font-bold text-white">The Expert</h2>
              </RevealText>
            </div>
            
            <FadeUpElement delay={1}>
              <p className="text-lg mb-6 text-foreground/90 leading-relaxed">
                I'm a multimedia design graduate with nearly 20 years of experience in creative and marketing industries. 
                I've been specialising in Webflow design and development for over five years with a deep understanding of design 
                principles that allows me to create websites that not only look great, but also function flawlessly.
              </p>
            </FadeUpElement>
            
            <FadeUpElement delay={2}>
              <p className="text-lg mb-6 text-foreground/90 leading-relaxed">
                With diverse experience across multiple roles and industries, I'm well-equipped to bring more than 
                just design skills to the table. As an asset to your fast-paced design agency team, I can contribute 
                a wealth of expertise and experience.
              </p>
            </FadeUpElement>
            
            <FadeUpElement delay={3}>
              <p className="text-lg text-foreground/90 leading-relaxed">
                If you're seeking a creative, passionate designer and developer who can deliver something 
                truly unique and unforgettable, look no further.
              </p>
            </FadeUpElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
