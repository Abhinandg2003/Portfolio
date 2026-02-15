import { Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import toast from "react-hot-toast";
import { useState,useRef, useEffect } from "react";



export const ContactSection =() =>{

    const [submittedOnce, setSubmittedOnce] = useState(false);
      const [showSuccess, setShowSuccess] = useState(false);
    
    
     
    
    
    
      const [form, setForm] = useState({
      name: "",
      email: "",
      phone: "",
      details: "",
    });
    
    const [errors, setErrors] = useState({});
    
    function validate(values) {
      const newErrors = {};
    
      if (!values.name.trim()) newErrors.name = "Please enter your name.";
    
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!values.email.trim()) newErrors.email = "Please enter your email.";
      else if (!emailRegex.test(values.email))
        newErrors.email = "Please enter a valid email address.";
    
      const phoneDigits = values.phone.replace(/\D/g, "");
      if (!values.phone.trim()) newErrors.phone = "Please enter your phone number.";
      else if (phoneDigits.length !== 10)
        newErrors.phone = "Phone number must be exactly 10 digits.";
    
      if (!values.details.trim())
        newErrors.details = "Please enter project details.";
      else if (values.details.trim().length < 10)
        newErrors.details = "Project details must be at least 10 characters.";
    
      return newErrors;
    }
    
    function handleChange(e) {
      const { name, value } = e.target;
    
      setForm((prev) => ({
        ...prev,
        [name]: name === "phone" ? value.replace(/[^\d]/g, "") : value,
      }));
    
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
    
    async function onSubmit(e) {
      e.preventDefault();
    
      const newErrors = validate(form);
      setErrors(newErrors);
    
      if (Object.keys(newErrors).length > 0) {
        toast.error("Please fix the form errors");
        return;
      }
    
      setSubmittedOnce(true);
      toast.loading("Submitting...", { id: "consultation-toast" });
    
      try {
        const res = await fetch("https://formsubmit.co/ajax/abhinandg2003@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(form),
        });
    
        const data = await res.json();
    
        if (data.success === "true") {
      toast.success("Request submitted successfully", {
        id: "consultation-toast",
      });
    
      setForm({
        name: "",
        email: "",
        phone: "",
        details: "",
      });
    
      setShowSuccess(true);
    
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000); 
        } else {
          throw new Error("Submission failed");
        }
      } catch (err) {
        toast.error("Something went wrong. Try again", {
          id: "consultation-toast",
        });
      }
    
      setSubmittedOnce(false);
    }
    






    return <section id="contact" className="pt-24 pb-10 px-0  bg-secondary/30">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Contact <span className="text-primary"> 
                Me
            </span>
        </h2>
        <p className="text-center text-muted-foreground mb-5 max-w-2xl mx-auto">
            Are you trying get in touch with me? Feel free to reach out, I'm always interested in new opportunities.

        </p>


        {/* CONSULTATION FORM SECTION */}
<section className="pb-10 ">
  <div className="w-full" id="consultation">
    <div className="rounded-lg border border-foreground  p-8 sm:p-10 shadow-sm">
      <h3 className="text-3xl font-semibold tracking-tight text-foreground">
        Enquiries
      </h3>
      <p className="mt-3  text-md text-foreground">
        If you want to contact me, fill the form. I will get in touch soon.
      </p>

  

      <form
  onSubmit={onSubmit}
  className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6"
>
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_template" value="table" />
        {/* IMPORTANT: replace YOUR_FORM_ID here too */}
        
        {/* Name */}
        <div className="flex flex-col gap-2 ">
          <label className="text-sm font-medium text-left text-foreground">
            Name
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={`rounded-lg border px-4 py-3 text-foreground  outline-none transition 
              ${errors.name ? "border-red-500/60" : "border-foreground"}
              focus:border-[rgb(var(--formtext))]/70`}
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-foreground text-left">
            Email
          </label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="example@gmail.com"
            className={`rounded-lg border px-4 py-3 bg-[rgb(var(--bg))]/60 text-foreground outline-none transition
              ${errors.email ? "border-red-500/60" : "border-foreground"}
              focus:border-[rgb(var(--color-primary))]/70`}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-foreground text-left">
            Phone Number
          </label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="10 digit phone number"
            maxLength={10}
            className={`rounded-lg border px-4 py-3 bg-[rgb(var(--bg))]/60 text-foreground outline-none transition
              ${errors.phone ? "border-red-500/60" : "border-foreground"}
              focus:border-[rgb(var(--color-primary))]/70`}
          />
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone}</p>
          )}
        </div>

        {/* Project Details */}
        <div className="flex flex-col gap-2 lg:col-span-2">
          <label className="text-sm font-medium text-foreground text-left">
            Description
          </label>
          <textarea
            name="details"
            value={form.details}
            onChange={handleChange}
            placeholder="Describe why do you want to contact me..."
            rows={5}
            className={`rounded-lg border px-4 py-3 
   text-foreground 
  outline-none transition resize-none
  ${errors.details ? "border-red-500/60" : "border-foreground"}
  focus:border-[rgb(var(--color-primary))]/70`}
          />
          {errors.details ? (
            <p className="text-sm text-red-500">{errors.details}</p>
          ) : (
            <p className="text-sm text-[rgb(var(--text))]/50 text-left">
              Minimum 10 characters
            </p>
          )}
        </div>

        {/* Submit */}
        <div className="lg:col-span-2 flex flex-col gap-3 items-start">



          <button  
  className="cosmic-button"
  disabled={submittedOnce}
>
  {submittedOnce ? "Submitting..." : "Submit Request"}
</button>

{showSuccess && (
  <p className="text-sm font-medium text-green-600">
    Your message has been sent successfully. We’ll contact you shortly.
  </p>
)}


          

        </div>
      </form>
    </div>
  </div>
</section>


        <div className="items-center">
            <div className="space-y-8">
                <h3 className="text-2xl font-semibold mb-6"> Contact Information
                    
                </h3>

                
                    <div className="space-y-6 text-center">

  {/* Phone */}
  <div className="flex flex-col items-center gap-1">
    <div className="flex items-center gap-2 text-sm text-foreground font-semibold">
      <Phone className="h-5 w-5" />
      <span>Phone</span>
    </div>
    <a
      href="tel:+917012543051"
      className="text-base font-medium hover:text-primary transition-colors"
    >
      +91 70125 43051
    </a>
  </div>

  {/* Email */}
  <div className="flex flex-col items-center gap-1">
    <div className="flex items-center gap-2 text-sm text-foreground font-semibold" >
      <Mail className="h-5 w-5 bg-" />
      <span>Email</span>
    </div>
    <a
      href="mailto:abhinandg2003@gmail.com"
      className="text-base font-medium hover:text-primary transition-colors"
    >
      abhinandg2003@gmail.com
    </a>
  </div>

</div>


                <div className="">
                    <h4 className="mb-4">
                        Connect With Me
                    </h4>
                    <div className="flex space-x-4 justify-center">
                        <a href="http://linkedin.com/in/abhinandg07"
                        target="_blank"
                        className="hover:text-primary">
                            <Linkedin />
                        </a>

                        <a href="https://www.instagram.com/pickaxeoo?igsh=MXJmZWdzOGo3dTF6Yw=="
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