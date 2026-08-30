import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile.jpg";

const titles = [
  "IT Student & Front-End Developer",
  "Java & DSA Enthusiast",
  "AI / ML Explorer",
  "Problem Solver"
];

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    const speed = deleting ? 40 : 80;
    const timer = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1800);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setTitleIndex((i) => (i + 1) % titles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [text, deleting, titleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-subtle" />

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 animate-fade-in">
          {/* Profile Photo - framed box, grayscale until hover */}
          <div className="group relative shrink-0">
            <div className="absolute -inset-2 bg-gradient-primary rounded-3xl opacity-50 blur-xl group-hover:opacity-90 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-primary rounded-3xl p-1.5">
              <img
                src={profileImg}
                alt="Aravindan R"
                className="h-56 w-48 sm:h-64 sm:w-56 md:h-80 md:w-64 rounded-2xl object-cover object-top shadow-elegant grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-500"
              />
              <span className="absolute bottom-3 right-3 flex h-5 w-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-green-500 border-2 border-background"></span>
              </span>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-3 md:hidden">
              Hover to see in color ✨
            </p>
          </div>

          {/* Text beside the photo */}
          <div className="text-center md:text-left max-w-xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Aravindan R
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground mb-4 h-8">
              {text}
              <span className="animate-pulse text-primary">|</span>
            </h2>

            <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
              Passionate front-end developer with intermediate knowledge of C, C++, and DSA in Java.
              Currently enhancing Java skills through web development internships while exploring
              Artificial Intelligence and Machine Learning.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 mb-6">
              <Button variant="hero" size="lg" onClick={() => window.open("mailto:aravindanr2005@gmail.com")}>
                <Mail className="mr-2 h-5 w-5" />
                Hire Me
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}>
                <ArrowDown className="mr-2 h-5 w-5" />
                View My Work
              </Button>
            </div>
            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a
                href="mailto:aravindanr2005@gmail.com"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/ARAVINDAN11042005"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/aravindan-r-864167268/"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-float text-center mt-12">
          <a href="#about" className="inline-block">
            <ArrowDown className="h-8 w-8 text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;