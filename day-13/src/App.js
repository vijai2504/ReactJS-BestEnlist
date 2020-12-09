import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const getValue = (e) => {
    alert(`You entered: ${value}`);
  }
  return (
    <div className="App">
      <form onSubmit={getValue}>
        <input type="text" id="value" name="value" 
        onChange={
          (e) => setValue(e.target.value)
        } 
        placeholder="Enter the value...." />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;