import { Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";


export const ContactSection =() =>{





    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Contact <span className="text-primary"> 
                Me
            </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Are you trying get in touch with me? Feel free to reach out, I'm always interested in new opportunities.

        </p>

        <div className="items-center">
            <div className="space-y-8">
                <h3 className="text-2xl font-semibold mb-6"> Contact Information
                    
                </h3>

                
                    <div className="flex justify-center space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                        <Phone className= "h-6 w-6 text-primary"/>
                        </div>
                        <div>
                            <h4>Phone</h4>
                            <a href="tel:+917012543051" 
                            target = "_blank"
                            className="text-muted-foreground hover:text-primary transition-colors">+917012543051</a>
                        </div>

                    </div>


                <div className="space-y-6 justify-center">
                    <div className="flex justify-center space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                        <Mail className= "h-6 w-6 text-primary"/>
                        </div>
                        <div>
                            <h4>Email</h4>
                            <a href="mailto:abhinandg2003@gmail.com" 
                            target = "_blank"
                            className="text-muted-foreground hover:text-primary transition-colors">abhinandg2003@gmail.com</a>
                        </div>

                    </div>


                    <div className="flex justify-center space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                        <MapPin className= "h-6 w-6 text-primary"/>
                        </div>
                        <div>
                            <h4>Location</h4>
                            <a 
                            className="text-muted-foreground hover:text-primary transition-colors">Maneed P O, Piravom, Kochi, Kerala</a>
                        </div>

                    </div>

                </div>

                <div className="pt-8">
                    <h4>
                        Connect With Me
                    </h4>
                    <div className="flex space-x-4 justify-center">
                        <a href="http://linkedin.com/in/abhinandg07"
                        target="_blank"
                        className="hover:text-primary">
                            <Linkedin />
                        </a>

                        <a href="https://www.instagram.com/lazy_graphite?igsh=MTdibHc4aHF2b2d1Zg=="
                        target="_blank"
                        className="hover:text-primary">
                            <Instagram />
                        </a>

                        <a href="https://wa.me/qr/SDR7LXPHMHB7F1"
                        target="_blank"
                        className="hover:text-primary">
                            <MessageCircle />
                        </a>
                        

                    </div>
                    
                </div>

            </div>
        </div>
        </div>

    </section>;
}