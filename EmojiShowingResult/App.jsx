import Emoji from "./Emoji";

const rollTheDice = (range) => {
  return Math.floor(Math.random() * range) + 1
}

function App() {
  const random1 = rollTheDice(6)
  const random2 = rollTheDice(6)
  const result = (random1 == random2);
  return (
    <>
      <Emoji Won={result}/>
    </>
  );
}

export default App;
