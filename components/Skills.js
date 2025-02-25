const Skills = () => {
  const skills = [
    {
      name: "C++",
      logo: "images/skills/s.png",
      level: "Expert",
      proficiency: 85,
    },
    {
      name: "HTML5",
      logo: "images/skills/html.png",
      level: "Expert",
      proficiency: 95,
    },
    {
      name: "CSS3",
      logo: "images/skills/css.png",
      level: "Advanced",
      proficiency: 90,
    },
    {
      name: "JavaScript",
      logo: "images/skills/javascript (1).png",
      level: "Expert",
      proficiency: 85,
    },
    {
      name: "React.js",
      logo: "images/skills/react.png",
      level: "Advanced",
      proficiency: 88,
    },
    {
      name: "Redux",
      logo: "images/skills/REDUX.png",
      level: "Advanced",
      proficiency: 85,
    },
    {
      name: "Next.js",
      logo: "images/skills/next.png",
      level: "Advanced",
      proficiency: 80,
    },
    {
      name: "Tailwind CSS",
      logo: "images/skills/tailwind.png",
      level: "Expert",
      proficiency: 85,
    },
    {
      name: "Bootstrap",
      logo: "images/skills/BOOTSTRAP.png",
      level: "Expert",
      proficiency: 85,
    },
    {
      name: "SQL",
      logo: "images/skills/sql.png",
      level: "Intermediate",
      proficiency: 70,
    },
    {
      name: "Git",
      logo: "images/skills/git.png",
      level: "Expert",
      proficiency: 85,
    },
  ];

  return (
    <>
      <div id="skills" className="relative z-10 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="absolute top-32 left-10 w-20 h-20 bg-maincolor opacity-20 rounded-full blur-2xl" />
            {/* Left side heading */}
            <div className="lg:w-1/3 lg:mt-12">
              <h2 className="text-xs text-white/80 uppercase tracking-[0.2em] mb-5">
                MY SKILLS
              </h2>
              {/* <div className="text-2xl lg:text-4xl font-medium">
              <span className="text-maincolor ">Skills</span> & Proficiency
            </div> */}
              <div className="text-2xl lg:text-4xl font-medium">
                <span className=" mb-2">Skills </span>&
                <span className=" text-maincolor "> Proficiency</span>
              </div>
            </div>

            {/* Right side skills grid */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skills.slice(0, 4).map((skill, index) => (
                  <div key={index}>
                    <div className="bg-[#1d1d1d] p-6 rounded-lg border border-white/10 relative overflow-hidden">
                      {/* proficiency indicator with rounded border */}
                      <div className="absolute top-4 right-4 text-[10px] border border-white/10  px-2 py-1 rounded-full text-white/80">
                        {skill.level}
                      </div>

                      {/* Skill content */}
                      <div className="flex items-center gap-8">
                        <img
                          src={skill.logo}
                          alt={`${skill.name} logo`}
                          className="w-10 h-10 object-contain"
                        />
                        <span className="text-white text-base">
                          {skill.name}
                        </span>
                      </div>

                      {/* Progress bar positioned at bottom of box */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] h-[2.5px] bg-white/20">
                        <div
                          className="h-full bg-white/90"
                          style={{ width: `${skill.proficiency}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom horizontal skills section - modified to 2 rows of 3 */}
          <div className="mt-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.slice(4, 7).map((skill, index) => (
                <div key={index + 4}>
                  <div className="bg-[#1d1d1d] p-6 rounded-lg border border-white/10 relative overflow-hidden">
                    {/* proficiency indicator with rounded border */}
                    <div className="absolute top-4 right-4 text-[10px] border border-white/10  px-2 py-1 rounded-full text-white/80">
                      {skill.level}
                    </div>

                    {/* Skill content */}
                    <div className="flex items-center gap-8">
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="w-10 h-10 object-contain"
                      />
                      <span className="text-white text-base">{skill.name}</span>
                    </div>

                    {/* Progress bar positioned at bottom of box */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] h-[2.5px] bg-white/20">
                      <div
                        className="h-full bg-white/90"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.slice(7).map((skill, index) => (
                <div key={index + 7}>
                  <div className="bg-[#1d1d1d] p-6 rounded-lg border border-white/10 relative overflow-hidden">
                    {/* proficiency indicator with rounded border */}
                    <div className="absolute top-4 right-4 text-[10px] border border-white/10  px-2 py-1 rounded-full text-white/80">
                      {skill.level}
                    </div>

                    {/* Skill content */}
                    <div className="flex items-center gap-8">
                      {/* <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-10 h-10 object-contain"
                    /> */}
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className={`object-contain ${
                          skill.name === "Next.js" ? "w-12 h-12" : "w-10 h-10"
                        }`}
                      />
                      <span className="text-white text-base">{skill.name}</span>
                    </div>

                    {/* Progress bar positioned at bottom of box */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] h-[2.5px] bg-white/20">
                      <div
                        className="h-full bg-white/90"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* HR line */}

      <hr className="border-t border-white/10 my-16" />
    </>
  );
};

export default Skills;
