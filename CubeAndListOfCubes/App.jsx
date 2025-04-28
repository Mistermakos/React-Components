import { useState } from "react"
import Dice from "./Dice"

function App() {
  const [arr, setArr] = useState([6, 12, 24]);
  const [num, changeNum] = useState(0)

  const changeValue = () => {
    changeNum(parseInt(event.target.value, 10)); 
  }

  const addToArr = () => {
    setArr((prevArr) => [...prevArr, num]); // Dodanie num do arr
  };

  return (
    <>
      {arr.map((ele, index)=> {
        return <Dice key={index} range = {ele} />
      })}
      <div>
        <input type="number" value={num}  onChange={changeValue}/>
        <button onClick={addToArr}>Click to add the dice:</button>
      </div>
    </>
  )
}

export default App
