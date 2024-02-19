import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const scatteredText = document.querySelector(".scattered-text");
    const text = scatteredText.innerText;
    scatteredText.innerHTML = "";
    for (let i = 0; i < text.length; i++) {
      const span = document.createElement("span");
      span.innerText = text[i];
      span.style.animationDelay = `${Math.random() * 1}s`; // Adjust the delay as needed
      scatteredText.appendChild(span);
    }
  }, []);

  return (
    <div className="home">
      <div className="main">
        <div className="description">
          <h1>Hello ... </h1>
          <div className="scattered-text">I am Amer from Iraq.</div>
          <p>
            I have the ability to create beautiful and practical websites and
            web apps. Im a developer who cares about details. I make things look
            beautiful online.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
