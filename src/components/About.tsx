import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen, ExternalLink, Code2, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A driven B.Tech Information Technology student with a strong foundation in Java, DSA, Web Development, and AI/ML Research.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* About Text */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              My Journey in Technology
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I am an aspiring software engineer specializing in front-end web development, Java Data Structures & Algorithms,
              and Artificial Intelligence. As a dedicated fresher, I actively apply theoretical concepts to real-world applications through hands-on internships and published research work.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              My technical expertise spans building responsive full-stack/front-end web applications, implementing AI-driven solutions using MediaPipe & GenAI, and publishing peer-reviewed research papers in IEEE and international journals.
            </p>

            {/* Key Fresher Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-card rounded-xl border hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]">
                <div className="text-2xl sm:text-3xl font-bold text-primary">10+</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1 font-medium">Projects Built</div>
              </div>
              <div className="text-center p-4 bg-card rounded-xl border hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]">
                <div className="text-2xl sm:text-3xl font-bold text-primary">2</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1 font-medium">Research Papers</div>
              </div>
              <div className="text-center p-4 bg-card rounded-xl border hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]">
                <div className="text-2xl sm:text-3xl font-bold text-primary">8.6</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1 font-medium">CGPA (B.Tech IT)</div>
              </div>
            </div>
          </div>

          {/* Education & Research Publications */}
          <div className="space-y-6 animate-fade-in">
            {/* Education Card */}
            <Card className="hover:shadow-elegant transition-all duration-300 border-border/60">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-primary/10 rounded-xl shrink-0">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h4 className="font-semibold text-foreground text-lg">Education</h4>
                      <Badge variant="outline" className="text-xs">2022 - 2026</Badge>
                    </div>
                    <p className="text-sm font-medium text-foreground mt-2">
                      B.Tech - Information Technology
                    </p>
                    <p className="text-sm text-muted-foreground">
                      K.S.R College of Engineering, Tiruchengode • <span className="text-primary font-semibold">CGPA: 8.6/10</span>
                    </p>
                    <p className="text-xs text-muted-foreground mt-2 pt-2 border-t border-border/40">
                      SSLC: Govt Boys HR Sec School (2021 - 2022)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* IEEE Publication Card */}
            <Card className="hover:shadow-elegant transition-all duration-300 border-primary/30 bg-primary/5">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-primary/10 rounded-xl shrink-0">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h4 className="font-semibold text-foreground text-lg">IEEE Publication</h4>
                      <Badge variant="default" className="bg-primary text-primary-foreground font-semibold text-xs">
                        IEEE Xplore
                      </Badge>
                    </div>
                    <p className="text-sm font-semibold text-foreground mt-2 leading-snug">
                      "High-Accuracy Automatic Code Comment Generation using NLP in Gen AI for Enhanced Code Readability"
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Published in IEEE 4th International Conference on Sustainable Computing and Smart Systems (ICSCSS)
                    </p>
                    <a
                      href="https://ieeexplore.ieee.org/document/11645719"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-primary font-bold hover:underline mt-3 bg-primary/10 px-3 py-1.5 rounded-lg border border-primary/20 transition-all hover:bg-primary hover:text-primary-foreground"
                    >
                      View on IEEE Xplore <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Journal Publication & Achievements Card */}
            <Card className="hover:shadow-elegant transition-all duration-300 border-border/60">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-primary/10 rounded-xl shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h4 className="font-semibold text-foreground text-lg">Journal Research & Certification</h4>
                      <Badge variant="secondary" className="text-xs">IJETAI 2025</Badge>
                    </div>
                    <p className="text-sm font-medium text-foreground mt-2">
                      "Personalized MCQ Generator for Adaptive Learning by Leveraging RAG Method in Gen AI"
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Accepted in International Journal of Experiments & Theoretical Artificial Intelligence (IJETAI), Vol 4, Issue 1
                    </p>
                    <p className="text-xs text-muted-foreground mt-2 pt-2 border-t border-border/40 font-medium">
                      🏆 NPTEL Industrial IoT 4.0 Completed with <span className="text-primary font-semibold">82%</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;