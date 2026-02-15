import { ArrowRight, ExternalLink, Github } from "lucide-react";


const projects = [
    {
        id: 1,
        title: "Unity Heights",
        description: "Portfolio of Unity Heights Constructions. Developed at Algon Solutions.",
        image: "Projects/UnityHeights.png",
        tags: ["React", "JavaScript", "HTML","CSS", "Tailwind CSS"],
        demoUrl: "https://www.unityheights.org/",
        githubUrl: "#"
    },

        {
        id: 2,
        title: "Tailor Management",
        description: "Designed and developed the landing page of Tailor management system at Algon Solutions",
        image: "Projects/Tailorpro.png",
        tags: ["React.js", "Next.js", "HTML","CSS", "Tailwind CSS","Framer","GSAP"],
        demoUrl: "https://tailor-pro-umber.vercel.app/",
        githubUrl: "#"
    },


    {
        id: 3,
        title: "Cinetunez",
        description: "An emotion and weather based movie and music recommendation mobile app built with Flutter.",
        image: "Projects/Cinetunez.jpg",
        tags: ["Flutter", "Dart", "Supabase", "APIs", "Appwrite", "MongoDB", "Tensorflow"],
        demoUrl: "https://www.linkedin.com/posts/abhinandg07_flutter-ai-teachable-activity-7330236563685105666-GhEO",
        githubUrl: "https://github.com/Abhinandg2003/Cinetunez"
    },
    {
        id: 4,
        title: "Mini Blog",
        description: "A Simple blogging platform built with MERN stack.",
        image: "Projects/Mernblog.png",
        tags: ["React", "JavaScript", "Node.js", "MongoDB"],
        demoUrl: "#",
        githubUrl: "https://github.com/Abhinandg2003/Mernblog"
    },
        {
        id: 5,
        title: "Noteable",
        description: "A simple note taking web application using react, Tailwind, node.js and MongoDB.",
        image: "Projects/Noteable.png",
        tags: ["React", "JavaScript", "Node.js", "MongoDB", "Tailwind CSS"],
        demoUrl: "https://noteable-1.onrender.com",
        githubUrl: "https://github.com/Abhinandg2003/Noteable"
    },
]

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-center"> Featured <span className="text-primary" >
                Projects
            </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of the projects I've worked on recently. It includes Hobby, academic, and Industrial projects.

            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-md bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}

                            </div>

                            <h3 className="text-xl font-semibold mb-1">
                                {project.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    {project.id !== 4 && (
                                        <a href={project.demoUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition=colors duration-300 ">
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                    {![1, 2].includes(project.id) && (
                                    <a href={project.githubUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition=colors duration-300">
                                        <Github size={20} />
                                    </a>
                                    )}

                                </div>
                            </div>

                        </div>

                    </div>

                ))}

            </div>
            <div className="text-center mt-12">
                <a href="https://github.com/Abhinandg2003"
                    target="_blank"
                    className="cosmic-button w-fit flex items-center mx-auto gap-2">
                    My Github Profile <ArrowRight size={16} />

                </a>
            </div>

        </div>

    </section>;
};