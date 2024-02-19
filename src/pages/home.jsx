import Header from "../components/Header";
import NavBar from "../components/NavBar";
// import sound effect

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="main">
        <NavBar />
        <div className="description">
          <h1>Hello ... </h1>
          <span className="typing-demo">I am Amer from Iraq.</span>
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
