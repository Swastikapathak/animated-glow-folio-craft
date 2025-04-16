
import RevealText from './RevealText';
import FadeUpElement from './FadeUpElement';

const projects = [
  {
    id: 1,
    title: "Harmony",
    category: "Design & Development",
    description: "A music streaming platform with immersive visualizations and intuitive UI design.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1470&auto=format&fit=crop",
    delay: 1
  },
  {
    id: 2,
    title: "Nourish",
    category: "Web Development",
    description: "Farm-to-table restaurant website with online ordering and interactive menu.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1374&auto=format&fit=crop",
    delay: 2
  },
  {
    id: 3,
    title: "Traverse",
    category: "Interactive Experience",
    description: "Travel booking platform with immersive destination previews and 3D maps.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1470&auto=format&fit=crop",
    delay: 3
  },
  {
    id: 4,
    title: "Lumina",
    category: "E-commerce Design",
    description: "Luxury lighting brand with interactive product visualization and AR features.",
    image: "https://images.unsplash.com/photo-1507919909716-c8262e491cde?q=80&w=1632&auto=format&fit=crop",
    delay: 4
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto mb-16">
          <div className="mb-6">
            <RevealText>
              <h2 className="text-3xl md:text-5xl font-display font-bold">Featured Projects</h2>
            </RevealText>
          </div>
          
          <FadeUpElement delay={1}>
            <p className="text-lg text-foreground/80">
              A selection of my most recent work, showcasing my skills in design, development, 
              and creating engaging digital experiences.
            </p>
          </FadeUpElement>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <FadeUpElement key={project.id} delay={project.delay}>
              <div className="group project-item overflow-hidden">
                <div className="mb-6 overflow-hidden rounded-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full aspect-video object-cover project-image"
                  />
                </div>
                
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-display font-bold">{project.title}</h3>
                  <span className="text-sm text-primary font-medium">{project.category}</span>
                </div>
                
                <p className="text-foreground/80">{project.description}</p>
                
                <div className="mt-4">
                  <a href="#" className="inline-flex items-center text-primary hover-trigger hover-line">
                    View Project
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </FadeUpElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
