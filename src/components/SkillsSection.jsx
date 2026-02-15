import { act, useState } from "react";
import { cn } from "../lib/utils";


const skills =[
    //Frontend
    {name: "HTML",level: 90, category: "Frontend", link: "https://en.wikipedia.org/wiki/HTML"},
    {name: "CSS",level: 90, category: "Frontend", link: "https://en.wikipedia.org/wiki/CSS"},
    {name: "React.js",level: 90, category: "Frontend", link: "https://react.dev/"},
    {name: "JavaScript",level: 85, category: "Frontend", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
    {name : "Tailwind CSS", level: 85, category: "Frontend", link: "https://tailwindcss.com/"},
    {name : "Bootstrap", level: 85, category: "Frontend", link: "https://getbootstrap.com/"},
    {name : "Flutter", level: 75, category: "Frontend", link: "https://flutter.dev/"},
    {name : "Next.js", level: 85, category: "Frontend", link: "https://nextjs.org/"},
    

    //Backend
    {name: "MongoDB",level: 90, category: "Backend", link: "https://www.mongodb.com/"},
    {name: "Node.js",level: 85, category: "Backend", link: "https://nodejs.org/en"},
    {name: "Express.js",level: 85, category: "Backend", link: "https://expressjs.com/"},
    {name : "Dart", level: 75, category: "Backend", link: "https://dart.dev/"},

    //Tools
    {name: "Git/Github",level: 95, category: "Tools", link: "https://github.com/"},
    {name : "vscode", level: 95, category: "Tools", link: "https://code.visualstudio.com/"},
    {name : "Postman", level: 90, category: "Tools", link: "https://www.postman.com/"},
    {name : "npm", level: 85, category: "Tools", link: "https://www.npmjs.com/"},
    {name : "restful APIs", level: 85, category: "Tools", link: "https://restfulapi.net/"},
    {name : "GSAP", level: 85, category: "Tools", link: "https://gsap.com/"},
    {name : "Framer", level: 75, category: "Tools", link: "https://www.framer.com/"},
]

const categories = ["all", "frontend", "backend", "tools"];


export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill)=> activeCategory === "all" || skill.category.toLowerCase() === activeCategory);

    return (
    <section id="skills" className="py-24  relative bg-secondary/30">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-center">
                My <span className="text-primary">
                    Skills
                </span>
            </h2>

            <div className="flex flex-nowrap overflow-x-auto justify-center sm:justify-center gap-2 sm:gap-4 mb-12 px-1 scrollbar-hide">
                {categories.map((category,key) => (
                    <button key={key} 
                    onClick={() => setActiveCategory(category)}
                    className={cn(
  "shrink-0 px-3 sm:px-5 py-1.5 sm:py-2 text-[11px] sm:text-sm rounded-full transition-colors duration-300 capitalize whitespace-nowrap",
  activeCategory === category
    ? "bg-primary text-primary-foreground"
    : "bg-secondary/70 text-foreground hover:bg-secondary/80"
)}

                    >
                        {category}
                        </button>
                ))}


            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill,key) => (
                    <a href= {skill.link} target="_blank">
                    <div key= {key}
                    className="bg-card p-3 md:p-6 rounded-lg shadow-xs card-hover" 
                    >
                        <div className="text-left mb:3 md:mb-4">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                            style={{width: skill.level + "%" }}/>
                            
                        </div>
                        <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">
                                    {skill.level}%
                                </span>
                            </div>
                    </div>
                    </a>
                ))}

            </div>

        </div>

    </section>
    );
};