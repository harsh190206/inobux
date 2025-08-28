import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "NearBux Platform",
      description: "A comprehensive business networking platform that connects local businesses and freelancers, featuring real-time messaging, project management, and payment processing.",
      image: "/nearbux.png",
      tags: ["React", "Node.js", "MongoDB", "Real-time"],
      category: "Web Development"
    },
    {
      title: "EnzoCoolCalc Mobile App",
      description: "Cross-platform calculator application built with React Native, featuring advanced mathematical functions, history tracking, and customizable themes.",
      image: "/enzo.png",
      tags: ["React Native", "JavaScript", "Cross-Platform", "Mobile"],
      category: "Mobile Development"
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Our <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing our latest projects and successful client collaborations across various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-card-shadow transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-contain bg-gradient-to-br from-primary/5 to-primary-glow/5 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 right-4">
                    <div 
                      className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors"
                      onClick={() => {
                        if (project.title === "NearBux Platform") {
                          window.open('https://nearbux.com', '_blank');
                        } else if (project.title === "EnzoCoolCalc Mobile App") {
                          window.open('https://pragyarefrigeration.in/', '_blank');
                        }
                      }}
                    >
                      <ExternalLink className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <Badge variant="secondary" className="text-xs">{project.category}</Badge>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-4">
            Want to see your project featured here?
          </p>
          <p className="text-2xl font-semibold text-primary">
            Let's build something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;