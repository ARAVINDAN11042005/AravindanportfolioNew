import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, GamepadIcon, Hand } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Assessment System",
      description: "Revolutionizing education using Generative AI with an adaptive assessment system powered by Retrieval-Augmented Generation (RAG). This system personalizes learning experiences based on individual student needs.",
      icon: Brain,
      technologies: ["Python", "AI/ML", "RAG", "OpenCV", "MediaPipe"],
      features: [
        "Personalized learning paths",
        "Real-time assessment adaptation",
        "Advanced AI algorithms",
        "Educational analytics"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "AI Tic-Tac-Toe Game",
      description: "An unbeatable Tic-Tac-Toe game implemented in Java using the Minimax algorithm. Features an intelligent AI opponent that calculates optimal moves to ensure challenging gameplay.",
      icon: GamepadIcon,
      technologies: ["Java", "Minimax Algorithm", "Game Theory", "GUI"],
      features: [
        "Unbeatable AI opponent",
        "Minimax algorithm implementation",
        "Clean user interface",
        "Multiple difficulty levels"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Real-Time Gesture Tracking",
      description: "A vision-based system for accurate hand gesture detection and tracking using MediaPipe and AI. Enables natural human-computer interaction through computer vision.",
      icon: Hand,
      technologies: ["Python", "OpenCV", "MediaPipe", "Computer Vision", "AI"],
      features: [
        "Real-time gesture recognition",
        "High accuracy tracking",
        "Multiple gesture support",
        "Cross-platform compatibility"
      ],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative solutions at the intersection of AI, web development, and computer vision.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-fade-in">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  {/* <div className="flex gap-3 pt-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button variant="default" size="sm" className="flex-1">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div> */}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;