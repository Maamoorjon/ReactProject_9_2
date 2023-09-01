import "./styles.css";
import { useState } from "react";

export default function App() {
  const personObj = { name: "Tom", age: 24 };
  const [person, setPerson] = useState(personObj);
  const changeName = (e) => {
    setPerson({ ...person, name: e.target.value });
  };
  const changeAge = (e) => {
    setPerson({ ...person, age: e.target.value });
  };
  const reset = () => {
    setPerson({ name: "", age: "" });
  };
  return (
    <div className="App">
      <h3>Name: {person.name}</h3>
      <h3>Age: {person.age}</h3>
      <div>
        <input type="text" value={person.name} onChange={changeName} />
      </div>
      <div>
        <input type="number" value={person.age} onChange={changeAge} />
      </div>
      <button onClick={reset}>リセット</button>
    </div>
  );
}
