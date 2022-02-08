import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Increment, Decrement, Reset } from "./Redux/action/action";
import CounterReducer from "./Redux/reducer/CounterReducer";

const App = () => {
  let value = useSelector(state => state);
  console.log(value);
  let dispatch = useDispatch();
  let { CounterReducer } = value;
  return (
    <div>
      <h1>{CounterReducer}</h1>
      <button onClick={() => dispatch(Increment())}>Increment</button>
      <button onClick={() => dispatch(Decrement())}>Decrement</button>
      <button onClick={() => dispatch(Reset())}>Reset</button>
    </div>
  );
};

export default App;
