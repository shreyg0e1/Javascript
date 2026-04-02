// //we have to perform many things:
// // input numbers to display
// // accessing buttons
// // C-> to clear all
// // Del-> delete the last character
// // +/- -> change the sign (toggle)
// // +,-,/,* -> operation(additon,subtraction,divide,multiplication)
// // % -> divide by 100
// // = -> calculation


// // ------------------------ Bonus Features:-----------------------------
                     
// // 1. decimal should not occur more then once like 2..3 or 3.2.1
// // 2. any operator should'nt come like ++,+- like 2 operators at once
// // 3. multiplication of negative numbers(-3 X -3= 9)

// // ---------------------------------------------------------------------

// This gets the display box (where numbers show up)
const display = document.getElementById("display");

//  I'll save everything the user types here
let expression = "";

//  This remembers the last thing user typed (like number or operator)
let lastInput = "";

//  When you press any button
document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => {
    let value = button.innerText;  //  What is written on the button
    
    //  Clear Button
    if (value === "C") {
      expression = "";
      lastInput = "";
      display.innerText = "0";
      return; //  Stop here
    }

    //  Delete Last Character
    if (value === "Del") {
      expression = expression.slice(0, -1);
      lastInput = expression.slice(-1);
      display.innerText = expression || "0";
      return;
    }

    //  Toggle sign +/- (make number positive or negative)
    if (value === "+/-") {
      let parts = expression.match(/[-]?\d+\.?\d*$/); // ⛏️ Get last number
      if (parts) {
        let num = parts[0];
        let toggled = num.startsWith("-") ? num.slice(1) : "-" + num;
        // let toggled;
        // if (num.startsWith("-")) {
        //    toggled = num.slice(1);  // Remove the "-" if present
        //     } else {
        //        toggled = "-" + num;     // Add "-" if not present
        //        }
        expression = expression.slice(0, -num.length) + toggled;
        display.innerText = expression;
      }
      return;
    }

    //  Only one dot per number (decimal)
    if (value === ".") {
      let lastNumber = expression.split(/[\+\-\*\/]/).pop();
      if (lastNumber.includes(".")) {
        return; //  Already has a dot
      }
    }

    //  Don’t allow two operators in a row
    const operators = ["+", "-", "*", "/", "%", "X"];
    if (operators.includes(value)) {
      if (expression === "" && value !== "-") {
        return; //  Don't start with +, *, /
      }
      if (operators.includes(lastInput)) {
        return; //  Two operators not allowed
      }
    }

    //  Special case for %
    if (value === "%") {
      let lastNumMatch = expression.match(/(\d+\.?\d*)$/);
      if (lastNumMatch) {
        let num = parseFloat(lastNumMatch[0]);
        let converted = num / 100;
        expression = expression.slice(0, -lastNumMatch[0].length) + converted;
        display.innerText = expression;
        lastInput = converted.toString().slice(-1);
      }
      return;
    }

    //  When = is pressed, we calculate
    if (value === "=") {
      try {
        let result = eval(expression.replace(/X/g, '*')); //  Replace X with *
        if (result.toString().includes(".")) {
          result = parseFloat(result).toFixed(10); //  Only 10 digits after dot
        }
        display.innerText = result;
        expression = result.toString(); // Save result for next calc
        lastInput = expression.slice(-1);
      } catch {
        display.innerText = "Error";
        expression = "";
        lastInput = "";
      }
      return;
    }

    //  Everything else (number, operator) just gets added
    // expression += value === "X" ? "*" : value; //  Replace X with *
    if (value === "X") {
  expression += "*";  // If user clicked "X", add "*" instead
} else {
  expression += value;  // Otherwise, just add the clicked value
}

    lastInput = value;
    display.innerText = expression;
  });
});
































