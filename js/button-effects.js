
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
