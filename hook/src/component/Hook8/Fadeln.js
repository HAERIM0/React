import React, { useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);

  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }

  return { ref: element, style: { opacity: 0 } };
};

export default function () {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInp = useFadeIn(5, 10);
  return (
    <div>
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInp}>어쩔티비</p>
    </div>
  );
}
