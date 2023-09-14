const displayScreen = document.querySelector("#display"); 
const operArr = ["timesBtn", "minusBtn", "plusBtn", "equalsBtn", "divideBtn"];

class baseSelector {
  constructor(el) {
    this.el = document.querySelector(el);

    let operObj = {};
    operators.forEach((operator) =>
    {
      operator = new baseSelector(operator);
      operObj[operator] = operator;
      displayScreen.value += operObj;
    })
  }
}

