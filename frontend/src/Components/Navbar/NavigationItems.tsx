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
      const scrollPosition = window.scrollY + window.innerHeight;
      const bottomPosition = document.body.offsetHeight;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;

        if (sectionTop <= 150 && sectionTop > -section.clientHeight + 150) {
          currentIndex = index;
        }
        if (scrollPosition >= bottomPosition - 1) currentIndex = index;
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

    window.addEventListener("scroll", handleScroll, { passive: true });

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
        onClick={() => (window.location.hash = "home")}
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
        onClick={() => (window.location.hash = "about")}
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
        onClick={() => (window.location.hash = "skills")}
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
        onClick={() => (window.location.hash = "projects")}
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
        onClick={() => (window.location.hash = "contact")}
      />
      <label className="text" htmlFor="contact-i">
        Contact
      </label>

      <div className="selector"></div>
    </div>
  );
}
