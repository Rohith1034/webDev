
document.addEventListener("keypress", function (event) {
    var a = event.key;
    if (a == "Enter" || a == "=") {
        var result = calculate();
        document.querySelector(".inputbox").value = result;
    }

    else if (a == "Backspace") {
        var tempory = document.querySelector(".inputbox").value;
        var deletestring = tempory.substring(0, tempory.length - 1);
        document.querySelector(".inputbox").value = deletestring;
    }
    else if (a == "c" || a == "C" || a == "Escape") {
        document.querySelector(".inputbox").value = "";
    }
    console.log(a);
});

document.addEventListener("click", function (event) {
    var inner = event.target.innerHTML;
    var temp = document.querySelector(".inputbox").value;
    if (inner == "=") {
        var result = calculate();
        document.querySelector(".inputbox").value = result;
    }

    if (inner == '<i class="fa-solid fa-delete-left"></i>') {
        var tempory = document.querySelector(".inputbox").value;
        var deletestring = tempory.substring(0, tempory.length - 1);
        document.querySelector(".inputbox").value = deletestring;
    }

    if (inner == 1 || inner == 2 || inner == 3 || inner == 4 || inner == 5 || inner == 6 || inner == 7 || inner == 8 || inner == 9 || inner == 0) {
        var add = document.querySelector(".inputbox").value;
        document.querySelector(".inputbox").value = add + inner;
    }

    if (inner == "+" || inner == "-" || inner == "*" || inner == "/" || inner == "(" || inner == ")" || inner == ".") {
        var a1 = document.querySelector(".inputbox").value;
        document.querySelector(".inputbox").value = a1 + inner;
    }
    if (inner == "CE") {
        document.querySelector(".inputbox").value = "";
    }

    if (inner == "1/x") {
        temp = 1 / temp;
        document.querySelector(".inputbox").value = temp;
    }

    if (inner == "√x") {
        temp = Math.sqrt(temp);
        document.querySelector(".inputbox").value = temp;
    }

    if (inner == "x<sup>2</sup>") {
        temp = temp * temp;
        document.querySelector(".inputbox").value = temp;
    }

    if (inner == "10<sup>x</sup>") {
        temp = Math.pow(10, temp);
        document.querySelector(".inputbox").value = temp;
    }

    if (inner == "log") {
        temp = Math.log(temp);
        document.querySelector(".inputbox").value = temp;
    }

    if (inner == "ln") {
        temp = Math.log(temp) / Math.log(2);
        document.querySelector(".inputbox").value = temp;
    }

    if (inner == "e") {
        var e = 2.7182818284590452353602874713527;
        temp += e;
        document.querySelector(".inputbox").value = temp;
    }

    if (inner == "SIN") {
        document.querySelector(".inputbox").value = Math.sin(temp);
    }

    if (inner == "COS") {
        document.querySelector(".inputbox").value = Math.cos(temp);
    }

    if (inner == "TAN") {
        document.querySelector(".inputbox").value = Math.tan(temp);
    }

    if (inner == "Π") {
        temp += Math.PI;
        document.querySelector(".inputbox").value = temp;
    }

    if (inner == "x<sup>2</sup>") {
        var a2 = parseInt(temp);
        document.querySelector(".inputbox").value = a2 * a2;
    }


    if (inner == "x<sup>y</sup>") {
        var a1 = document.querySelector(".inputbox").value;
        document.querySelector(".inputbox").value = a1 + "^";
    }

    if (inner == "10<sup>x</sup>") {
        var a1 = 10;
        document.querySelector(".inputbox").value = a1 + "^";
    }

    if (inner == "n!") {
        temp = factorial(temp);
        document.querySelector(".inputbox").value = temp;
    }

    if (inner == "n√X") {
        var n = parseFloat(prompt("Enter the value of n:"));
        temp = Math.pow(temp, 1 / n);
        document.querySelector(".inputbox").value = temp;
    }

    if (inner == "+/-") {
        if (temp >= 0) {
            temp *= -1;
            document.querySelector(".inputbox").value = temp;
        }

        else if(temp < 0) {
            temp *= -1;
            document.querySelector(".inputbox").value = temp;
        }
    }

});


function calculateTrigonometry() {}


function calculate() {
    var a = document.querySelector(".inputbox").value;
    if (a == "") {
        b = 0;
    }

    if (a.includes("^")) {
        var parts = a.split("^");
        var base = parseFloat(parts[0]);
        var exponent = parseFloat(parts[1]);
        b = Math.pow(base, exponent);
    }

    if (a.includes("^")) {
        var parts = a.split("^");
        var base = parseFloat(parts[0]);
        var exponent = parseFloat(parts[1]);
        b = Math.pow(base, exponent);
    }

    else {
        var b = eval(a);
    }
    return b;
}


function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    for (var i = n - 1; i >= 1; i--) {
        n *= i;
    }
    return n;
}