document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("button");
    const box = document.getElementById("colorBox");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            let color = button.getAttribute("data-color");

            // Reset position and opacity
            box.style.opacity = "0";
            box.style.top = "20%";

            setTimeout(() => {
                // Apply new color and move down
                box.style.backgroundColor = color;
                box.style.opacity = "1";
                box.style.top = "50%";
            }, 300); // Delay before animation starts
        });
    });
});
