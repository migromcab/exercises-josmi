import { useState } from "react";
import "./App.scss";

const actions = [
  "C",
  "+-",
  "%",
  "/",
  7,
  8,
  9,
  "X",
  4,
  5,
  6,
  "-",
  1,
  2,
  3,
  "+",
  0,
  ".",
  "=",
];

function App() {
  const [value, setValue] = useState("0");

  const handleClick = (newValue) => {
    if (newValue === "C") {
      setValue(value === "0");
      return;
    }

    if (newValue === "." && !value.includes(".")) {
      setValue(value + newValue);
      return;
    }

    if (typeof newValue !== "number") {
      return;
    }
    if (value === "0") {
      setValue(newValue.toString());
    } else {
      setValue(value + newValue);
    }
  };

  return (
    <div className="calculator">
      <div className="calculator__result">{value}</div>
      <div className="calculator__actions">
        {actions.map((action) => (
          <button
            key={action}
            onClick={() => handleClick(action)}
            className="calculator__action"
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
