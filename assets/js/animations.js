document.addEventListener("DOMContentLoaded", function() {
    gsap.from("h1", { duration: 1, y: -50, opacity: 0, ease: "bounce" });
    gsap.from("nav ul li", { duration: 1, x: -30, opacity: 0, stagger: 0.2 });
});
