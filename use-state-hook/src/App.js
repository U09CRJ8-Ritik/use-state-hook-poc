import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [showName, setShowName] = useState(false);
  const [counter, setCounter] = useState(0);

  const changeName = () => {
    setName('Ritik')
    setShowName(!showName);
  }


  return (
    <div className="App">
      <h1>Hello {showName ? name : ""}</h1>
      <button onClick={changeName}>Change Name</button>

      <hr />
      <h1>Counter App</h1>
      <button style={{ margin: '8px' }} onClick={() => setCounter(counter - 1)}>-</button>
      {counter}
      <button style={{ margin: '8px' }} onClick={() => setCounter(counter + 1)}>+</button>

    </div>
  );
}

export default App;
