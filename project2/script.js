//INITIAL COUNT
let count = 0;

//select value and button-
const value = document.querySelector("#value");//The querySelector() method returns the first element that matches a CSS selector.
//value is id..# is used.
const btns = document.querySelectorAll(".btn");//To return all matches (not only the first), use the querySelectorAll() instead.

btns.forEach(function (btn) {//The forEach() method executes a provided function once for each array element.
    btn.addEventListener("click", function (e) {//An event listener is a procedure in JavaScript that waits for an event to occur. The simple example of an event is a user clicking the mouse or pressing a key on the keyboard.
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        }
        else if (styles.contains("increase")){
            count++;
        }
        else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count === 0) {
            value.style.color = "yellow";
        }
        value.textContent = count;
    });

});