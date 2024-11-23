"use client";

import "./Technologies.scss";

import { useRef } from "react";

const Home = () => {
  const listRef = useRef<HTMLUListElement>(null);
  const items = [
    "Next.js",
    "React.js",
    "Express.js",
    "CSS",
    "HTML",
    "Java",
    "C",
    "Framer",
    "Figma",
  ];

  addAnimation();

  function addAnimation() {
    const scrollerInner = listRef.current;
    if (!scrollerInner) return;
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerInner.appendChild(duplicatedItem);
    });
  }

  return (
    <section id="skills" className="scroller">
      <ul className="scroller-list" ref={listRef}>
        {items.map((item) => (
          <li className="scoller-list-item">{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
