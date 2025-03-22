
//  Glow Effect JS 
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll(".btn-glow");
    buttons.forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.boxShadow = "0 0 30px rgba(76, 175, 80, 1)";
        });
        button.addEventListener("mouseout", () => {
            button.style.boxShadow = "0 0 20px rgba(76, 175, 80, 0.8)";
        });
    });
});

// 🔥 Ripple Effect JS 🔥
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".btn-ripple").forEach(button => {
        button.addEventListener("click", function (e) {
            let ripple = document.createElement("span");
            this.appendChild(ripple);

            let rect = this.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;

            ripple.style.left = `${x - 50}px`;
            ripple.style.top = `${y - 50}px`;

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});
