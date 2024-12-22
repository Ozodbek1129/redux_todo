import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../slices/counterSlice";

export default function Counter() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment(), 1)}>Increment</button>
    </div>
  );
}
