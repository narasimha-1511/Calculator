let input = document.getElementById("inputBox");


let string = "";

let operators = document.getElementsByClassName("oper");

for (i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", (e) => {
    if (Number(string) != 0) {
      let char = string.at(-1);
      console.log(char);
      let add = true;
      if (
        char == "/" ||
        char == "%" ||
        char == "*" ||
        char == "+" ||
        char == "-"
      ) {
        add = false;
      }

      if (add == true) string += e.target.innerHTML;
      input.value = string;
    }
  });
}

let numbers = document.getElementsByClassName("numbers");
for (i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", (e) => {
    if (e.target.innerHTML != 0) string += e.target.innerHTML;
    else {
      if (Number(string) != 0) {
        string += e.target.innerHTML;
      }
    }
    input.value = string;
  });
}

document.getElementById("equalButn").addEventListener("click", (e) => {
  string = eval(string);
  input.value = string;
});

document.getElementById("clear").addEventListener("click", (e) => {
  string = "";
  input.value = "";
});

document.getElementById("del").addEventListener("click", (e) => {
  string = string.slice(0, string.length - 1);
  input.value = string;
});
