const form = document.getElementById('form');

form.addEventListener("focusin", (event) => {
    event.target.style.border = "thick solid black";
});

form.addEventListener("focusout", (event) => {
    event.target.style.border = "";
});