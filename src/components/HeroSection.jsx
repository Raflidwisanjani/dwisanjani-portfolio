import { ArrowDown } from "lucide-react";
import Lanyard from "./Lanyard";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-dvh flex items-center px-4 snap-start"
    >
      {/* Lanyard layer — right half only, interactive */}
      <div className="hidden md:block absolute inset-y-0 right-0 w-1/2 z-0">
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div>

      {/* Outer container: no longer captures clicks on its own */}
      <div className="container mx-auto w-full z-10 relative pointer-events-none">
        <div className="max-w-2xl md:w-1/2 md:pr-8 space-y-6 text-left pointer-events-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">
              Hi, I'm
            </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Rafli
            </span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground opacity-0 animate-fade-in-delay-3">
            I build machine learning models that solve real-world problems and create innovative solutions.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};