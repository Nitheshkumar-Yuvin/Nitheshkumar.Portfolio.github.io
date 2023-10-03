/*var click = document.getElementById("click")
click.addEventListener("click",()=>{
    click.classList.add("new-click")
})*/

document.addEventListener("DOMContentLoaded", function() {
    var header = document.getElementById("header");
    header.addEventListener("click", function() {
      if (header.classList.contains("expanded")) {
        header.classList.remove("expanded");
      } else {
        header.classList.add("expanded");
      }
    });
})