import { useRouter, usePathname } from "next/navigation";

// Navbar2 is DESKTOP ONLY — on mobile, navigation is handled by the top Navbar.js
const Navbar2 = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = (id) => {
    if (pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      router.push(`/?to=${id}`);
    }
  };

  return (
    <div className="relative z-20 hidden lg:block">
      <nav className="flex justify-end items-center p-4">
        <div className="flex space-x-6 text-white text-sm">
          <button
            onClick={() => handleNavClick("hero")}
            className="hover:text-maincolor transition-colors text-xs tracking-wide cursor-pointer hover-target"
          >
            HOME
          </button>
          <button
            onClick={() => handleNavClick("education")}
            className="hover:text-maincolor transition-colors text-xs tracking-wide hover-target"
          >
            EXPERIENCE &amp; EDUCATION
          </button>
          <button
            onClick={() => handleNavClick("skills")}
            className="hover:text-maincolor transition-colors text-xs tracking-wide hover-target"
          >
            SKILLS
          </button>
          <button
            onClick={() => handleNavClick("projects")}
            className="hover:text-maincolor transition-colors text-xs tracking-wide hover-target"
          >
            PROJECTS
          </button>
          <button
            onClick={() => handleNavClick("contact")}
            className="hover:text-maincolor transition-colors text-xs tracking-wide hover-target"
          >
            CONTACT
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar2;
