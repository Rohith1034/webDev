var inputtext = document.querySelector(".num");
function increment() {
    inputtext.value = inputtext.value + 1;
}

function decrement() {
    if (inputtext.value<= 0) {
        inputtext.value = 0;
    }
    else {
        inputtext.value = inputtext.value - 1;
    }
}