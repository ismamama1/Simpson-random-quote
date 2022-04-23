import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import QuoteCard from "./components/QuoteCard";

function App() {
  const [simpson, setSimpson] = useState([]);
  console.log(simpson);

  const randomQuote = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((res) => setSimpson(res.data[0]));
  };

  useEffect(() => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((res) => setSimpson(res.data[0]));
  }, []);

  return (
    <div>
      <QuoteCard simpson={simpson} />
      <button className="QuoteButton" onClick={() => randomQuote()}>
        Random quote
      </button>
    </div>
  );
}

export default App;
