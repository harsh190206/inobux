import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Smartphone, BarChart3, Palette } from "lucide-react";
import heroImage from "@/assets/hero-tech-workspace.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern tech workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Transform Your Business with 
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  Expert IT Solutions
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                InoBux delivers cutting-edge web development, mobile apps, data science, and UI/UX design services. 
                We turn your ideas into powerful digital experiences that drive growth.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow-shadow transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={scrollToServices}
                className="border-primary/20 hover:bg-primary/5"
              >
                View Services
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg flex items-center justify-center mx-auto">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium">Web Development</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg flex items-center justify-center mx-auto">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium">Mobile Apps</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg flex items-center justify-center mx-auto">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium">Data Science</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg flex items-center justify-center mx-auto">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium">UI/UX Design</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20 blur-3xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-3 font-mono text-sm">
                    <div className="text-primary">const</div>
                    <div className="text-muted-foreground">solution = Inobux.create(&#123;</div>
                    <div className="pl-4 text-muted-foreground">services: [&apos;web&apos;, &apos;mobile&apos;, &apos;data&apos;, &apos;design&apos;],</div>
                    <div className="pl-4 text-muted-foreground">quality: &apos;premium&apos;,</div>
                    <div className="pl-4 text-muted-foreground">delivery: &apos;fast&apos;</div>
                    <div className="text-muted-foreground">&#125;);</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;