import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Java Development Intern",
      company: "Rejola IT Services",
      duration: "June 2024 - July 2024",
      location: "Remote",
      description: "Developed Java applications using OOP concepts, fixed bugs, tested applications and worked in a team environment.",
      technologies: ["Java", "Spring Boot", "DSA", "Backend Development"]
    },
    {
      title: "Web Development Intern",
      company: "Techno Hacks Edu-Tech",
      duration: "May 2024 - June 2024",
      location: "Remote",
      description: "Developed responsive web pages, improved UI using HTML, CSS and JavaScript, and debugged frontend issues.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"]
    }
  ];

  const certifications = [
    {
      title: "Generative AI by IBM",
      description: "Foundational Course on Building with Responsible AI",
      year: "2024"
    },
    {
      title: "AWS Cloud Technical",
      description: "Building Resilient, Scalable and Secure Cloud Solutions",
      year: "2024"
    },
    {
      title: "UX Design Course by Google",
      description: "User Experience Design Thinking and Accessibility Standards",
      year: "2024"
    },
    {
      title: "Process Mining Virtual Internship",
      description: "CELONIS - Advanced Process Mining Techniques",
      year: "2024"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Experience & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My professional journey and continuous learning in technology.
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Professional Experience</h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground">{exp.title}</h4>
                      <div className="flex items-center gap-2 text-primary font-medium mt-1">
                        <Building className="h-4 w-4" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end gap-2 mt-2 md:mt-0">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Certifications & Courses</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-semibold text-foreground">{cert.title}</h4>
                    <Badge variant="outline">{cert.year}</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;