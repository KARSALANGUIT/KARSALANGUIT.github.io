document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn");
    const body = document.body;

    let currentBox = null;

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            let color = button.getAttribute("data-color");
            if (!color) return;

            // Fade out the current box before replacing
            if (currentBox) {
                currentBox.classList.add("exit");
                setTimeout(() => currentBox.remove(), 600);
            }

            // Create a new box
            const newBox = document.createElement("div");
            newBox.classList.add("box");
            newBox.style.backgroundColor = color;
            newBox.style.borderColor = color; // Match border color

            // Append the new box to the body
            body.appendChild(newBox);

            // Fade in the new box after a delay
            setTimeout(() => {
                newBox.classList.add("active");
            }, 100);

            // Update the current box reference
            currentBox = newBox;
        });
    });
});
