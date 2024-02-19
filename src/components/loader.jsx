import { useEffect } from "react";

const LoadingAnimation = () => {
  useEffect(() => {
    const scatteredText = document.querySelector(".scattered-text");
    const text = scatteredText.innerText;
    scatteredText.innerHTML = "";
    for (let i = 0; i < text.length; i++) {
      const span = document.createElement("span");
      span.innerText = text[i];
      span.style.animationDelay = `${Math.random() * 1}s`;
      scatteredText.appendChild(span);
    }
  }, []);

  return (
    <div className="loading-animation">
      <div className="scattered-text"> Loading... </div>{" "}
    </div>
  );
};

export default LoadingAnimation;
