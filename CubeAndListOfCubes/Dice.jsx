import { useState } from "react";

function Dice({range}) {

  const [number, numberChange ] = useState(1);

  const throwDice = () => {
    numberChange(Math.floor(range*Math.random())+1)
  }

  return (
    <>
        <div>
            Element from range 1 to {range} is :{number}
        </div>
        <button onClick={throwDice}>Click me!</button>
    </>
  )
}

export default Dice;
