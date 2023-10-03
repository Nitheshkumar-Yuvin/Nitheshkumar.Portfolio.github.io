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

//MenuBar

var menuBtn = document.getElementById("bar")
var xBtn = document.getElementById("x")
var mobHeader = document.getElementById("active-element")

menuBtn.addEventListener("click",()=>{
    menuBtn.classList.add("bar-action")
    xBtn.classList.add("x-action")
    mobHeader.classList.add("mobile-header")
})

xBtn.addEventListener("click",()=>{
    menuBtn.classList.remove("bar-action")
    xBtn.classList.remove("x-action")
    mobHeader.classList.remove("mobile-header")
})