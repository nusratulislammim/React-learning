import React from "react";

function One({ name }) {
  const time = new Date().toLocaleTimeString();
  return (
    <div>
      <h3>Hello {name}!</h3>
      <p>Welcome to React JSX learning.</p>
      <p>Current time: {time}</p>
    </div>
  );
}

export default One;
