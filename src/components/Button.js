  
  const Button = ({changeQuote, changeColor}) =>{
    return(
     <button onClick={changeQuote} style={{backgroundColor: changeColor }}> <i className="fa-solid fa-angles-right"></i></button>
     )
  }

  export default Button;
