"use client";

import "./Technologies.scss";

interface Technology {
  id: string;
  name: string;
}

const technologies: Technology[] = [
  { id: "nextjs", name: "Next.js" },
  { id: "reactjs", name: "React.js" },
  { id: "expressjs", name: "Express.js" },
  { id: "css", name: "CSS" },
  { id: "html", name: "HTML" },
  { id: "java", name: "Java" },
  { id: "c", name: "C" },
  { id: "framer", name: "Framer" },
  { id: "figma", name: "Figma" },
];

const TechnologyScroller = () => {
  const duplicatedTechnologies = [...technologies, ...technologies];

  return (
    <section id="skills" className="technology-scroller">
      <div className="scroller-container">
        <ul className="scroller-list">
          {duplicatedTechnologies.map((tech, index) => (
            <li key={`${tech.id}-${index}`} className="scroller-list-item">
              {tech.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TechnologyScroller;

// import { useRef } from "react";

// addAnimation();

// function addAnimation() {
//   const scrollerInner = listRef.current;
//   if (!scrollerInner) return;
//   const scrollerContent = Array.from(scrollerInner.children);

//   scrollerContent.forEach((item) => {
//     const duplicatedItem = item.cloneNode(true);
//     scrollerInner.appendChild(duplicatedItem);
//   });
// }
