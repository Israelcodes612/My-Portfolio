import { motion } from "motion/react";
import { Code2, Wrench, Rocket, GitBranch } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Web Development",
      color: "from-purple-600 to-pink-600",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 85 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      icon: GitBranch,
      title: "Tools & Version Control",
      color: "from-blue-600 to-purple-600",
      skills: [
        { name: "Git", level: 75 },
        { name: "GitHub", level: 80 },
      ],
    },
    {
      icon: Wrench,
      title: "Technical Skills",
      color: "from-pink-600 to-red-600",
      skills: [
        { name: "Hardware Troubleshooting", level: 85 },
        { name: "OS Installation", level: 90 },
      ],
    },
    {
      icon: Rocket,
      title: "Currently Learning",
      color: "from-green-600 to-blue-600",
      skills: [
        { name: "Back-end Development", level: 40 },
        { name: "Full-stack Development", level: 35 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4">
            My <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.05, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              {/* Category header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl">{category.title}</h3>
              </div>

              {/* Skills list */}
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: skillIndex * 0.05, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.3 }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech stack marquee */}
        <div className="mt-20">
          <h3 className="text-center text-xl mb-8 text-muted-foreground">
            Technologies I Work With
          </h3>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee space-x-8">
              {[
                "HTML5",
                "CSS3",
                "JavaScript",
                "React",
                "Tailwind CSS",
                "Git",
                "GitHub",
                "Responsive Design",
                "UI/UX",
                "HTML5",
                "CSS3",
                "JavaScript",
                "React",
                "Tailwind CSS",
              ].map((tech, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-3 rounded-full border border-purple-200"
                >
                  <span className="text-sm whitespace-nowrap">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}