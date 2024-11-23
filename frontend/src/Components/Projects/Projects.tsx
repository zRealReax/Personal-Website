"use client";
import React, { useEffect, useRef, useState } from "react";
import "./Projects.scss";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cellsRef = useRef<HTMLDivElement[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  function updateGallery() {
    if (!containerRef.current) return;
    containerRef.current.style.transform = `translateX(${
      -currentIndex * 85
    }vw)`;
  }

  function moveLeft() {
    setCurrentIndex(
      (currentIndex - 1 + cellsRef.current.length) % cellsRef.current.length
    );
  }

  function moveRight() {
    setCurrentIndex((currentIndex + 1) % cellsRef.current.length);
  }

  useEffect(() => {
    updateGallery();
  }, [currentIndex, updateGallery]);

  return (
    <section className="carousel" id="projects">
      <div className="carousel-container" ref={containerRef}>
        <div className="carousel-empty"></div>
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className="carousel-card"
            ref={(el) => {
              if (el) cellsRef.current[index] = el;
            }}
          ></div>
        ))}
      </div>
      <div className="carousel-controller">
        <div className="carousel-controller-indicator">
          {[0, 1, 2, 3].map((index) => (
            <button
              key={index}
              className={`carousel-controller-indicator-dot ${
                index === currentIndex
                  ? "carousel-controller-indicator-dot-active"
                  : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
        <button
          className="carousel-controller-arrow carousel-controller-left"
          onClick={() => moveLeft()}
        >
          <img src="/arrow_left.svg" alt="" />
        </button>
        <button
          className="carousel-controller-arrow carousel-controller-right"
          onClick={() => moveRight()}
        >
          <img src="/arrow_right.svg" alt="" />
        </button>
      </div>
    </section>
  );
}
