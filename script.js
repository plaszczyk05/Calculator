let display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
let currentinput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    let value = button.textContent;

    if (value === "AC") {
      currentinput = "";
    } else if (value === "=") { try {
      let historyTxt = document.querySelector('.historyTxt');
      historyTxt.style.display = "none";
      currentinput = String(eval(currentinput.replace('x', '*').replace('%', '/100')));

      let historyList = document.querySelector('.historyItems');
      let newItem = document.createElement('li');
      newItem.textContent = currentinput;      historyList.appendChild(newItem);
      let history = document.querySelector('historyTxt');
      history.style.display = "none";
      
    } catch {
      display.textContent = "Error";
    }
    } else {
      const operators = ['x', '-', '+', '%', '/'];

      let lastChar = currentinput.slice(-1);

      if (operators.includes(value) && operators.includes(lastChar)) {
        return;
      }
      if (!currentinput.includes(operators) && currentinput === "0") {
        currentinput = value;
      } else {
        currentinput += value;
      }
    }
   display.textContent = currentinput; 
  });
});

function hide() {
  let hide = document.querySelector('.historyList');

  hide.style.display = "none";
}

function show() {
  let show = document.querySelector('.historyList');

  show.style.display = "block";
}