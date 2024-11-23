"use client";

import "./BackToTop.scss";

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="back_to_top"
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <img src="/arrow_up.svg" className="arrow_up" />
    </button>
  );
};

export default BackToTop;
