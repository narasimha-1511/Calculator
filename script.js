const input = document.getElementById("inputBox");
let string = "";

const operators = document.getElementsByClassName("oper");
for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", (e) => {
    if (Number(string) !== 0) {
      const char = string.at(-1);
      let add = true;
      if (
        char === "/" ||
        char === "%" ||
        char === "*" ||
        char === "+" ||
        char === "-"
      ) {
        add = false;
      }
      if (add) {
        string += e.target.innerHTML;
        input.value = string;
      }
    }
  });
}

const numbers = document.getElementsByClassName("numbers");
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", (e) => {
    if (e.target.innerHTML !== "0") {
      string += e.target.innerHTML;
    } else {
      if (Number(string) !== 0) {
        string += e.target.innerHTML;
      }
    }
    input.value = string;
  });
}

document.getElementById("equalButn").addEventListener("click", () => {
  string = eval(string);
  input.value = string;
});

document.getElementById("clear").addEventListener("click", () => {
  string = "";
  input.value = "";
});

document.getElementById("del").addEventListener("click", () => {
  string = string.slice(0, string.length - 1);
  input.value = string;
});
