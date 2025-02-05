const Skills = () => {
  const skills = [
    "UI/UX Design",
    "Web Development",
    "React.js",
    "Next.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Figma",
    "Git",
    "Responsive Design",
    "TypeScript",
  ];

  return (
    <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left side heading */}
          <div className="lg:w-1/3 lg:mt-12">
            <h2 className="text-xs text-white/80 uppercase tracking-[0.2em] mb-5">
              MY SKILLS
            </h2>
            <div className="text-2xl lg:text-4xl font-medium">
              Building My
              <br />
              <span className="text-maincolor">Future</span> With Code
            </div>
          </div>

          {/* Right side skills grid */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-[#1d1d1d] p-4 rounded-lg border border-white/10 text-center"
                >
                  <span className="text-white text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
