let screen = document.querySelector("#screen");
let string = "";
let arr = Array.from(document.querySelectorAll(".btn"));
let buttonClicked;
let buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    let buttonClicked = button.value;
    if (buttonClicked === "÷") {
      buttonClicked = "/";
    } else if (buttonClicked === "×") {
      buttonClicked = "*";
    }
    output(buttonClicked);
  });
});

document.addEventListener("keypress", function (event) {
  if (event.key === "Backspace") {
    buttonClicked = "AC"
  }
  else if (event.key === "Enter") {
    buttonClicked = "="
  } else {
    buttonClicked = event.key
  }
  output(buttonClicked)

});

function output(btnTapped) {
  if (btnTapped === "=") {
    string = eval(string);

  } else if (btnTapped === "AC") {
    string = "";

  } else {
    string += btnTapped;
  }
  screen.value = string;
}

