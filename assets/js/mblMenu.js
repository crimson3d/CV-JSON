let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null; // Oculta el panel
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px"; // Muestra el panel
        }
    });
}
