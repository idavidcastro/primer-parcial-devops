import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>¡Hola Mundo!</h1>
      <p>Iván David Castro Blanco</p>
    </>
  );
}

export default App;
