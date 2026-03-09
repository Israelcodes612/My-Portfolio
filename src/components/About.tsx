import { Code2, Palette, Rocket, Users } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices.",
    },
    {
      icon: Palette,
      title: "Design Focused",
      description: "Creating intuitive user experiences with attention to detail and aesthetics.",
    },
    {
      icon: Rocket,
      title: "Fast Learner",
      description: "Currently expanding into back-end development and full-stack technologies.",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative approach to problem-solving and project development.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4">
            About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn more about my journey, skills, and what drives me as a developer
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl lg:text-3xl">
              Turning Ideas Into{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Reality
              </span>
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm Israel Olasupo, a passionate Front-End Developer and aspiring Full Stack Software Engineer 
              currently have my Bachelor's degree in Computer Science at Atiba University, Oyo.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              My journey in tech began with a curiosity for how things work, which led me to explore both 
              software and hardware systems. I specialize in creating responsive, user-friendly web interfaces 
              that not only look great but also provide seamless user experiences.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Beyond coding, I have hands-on experience with computer hardware troubleshooting and OS 
              installations. I'm currently expanding my skillset toward back-end development to become a 
              well-rounded full-stack developer.
            </p>
            <div className="pt-4">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-3 rounded-full">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm">Open to collaboration and new opportunities</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Highlights grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Education & Experience */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Education */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                <span className="text-white text-xl">🎓</span>
              </div>
              <h3 className="text-xl">Education</h3>
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground">Bachelor of Science in Computer Science</p>
              <p>Atiba University, Oyo</p>
              <p className="text-sm text-muted-foreground">Building a strong foundation in computer science principles and practical development skills</p>
            </div>
          </div>

          {/* Experience */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-white text-xl">💼</span>
              </div>
              <h3 className="text-xl">Experience</h3>
            </div>
            <div className="space-y-2">
              <p>Front-End Developer</p>
              <p className="text-sm text-muted-foreground">
                Developing responsive web interfaces and collaborating on real-world projects including 
                an Instagram Reel Downloader application
              </p>
              <p className="text-sm text-muted-foreground">
                Gained experience in teamwork, version control, and problem-solving within development cycles
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}