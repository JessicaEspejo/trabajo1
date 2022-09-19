import { useState } from "react";
import "./App.css";
import QuoteBox from "./component/QuoteBox";
import quotes from "./json/quotes.json";
import color  from "./utils/color";

function App() {
  //ESTA FUNCION CAÑLCULA UN INDECE RAMDIKN 
  const getIndexRandom = (arr) => Math.floor(Math.random() * arr.length);
// AQUI SE EXTRAE EL ELEMENTO SEGUND EL INDICE RANDOM 
  const firstQuote = quotes[getIndexRandom(quotes)];
  const firstColor = color[getIndexRandom(color)];


  const [randomQuote, setRandomQuote] = useState(firstQuote);
  const [randomColor, setRandomColor] = useState(firstColor);

  const backgroundObject ={
    backgroundColor:randomColor
  }
// ESTA FUNCION CALUCLA UN COLOR TANTO QUOTE COMO RANDOM TOMA TODO Y LA EJEUTA DE FIST 
  const getRandomAll =() => {
    setRandomQuote(quotes[getIndexRandom(quotes)]);
    setRandomColor(color[getIndexRandom(color)]);
  }
  return (
    <div style={backgroundObject} className="App">
      <QuoteBox 
      randomQuote={randomQuote} 
      randomColor={randomColor}
      getRandomAll={getRandomAll}
      />
    </div>
  );
}

export default App;
