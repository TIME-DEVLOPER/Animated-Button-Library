
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

//  Ripple Effect JS 
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".btn-ripple").forEach(button => {
        button.addEventListener("click", function (e) {
            let x = e.clientX - button.offsetLeft;
            let y = e.clientY - button.offsetTop;
            let ripple = document.createElement("span");
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            this.appendChild(ripple);
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});
