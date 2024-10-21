"use client";
import { useEffect, useState } from "react";

export default function NavigationItems() {
  const [activeSection, setActiveSection] = useState("home");

  const handleRadioChange = (sectionId: string) => {
    window.location.hash = sectionId;
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentIndex: number | null = null;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;

        // Adjust the threshold to be more generous
        if (
          sectionTop <= 150 && // Adjust this value as needed
          sectionTop > -section.clientHeight + 150
        ) {
          currentIndex = index;
        }
      });

      if (currentIndex !== null) {
        const currentSection = sections[currentIndex].id;
        if (currentSection) {
          setActiveSection(currentSection.toLowerCase());
          const radioInput = document.querySelector(
            `input[value="${currentSection}"]`
          ) as HTMLInputElement;

          if (radioInput) {
            radioInput.checked = true;
          }
        }
      }
    };

    // Add event listener with passive option for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navigation-items">
      <input
        type="radio"
        id="home-i"
        name="navigation"
        value="home"
        defaultChecked={activeSection === "home"}
        onChange={() => handleRadioChange("home")}
      />
      <label className="text" htmlFor="home-i">
        Home
      </label>

      <input
        type="radio"
        id="about-i"
        name="navigation"
        value="about"
        defaultChecked={activeSection === "about"}
        onChange={() => handleRadioChange("about")}
      />
      <label className="text" htmlFor="about-i">
        About Me
      </label>

      <input
        type="radio"
        id="skills-i"
        name="navigation"
        value="skills"
        defaultChecked={activeSection === "skills"}
        onChange={() => handleRadioChange("skills")}
      />
      <label className="text" htmlFor="skills-i">
        Skills
      </label>

      <input
        type="radio"
        id="projects-i"
        name="navigation"
        value="projects"
        defaultChecked={activeSection === "projects"}
        onChange={() => handleRadioChange("projects")}
      />
      <label className="text" htmlFor="projects-i">
        Projects
      </label>

      <input
        type="radio"
        id="contact-i"
        name="navigation"
        value="contact"
        defaultChecked={activeSection === "contact"}
        onChange={() => handleRadioChange("contact")}
      />
      <label className="text" htmlFor="contact-i">
        Contact
      </label>

      <div className="selector"></div>
    </div>
  );
}
