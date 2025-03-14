document.addEventListener("DOMContentLoaded", function() {
    const animatedElements = document.querySelectorAll('.title, .subtitle, .section-title');
    animatedElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = "translateY(30px)";
    });

    setTimeout(() => {
        animatedElements.forEach(el => {
            el.style.transition = "all 1s ease-in-out";
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        });
    }, 500);
});
