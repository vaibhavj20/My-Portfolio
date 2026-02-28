"use client";
import { Reveal } from "./Reveal";

const Skills = () => {
  const CategoriesLeft = [
    {
      category: "Languages",
      skills: ["C++", "HTML5", "CSS", "JavaScript", "Shell Scripting"],
    },
    {
      category: "Platforms & Version Control",
      skills: ["Git", "Visual Studio Code"],
    },
  ];

  const CategoriesRight = [
    {
      category: "Frontend & Web",
      skills: ["Next.js", "ReactJS", "Bootstrap", "Tailwind CSS", "Restful APIS"],
    },
    {
      category: "DevOps & CI/CD",
      skills: [
        "Jenkins",
        "Git",
        "ArgoCD",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Ansible",
        "CI/CD Pipelines",
      ],
    },
    {
      category: "Cloud & Monitoring",
      skills: [
        "AWS (EC2, S3, RDS, Lambda, EKS)",
        "Prometheus",
        "Grafana",
        "SonarQube",
      ],
    },
  ];

  return (
    <>
      <div id="skills" className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Background Glow */}
            <div className="absolute top-1/4 -left-10 w-40 h-40 bg-maincolor opacity-5 rounded-full blur-[100px]" />

            {/* Left Column: Heading + Some Categories */}
            <div className="lg:w-1/3">
              <div className="mb-12 relative">
                {/* Heading Glow */}
                <div className="absolute top-6 left-10 w-20 h-20 bg-maincolor opacity-20 rounded-full blur-2xl z-0" />

                <Reveal width="100%">
                  <h2 className="relative z-10 text-xs text-white/80 uppercase tracking-[0.2em] mb-5">
                    MY SKILLS
                  </h2>
                </Reveal>
                <Reveal width="100%">
                  <div className="relative z-10 text-2xl lg:text-4xl font-medium">
                    <span className="mb-2 block">Skills &</span>
                    <span className="text-maincolor">Proficiency</span>
                  </div>
                </Reveal>
              </div>

              {/* Technical Tiles on the left - Aligned with DevOps & CI/CD on the right */}
              <div className="space-y-12 lg:pt-[56px]">
                {CategoriesLeft.map((group, idx) => (
                  <Reveal key={idx} width="100%" delay={0.1 * idx}>
                    <div className="group">
                      <h3 className="text-sm text-white/80 uppercase tracking-[0.3em] font-bold mb-6 flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-maincolor/40"></span>
                        {group.category}
                      </h3>
                      <div className="flex flex-wrap gap-4">
                        {group.skills.map((skill, sIdx) => (
                          <SkillTile key={sIdx} name={skill} />
                        ))}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Right Column: Other Categories */}
            <div className="lg:w-2/3">
              <div className="space-y-16">
                {CategoriesRight.map((group, idx) => (
                  <Reveal key={idx} width="100%" delay={0.1 * idx}>
                    <div className="group">
                      <h3 className="text-sm text-white/80 uppercase tracking-[0.3em] font-bold mb-6 flex items-center gap-3">
                        <span className="w-10 h-[1px] bg-white/20 group-hover:bg-maincolor transition-all duration-500"></span>
                        {group.category}
                      </h3>
                      <div className="flex flex-wrap gap-5">
                        {group.skills.map((skill, sIdx) => (
                          <SkillTile key={sIdx} name={skill} />
                        ))}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HR line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-t border-white/5 my-8 sm:my-16" />
      </div>
    </>
  );
};

/* Reusable Technical Tile Component */
const SkillTile = ({ name }) => {
  return (
    <div className="relative group cursor-default">
      {/* The decorative box */}
      <div className="relative px-5 py-3 border border-white/10 group-hover:border-maincolor/50 transition-colors duration-300">

        {/* Text */}
        <span className="text-white/70 group-hover:text-white text-sm sm:text-base font-medium tracking-wide transition-colors duration-300">
          {name}
        </span>
      </div>
    </div>
  );
};

export default Skills;
