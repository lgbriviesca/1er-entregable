import React, {useState} from "react";
import Quotes from "../quotes.json";
import Button from "./Button.js"

const random = () => Math.floor(Math.random() * Quotes.length)

const Quote = () => {
const [quote, setQuote] = useState(Quotes[random()]); 

const colors = ["rgb(255, 226, 231)", "rgb(209, 241, 241)", "rgb(217, 255, 217)", "rgb(255, 255, 210)", "rgb(255, 206, 255)", "rgb(228, 228, 228)"];
const changeColor = colors[Math.floor(Math.random() * 5)]

const changeQuote = () => {
  setQuote(Quotes[random()]);
}; 

document.body.style = `background: ${changeColor}` 

      return(
        <div className="QuoteBox"  style={{ color:changeColor}}>
           <div className="txt"> <h2 ><i id="i" className="fa-solid fa-quote-left"></i> {quote.quote}</h2>
            <p> {quote.author} </p> 
            </div>
            <Button changeQuote={changeQuote} changeColor={changeColor}/>
        </div>
      );
    };
  
    export default Quote;