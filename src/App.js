import { useState } from "react";
import Button from "./Button";
import "./css/Counter.css";

function App() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <div>
        <h1>Hello React</h1>
        <h3>Welcome to React Learning Phase</h3>
        <Button name="Google" link="https://Google.com" />
        <Button name="Facebook" link="https://Facebook.com" />
        <Button name="Youtube" link="https://Youtube.com" />
        <Button name="twitter" link="https://twitter.com" />
        <Button name="Github" link="https://github.com" />
      </div>
      <div>
        <p className="result">{number}</p>
        <button onClick={()=>setNumber(number +1)} className="counter-button">Add</button>
        <button onClick={()=>setNumber(number-1)} className="counter-button">Less</button>
        <button onClick={()=>setNumber(0)} className="counter-button">Reset</button>
      </div>
    </div>
  );
}
// const App_ES6 = () => {
//   return (
//     <div>
//       <h1>Hello React</h1>
//       <h3>Welcome to React Learning Phase</h3>
//     </div>
//   );
// };

export default App;
