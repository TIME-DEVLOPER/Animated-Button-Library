// 🔥 Glow & Rotate Effect JS 🔥
document.addEventListener("DOMContentLoaded", function () {
    // Glow Effect
    let buttons = document.querySelectorAll(".btn-glow");
    buttons.forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.boxShadow = "0 0 30px rgba(76, 175, 80, 1)";
        });
        button.addEventListener("mouseout", () => {
            button.style.boxShadow = "0 0 20px rgba(76, 175, 80, 0.8)";
        });
    });

    // Rotate Effect (अब क्लिक करने पर रोटेट होगा)
    document.querySelectorAll(".rotate-box").forEach(box => {
        box.addEventListener("click", function () {
            this.style.transform = "rotate(360deg)";
            setTimeout(() => {
                this.style.transform = "rotate(0deg)";
            }, 500);
        });
    });
});
