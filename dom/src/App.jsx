import { useState } from 'react';

function App() {
  const [radius, setRadius] = useState('');
  const [area, setArea] = useState(null);
  const PI = 22 / 7;

  const calculateArea = () => {
    const r = Number(radius);
    const a = PI * r * r;
    setArea(a);
  };
  return (
    <div>
      <h1>Enter the Radius</h1>
      <label>Radius: </label>
      <input
        type="text"
        value={radius}
        onChange={(e) => setRadius(e.target.value)}
      />
      <br />
      <br />
      <button onClick={calculateArea}>Submit</button>
      <p>Area is {area}</p>
    </div>
  );
}

export default App;
