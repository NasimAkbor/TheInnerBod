import { useState, useEffect } from "react";

function Home() {
  const text = ["Health ", "Wellness ", "Relaxation", "Nutrition"];
  const [word, setWord] = useState("");

  let index = 0;
  useEffect(() => {
    const interval = setInterval(() => {
      setWord(text[index++ % text.length]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      Life is about
      <div className="container">
        <div className="typed-out">{word}</div>
      </div>
    </div>
  );
}

export default Home;
