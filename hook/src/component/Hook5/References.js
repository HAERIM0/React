import React, { useRef } from "react";

export default function References() {
  const input = useRef();
  setTimeout(() => input.current.focus(), 5000);
  return (
    <div>
      <div>Hi</div>
      <input ref={input} placeholder="la" />
    </div>
  );
}
