import React, { useState } from "react";

export default function Hook1() {
  const [item, setItem] = useState(1);
  const inin = () => setItem(item + 1);
  const outout = () => setItem(item - 1);

  return (
    <div className="hook">
      <h1>Hello{item}</h1>
      <button onClick={inin}>in</button>
      <button onClick={outout}>out</button>
    </div>
  );
}
