
import FadeUpElement from './FadeUpElement';
import RevealText from './RevealText';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="mb-8">
              <RevealText>
                <h2 className="text-3xl md:text-4xl font-display font-bold">About Me</h2>
              </RevealText>
            </div>
            
            <FadeUpElement delay={1}>
              <p className="text-lg mb-6 text-foreground/80">
                I'm a creative developer and designer with over 5 years of experience creating immersive digital experiences.
                My work combines technical expertise with artistic vision to build websites that are both beautiful and functional.
              </p>
            </FadeUpElement>
            
            <FadeUpElement delay={2}>
              <p className="text-lg mb-6 text-foreground/80">
                I collaborate with brands and agencies to create memorable digital journeys through thoughtful design, 
                smooth animations, and intuitive interactions.
              </p>
            </FadeUpElement>
            
            <FadeUpElement delay={3}>
              <p className="text-lg text-foreground/80">
                When I'm not coding, you'll find me exploring new design trends, experimenting with creative coding,
                and seeking inspiration from art, nature, and architecture.
              </p>
            </FadeUpElement>
          </div>
          
          <div>
            <div className="mb-8">
              <RevealText>
                <h2 className="text-3xl md:text-4xl font-display font-bold">My Skills</h2>
              </RevealText>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FadeUpElement delay={1}>
                <div className="p-6 bg-muted rounded-lg">
                  <h3 className="text-xl font-display font-medium mb-3">Development</h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• React & Next.js</li>
                    <li>• JavaScript & TypeScript</li>
                    <li>• HTML5 & CSS3</li>
                    <li>• Tailwind CSS</li>
                    <li>• GSAP Animations</li>
                  </ul>
                </div>
              </FadeUpElement>
              
              <FadeUpElement delay={2}>
                <div className="p-6 bg-muted rounded-lg">
                  <h3 className="text-xl font-display font-medium mb-3">Design</h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• UI/UX Design</li>
                    <li>• Figma & Adobe XD</li>
                    <li>• Responsive Design</li>
                    <li>• Motion Design</li>
                    <li>• Interactive Prototyping</li>
                  </ul>
                </div>
              </FadeUpElement>
              
              <FadeUpElement delay={3}>
                <div className="p-6 bg-muted rounded-lg">
                  <h3 className="text-xl font-display font-medium mb-3">Creative</h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• WebGL & Three.js</li>
                    <li>• Canvas Animations</li>
                    <li>• Interactive Experiences</li>
                    <li>• 3D Modeling</li>
                    <li>• Creative Coding</li>
                  </ul>
                </div>
              </FadeUpElement>
              
              <FadeUpElement delay={4}>
                <div className="p-6 bg-muted rounded-lg">
                  <h3 className="text-xl font-display font-medium mb-3">Other</h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Version Control (Git)</li>
                    <li>• Project Management</li>
                    <li>• SEO Optimization</li>
                    <li>• Performance Optimization</li>
                    <li>• Responsive Testing</li>
                  </ul>
                </div>
              </FadeUpElement>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
