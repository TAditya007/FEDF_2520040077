import { useState } from 'react';
import './App.css';

function App() {

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState(0);

  const calculateSum = () => {
    setSum(Number(num1) + Number(num2));
  };

  return (
    <div className="container">
      <h1>Sum of Two Numbers</h1>

      <input
        type="number"
        placeholder="Enter First Number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter Second Number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <button onClick={calculateSum}>
        Add
      </button>

      <h2>Result: {sum}</h2>
    </div>
  );
}

export default App;