import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";
import { CountUpStat } from "./CountUpStat";

interface HeroProps {
  profileImage: string;
}

export function Hero({ profileImage }: HeroProps) {
  return (
    <section id="home" className="min-h-screen pt-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 md:order-1">
            {/* Badge */}
            <div className="inline-flex">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full shadow-lg">
                AVAILABLE FOR WORK
              </div>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl tracking-tight">
                Hello, I'm
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  Israel Olasupo
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-xl">
                I'm a <span className="text-purple-600 font-semibold">Front-End Developer</span> and aspiring{" "}
                <span className="text-pink-600 font-semibold">Full Stack Software Engineer</span> passionate about
                creating beautiful, functional web experiences through carefully crafted code and
                user-centric design.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white group"
                >
                  Let's Talk
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>

            {/* Stats - hidden on mobile */}
            <div className="hidden md:grid grid-cols-3 gap-8 pt-8">
              <CountUpStat end={5} label="Years Experience" />
              <CountUpStat end={30} label="Projects Completed" />
              <CountUpStat end={10} label="Happy Clients" />
            </div>
          </div>

          {/* Right content - Image */}
          <div className="relative lg:ml-auto md:order-2">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Decorative background card */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl transform rotate-6 opacity-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl transform -rotate-6 opacity-10" />
              
              {/* Image container */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden p-2">
                <ImageWithFallback
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-auto rounded-2xl object-cover flip-horizontal"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-sm">Available Now</span>
                </div>
              </div>
            </div>

            {/* Stats - visible only on mobile, positioned below image */}
            <div className="md:hidden grid grid-cols-3 gap-8 pt-12">
              <CountUpStat end={5} label="Years Experience" />
              <CountUpStat end={30} label="Projects Completed" />
              <CountUpStat end={10} label="Happy Clients" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
