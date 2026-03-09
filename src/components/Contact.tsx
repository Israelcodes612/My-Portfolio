import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, Linkedin, Instagram, Github, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { motion } from "motion/react";
import { useState, FormEvent } from "react";
import { toast } from "sonner";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using Web3Forms - you'll need to get your access key from https://web3forms.com
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "6a479402-a728-4154-a51a-ec3c46061e85",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to: "amosisrael683@gmail.com",
          subject: `New Portfolio Contact from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully!", {
          description: "Thank you! I'll get back to you soon.",
          icon: <CheckCircle2 className="w-5 h-5" />,
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast.error("Failed to send message", {
        description: "Please try again or email me directly.",
        icon: <AlertCircle className="w-5 h-5" />,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "Amosisrael683@gmail.com",
      href: "mailto:Amosisrael683@gmail.com",
      color: "hover:text-red-600",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "07043960110",
      href: "tel:07043960110",
      color: "hover:text-green-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/israel-olasupo",
      color: "hover:text-blue-600",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@israel.amos.986",
      href: "https://www.instagram.com/israel.amos.986?igsh=NWhzNjJkZGVzYW81",
      color: "hover:text-pink-600",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Israelcodes612",
      href: "https://github.com/Israelcodes612",
      color: "hover:text-gray-600",
    },
  ];

  const techLogos = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind",
    "Git",
    "GitHub",
    "Responsive",
    "UI/UX",
    "Node.js",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind",
  ];

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4">
            Get In <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl mb-6">Send Me a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm mb-2">
                  Your Name
                </label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe" 
                  className="w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm mb-2">
                  Your Email
                </label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com" 
                  className="w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm mb-2">
                  Message
                </label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..." 
                  rows={6}
                  className="w-full resize-none"
                  required
                />
              </div>
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </motion.div>

          {/* Right - Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
              <h3 className="text-2xl mb-6">Contact Information</h3>
              <div className="space-y-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 group ${link.color} transition-colors`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center group-hover:shadow-lg transition-shadow">
                      <link.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{link.label}</p>
                      <p className="group-hover:underline">{link.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick info card */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <p>Currently Available for Work</p>
              </div>
              <p className="text-sm text-muted-foreground">
                I'm open to freelance projects, full-time opportunities, and collaborative ventures. 
                Let's create something amazing together!
              </p>
            </div>
          </motion.div>
        </div>

        {/* Marquee of tech logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="mt-20"
        >
          <h3 className="text-center text-xl mb-8 text-muted-foreground">
            Connect With Me On
          </h3>
          <div className="relative overflow-hidden bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 rounded-2xl py-8">
            <div className="flex animate-marquee-reverse space-x-12">
              {techLogos.map((tech, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-white px-8 py-4 rounded-xl shadow-md border border-gray-200"
                >
                  <span className="whitespace-nowrap">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}