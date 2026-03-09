import { Button } from "./ui/button";
import { Download, Mail, Phone, Linkedin, Instagram, Briefcase, GraduationCap, Code2, Wrench } from "lucide-react";
import { motion } from "motion/react";

export function Resume() {

  return (
    <section id="resume" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl mb-4">
            My <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Resume</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive overview of my professional journey
          </p>
        </div>

        {/* Resume container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8"
        >
          {/* Header */}
          <div className="border-b border-gray-200 pb-6">
            <h1 className="text-3xl lg:text-4xl mb-4">Israel Olasupo</h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <a href="mailto:Amosisrael683@gmail.com" className="flex items-center gap-2 hover:text-purple-600 transition-colors">
                <Mail className="w-4 h-4" />
                Amosisrael683@gmail.com
              </a>
              <a href="tel:07043960110" className="flex items-center gap-2 hover:text-purple-600 transition-colors">
                <Phone className="w-4 h-4" />
                07043960110
              </a>
            </div>
            <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
              <a 
                href="https://www.linkedin.com/in/israel-olasupo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-purple-600 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn Profile
              </a>
              <a 
                href="https://www.instagram.com/israel.amos.986?igsh=NWhzNjJkZGVzYW81" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-purple-600 transition-colors"
              >
                <Instagram className="w-4 h-4" />
                @israel.amos.986
              </a>
            </div>
          </div>

          {/* Career Objective */}
          <div>
            <h3 className="text-xl mb-3 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full" />
              Career Objective
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Aspiring Full Stack Software Engineer with hands-on experience in front-end development, 
              a solid foundation in computer science, and growing expertise in both software and hardware 
              systems. Passionate about building scalable web applications and eager to contribute to 
              innovative projects while expanding full-stack development skills.
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xl mb-4 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-purple-600" />
              Education
            </h3>
            <div className="ml-8 space-y-2">
              <p>Bachelor of Science in Computer Science</p>
              <p className="text-muted-foreground">Atiba University, Oyo</p>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h3 className="text-xl mb-4 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-purple-600" />
              Work Experience
            </h3>
            <div className="ml-8 space-y-4">
              <div>
                <p className="mb-2">Front-End Developer</p>
                <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground">
                  <li>Developed user-friendly web interfaces with a focus on responsive design and performance.</li>
                  <li>Collaborated with colleagues on real-world projects, including an Instagram Reel Downloader application.</li>
                  <li>Gained experience in teamwork, version control, and problem-solving within development cycles.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xl mb-4 flex items-center gap-2">
              <Code2 className="w-6 h-6 text-purple-600" />
              Skills
            </h3>
            <div className="ml-8 space-y-4">
              <div>
                <p className="mb-2">Web Development</p>
                <p className="text-muted-foreground">Front-end development (HTML, CSS, JavaScript, React)</p>
              </div>
              <div>
                <p className="mb-2">Technical Skills</p>
                <p className="text-muted-foreground">Basic computer hardware troubleshooting, OS installation (Windows 7 to latest versions)</p>
              </div>
              <div>
                <p className="mb-2">Collaboration Tools</p>
                <p className="text-muted-foreground">Git/GitHub, teamwork on software projects</p>
              </div>
              <div>
                <p className="mb-2">Learning & Growth</p>
                <p className="text-muted-foreground">Currently expanding skills toward back-end and full-stack development</p>
              </div>
            </div>
          </div>

          {/* Projects & Extras */}
          <div>
            <h3 className="text-xl mb-4 flex items-center gap-2">
              <Wrench className="w-6 h-6 text-purple-600" />
              Projects & Extras
            </h3>
            <div className="ml-8">
              <p className="mb-2">Instagram Reel Downloader (in progress)</p>
              <p className="text-muted-foreground">
                Collaborating with peers to design and build a functional tool for media downloads.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Download button */}
        <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
         viewport={{ once: false, amount: 0.3 }}
         className="text-center mt-12"
        >
        <Button
         size="lg"
         asChild
         className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white group"
        >
         <a
          href="/Israel_Olasupo_Resume.pdf"
          download="Israel_Olasupo_Resume.pdf"
        >
        <Download className="mr-2 w-5 h-5 group-hover:animate-bounce" />
           Download Resume as PDF
         </a>
         </Button>

       <p className="text-sm text-muted-foreground mt-4">
        Click to download a PDF version of my resume
       </p>
       </motion.div>
      </div>
    </section>
  );
}