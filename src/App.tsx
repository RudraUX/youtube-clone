import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div className='App'>
      {count}
      <button onClick={increment}>Add</button>
    </div>
  );
}

export default App;
