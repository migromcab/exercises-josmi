import { useState } from "react";
import "./App.scss";

/*
 
Si escribo un símbolo lo pinto
Si escribo otro símbolo sin escribir un número => lo reemplazo
Si escribo un númeor después del símbolo => Se pinta el número seguido del número
Si le doy a otro símbolo cuando hay un símbolo num => resolver y pinto solución + símbolo que le he dado
Si tengo num símbolo num y le doy a igual => se realiza la operación y pinta el resultado
Si tengo num símbolo y le doy a igual => se hace la operación como si los dos números fueran el mismo.
Si tengo num símbolo y le doy a la C => se resetea todo 

*/
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
  const [operation, setOperation] = useState();

  console.log("render", { value, operation });

  const handleClick = (actionClicked) => {

    

    if (actionClicked === "C") {
      setValue("0");
      return;
    }

    if (actionClicked === "+-") {
      setValue((value * -1).toString());
      return;
    }

    if (actionClicked === "%") {
      setValue((value / 100).toString());
      return;
    }

    if (actionClicked === "." && !value.includes(".")) {
      setValue(value + actionClicked);
      return;
    }

    if (actionClicked === "=") {
      if (typeof operation === "undefined" || operation === "=") {
        return;
      }


      const calculate = () => {
        const numbers = value.split(operation);
      const num1 = Number(numbers[0]);
      const num2 = !numbers[1] ? num1 : Number(numbers[1]);


      let result;

      switch (operation) {
        case "X":
          result = num1 * num2;
          break;

        case "+":
          result = num1 + num2;
          break;

        case "-":
          result = num1 - num2;
          break;

        default:
          result = num1 / num2;
          break;
      }

      }
      setValue(result.toString())
    }

    if (typeof actionClicked !== "number") {
      const lastChar = value.slice(-1);
      setOperation(actionClicked);

      if (lastChar === operation) {
        const newValue = value.replace(lastChar, actionClicked);
        setValue(newValue);
        return;
      }

      setValue(value + actionClicked);

      return;
    }

    if (value === "0") {
      setValue(actionClicked.toString());
    } else {
      setValue(value + actionClicked);
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
