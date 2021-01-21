import { useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      throw new Error();
  }
}

function App() {
  // useReducer seems way better than Redux for most cases.
  // If you're reading this, can you give me a example when Redux > useReducer?
  // I would be very grateful 😊

  const [reducerCounter, dispatch] = useReducer(reducer, 0);

  // Settings of Redux are at index.js
  const reduxCounter = useSelector((counter) => counter);
  const reduxDispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          There's no visual difference here, this project was just a try out
          Redux + React-Redux <span style={{ color: "#00FFFF" }}>vs</span>{" "}
          useReducer 😊
        </p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p>Count (useReducer): {reducerCounter}</p>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            &nbsp;
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
            &nbsp;
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
          </div>

          <p>Count (Redux): {reduxCounter}</p>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            &nbsp;
            <button onClick={() => reduxDispatch({ type: "decrement" })}>
              -
            </button>
            &nbsp;
            <button onClick={() => reduxDispatch({ type: "increment" })}>
              +
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
