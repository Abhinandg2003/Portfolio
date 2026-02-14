import { ArrowDown } from "lucide-react";
import LogoSlider from "./LogoSlider";

export const HeroSection = () => {
    return (
    <section 
    id="home" 
    className="relative min-h-screen flex flex-col items-center justify-center px-4">
    <div className="container max-w-7xl md:max-w-4xl mx-auto text-center z-10 mt-20 md:mt-40">
        <div className="">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight  mb-5">
  <span className="opacity-0 animate-fade-in">Hi</span>{" "}
  <span className="opacity-0 animate-fade-in-delay-2">I'm</span>{" "} <br />
  <span className="text-primary opacity-0 animate-fade-in-delay-4 whitespace-nowrap">
    Abhinand G
  </span>
</h1>

            <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                I'm a motivated entry-level fullstack developer who is eager to contribute
 to innovative projects and collaborate with dynamic teams to deliver high-quality software solutions.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4 mt-5" >
                <a href="#projects" className="cosmic-button"> View My Projects</a>
            </div>

        </div>
        </div>

        <LogoSlider />
        


    </section>
    );
}