function openMenu() {
    var element = document.getElementById("animateNav");
    element.classList.toggle("animation");
}

var modal = document.getElementById('id01'); // This doesn't work here as it's not being called. fixed with "defer"

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}