var buttons = document.querySelectorAll(".toggle-button");
var activeButtonIndex = localStorage.getItem("activeButtonIndex");

function setActiveButton(index) {
    buttons.forEach(function(button) {
        button.classList.remove("active");
    });
    if (index !== null) {
        buttons[index - 1].classList.add("active");
    }
}

setActiveButton(activeButtonIndex);

buttons.forEach(function(button) {
    button.addEventListener("click", function(event) {
        var index = parseInt(button.getAttribute("data-index"));
        setActiveButton(index);
        localStorage.setItem("activeButtonIndex", index);
    });
});