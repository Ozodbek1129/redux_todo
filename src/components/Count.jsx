import React from "react";
import { useSelector } from "react-redux";

export default function Count() {
  const { count } = useSelector((state) => state.count);
  return (
    <div>
      <p>{count}</p>
    </div>
  );
}
