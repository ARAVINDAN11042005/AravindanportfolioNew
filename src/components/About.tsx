import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A passionate technology enthusiast with a strong foundation in programming and web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* About Text */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              My Journey in Technology
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I am a passionate front-end developer with intermediate knowledge of C, C++, and DSA in Java.
              Currently enhancing my Java skills through a web development internship while exploring the
              fascinating world of Artificial Intelligence and Machine Learning.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I have experience in building responsive websites and developing an AI-powered assessment
              system using OpenCV and MediaPipe. My goal is to create innovative solutions that bridge
              the gap between traditional programming and cutting-edge AI technologies.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-card rounded-lg border">
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border">
                <div className="text-2xl font-bold text-primary">6+</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
            </div>
          </div>

          {/* Education & Achievements */}
          <div className="space-y-6 animate-fade-in">
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Education</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      B.Tech - Information Technology<br />
                      K.S.R College of Engineering, Tiruchengode (2022 - 2026)<br />
                      CGPA: 8.6/10
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      SSLC - Govt Boys HR Sec School (2021 - 2022)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Recent Achievement</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      International Conference - High-Accuracy Automatic Code Comment Generation using Gen AI & NLP (12/2025)
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      NPTEL Industrial IoT 4.0 Completed with 82%
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Publication</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      "Personalized MCQ Generator for Adaptive Learning by Leveraging RAG Method in Gen AI" - Accepted (2025) in
                      International Journal of Experiments & Theoretical Artificial Intelligence (IJETAI), Volume 4, Issue 1
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