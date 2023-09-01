const calc = function (expression) {
  expression = expression
    .replace(/ /g,"")
    .replace(/--/g, "+")
    .replaceAll("++", "+");
  const DM = "/*";
  const AS = "+-";
  const arithMagic = (num, mathOp) => {
    switch (mathOp) {
      case "/": return num[0] / num[1];
      case "*": return num[0] * num[1];
      case "+": return num[0] + num[1];
      case "-": return num[0] - num[1];
    };
  };

  const getClosingParIndex = (str, parIdx) => {
    let lvl = 0;
    for (let i = parIdx+1; i < str.length; i++) {
      if (str[i] === "(") {
        lvl++;
      } else if (str[i] === ")") {
        if (lvl === 0) return i;
        else lvl--;
      }
    }
    return null;
  }
  
  // handling parenthesis with a recursion
  let openParIndex = expression.indexOf("(");
  if (openParIndex >= 0) {
    let closingParIndex = getClosingParIndex(expression, openParIndex);
    if (closingParIndex) {
      let strBefore = expression.slice(0, openParIndex);
      let strInside = expression.slice(openParIndex + 1, closingParIndex);
      let strAfter = expression.slice(closingParIndex + 1);
      return calc(strBefore + calc(strInside) + strAfter);
    } else {
      return "NaN";
    }
  }
  // look for lower order math operators (addition or subtraction)
  // we'll use recursion for calculation, so lower order operations are handled first 
  let mathOp = expression.split("").findLast(char => AS.includes(char));
  let mathOpIndex = expression.lastIndexOf(mathOp);
  // handle the case of "-" is not a math operator 
  // but a sign of a number at the end of the expression
  if ((DM+AS).includes(expression[mathOpIndex-1])) {
    mathOp = expression[mathOpIndex-1];
    mathOpIndex = mathOpIndex-1;
  }
  // if no valid lower order math operator left
  // look for higher order math operators (division or multiplication)
  // order of operations is important (division first)
  if (!mathOp || mathOpIndex === 0) {
    mathOp = DM.split("").findLast(mo => expression.includes(mo));
    mathOpIndex = expression.lastIndexOf(mathOp);
  }
  
  if (!mathOp || mathOpIndex === 0) {
    // end recursion, convert to numbers
    return +expression;
  } else {
    // split string on math operator to do basic arithmetics
    // calculate substrings recursively
    let numbers = [
      expression.slice(0, mathOpIndex), 
      expression.slice(mathOpIndex + 1)
    ].map(str => isNaN(+str) ? calc(str) : +str);
    return arithMagic(numbers, mathOp);
  }
};