import { Briefcase, Code,User } from "lucide-react";

export const AboutSection =() =>{
    return <section id ="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>

                    <p className="text-muted-foreground">
                         I have a strong foundation in full-stack web development
 using the MERN stack. Skilled in JavaScript, React.js, Node.js, Express.js, and MongoDB, with experience
 building responsive and user-friendly interfaces.
                    </p>

                    <p className="text-muted-foreground">
                        I'm Passionate about creating solutions to complex problems, and continuously learning new technologies to enhance my skills.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Contact Me
                        </a>

                        <a href="https://drive.google.com/file/d/1698k_gAUupBlvMc0PfUegzlorUxEed0N/view?usp=drive_link" className="cosmic-button">
                            Download CV
                        </a>

                    </div>

                </div>

                <div className="grid grid-cols-1 gap-6">
                   
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Code className="h-6 w-6 text-primary"/>

                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground">Building responsive and user-friendly web applications using modern technologies.</p>

                            </div>
                        </div>
                    </div>
                     <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <User className="h-6 w-6 text-primary"/>

                            </div>
                             <div className="text-left">
                                <h4 className="font-semibold text-lg">Full-Stack</h4>
                                <p className="text-muted-foreground">Designing seamless and user-friendly full-stack web solutions.</p>

                            </div>
                        </div>
                     </div>
                      <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className="h-6 w-6 text-primary"/>

                            </div>
                             <div className="text-left">
                                <h4 className="font-semibold text-lg">Project Management</h4>
                                <p className="text-muted-foreground">Completed a number of Hobby and academic projects that demonstrate my ability to work with a team.</p>

                            </div>
                        </div>
                      </div>

                </div>
                

            </div>
        </div>
    </section>;
};