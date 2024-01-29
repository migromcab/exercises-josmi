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

/*
 
Si escribo un símbolo lo pinto
Si escribo otro símbolo sin escribir un número => lo reemplazo
Si escribo un númeor después del símbolo => Se pinta el número seguido del número
Si le doy a otro símbolo cuando hay un símbolo num => resolver y pinto solución + símbolo que le he dado
Si tengo num símbolo num y le doy a igual => se realiza la operación y pinta el resultado
Si tengo num símbolo y le doy a igual => se hace la operación como si los dos números fueran el mismo.
Si tengo num símbolo y le doy a la C => se resetea todo 

*/

function App() {
  const [value, setValue] = useState("0");
  const [operation, setOperation] = useState();

  const handleClick = (newValue) => {
    if (newValue === "%") {
      setValue((value / 100).toString());
    }

    if (newValue === "+-") {
      setValue((value * -1).toString());
      return;
    }

    if (newValue === "C") {
      setValue("0");
      return;
    }

    if (newValue === "." && !value.includes(".")) {
      setValue(value + newValue);
      return;
    }

    if (typeof newValue !== "number") {
      const lastChar = value.slice(-1);
      setOperation(newValue);

      if (("/", "+", "-", "X").includes(lastChar)) {
        const Valuenew = value.replace(lastChar, newValue);
        setValue(Valuenew);
        return;
      }

      setValue(value + newValue);
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
