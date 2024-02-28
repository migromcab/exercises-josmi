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

    case '/':
      result = num1 / num2;
      break;
    
  }
  setValue(result.toString())
  }

  const handleClick = (actionClicked) => {

    switch(actionClicked) {
      case "C": {
        setValue("0");
        return;
      }

      case "+-": {
        setValue((value * -1).toString());
        return;
      }
       
      case "%": {
        setValue((value / 100).toString());
        return;
      }
      
      case ".": {
     if (actionClicked === "." && !value.includes(".")) {
      setValue(value + actionClicked);
      return;
    }
      }

      case "=": {

        if (typeof operation === "undefined" || operation === "=") {
          
          return;
        }
        setOperation('=');
        
        calculate();
        return;
      }

      case '/':
      case 'X':
      case '-':
      case '+': {
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
        
      

      default : {
        if (value === "0") {
          setValue(actionClicked.toString());
        } else {
          setValue(value + actionClicked);
        }
      }
      
    }


     
    
    }

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
  
    
  };

  


export default App;
