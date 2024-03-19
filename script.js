document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("mousemove", function(e) {
        const body = document.querySelector("body");
        const mouseX = e.pageX;
        const mouseY = e.pageY;
        const color = "hsl(" + mouseX + "," + mouseY + ", 50%)"; // Calculate color based on mouse position
        body.style.backgroundColor = color;
    });
});
