var screen = document.querySelector(".screen");
var string = "";
var arr = Array.from(document.querySelectorAll(".btn"));

for (var i = 0; i < document.querySelectorAll(".btn").length; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function (e) {
    var buttonClicked = this;
    output(e.target.innerHTML);

    //screen.innerHTML = this.innerHTML;
    buttonAnimation(buttonClicked);
  });
}

document.addEventListener("keypress", function (event) {
  var activeButton = document.getElementById("n" + event.key);
  buttonAnimation(activeButton);
  output(event.key);
  // screen.innerHTML = event.key;
});
function buttonAnimation(currentKey) {
  currentKey.classList.add("pressed");

  setTimeout(function () {
    currentKey.classList.remove("pressed");
  }, "200");
}
function output(btnTapped) {
  if (btnTapped === "=") {
    string = eval(string);
    screen.innerHTML = string;
  } else if (btnTapped === "CE") {
    string = "";
    screen.innerHTML = string;
  } else if (btnTapped === "DEL") {
    string = string.substring(0, string.length - 1);
    screen.innerHTML = string;
  } else (string += btnTapped), (screen.innerHTML = string);
}
