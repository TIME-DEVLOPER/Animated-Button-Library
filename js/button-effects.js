// 🔥 Glow Effect JS 🔥
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
// 🔥 Rotate Effect JS 🔥
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".rotate-box").forEach(box => {
        box.addEventListener("click", function () {
            this.style.transform = "rotate(360deg)";
            setTimeout(() => {
                this.style.transform = "rotate(0deg)";
            }, 500);
        });
    });
});
