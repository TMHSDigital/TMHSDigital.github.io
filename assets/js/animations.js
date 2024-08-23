document.addEventListener("DOMContentLoaded", function() {
    // Simulate typing effect
    const texts = document.querySelectorAll(".container h1, .container h2, .container p");
    texts.forEach(text => {
        const chars = text.innerHTML.split("");
        text.innerHTML = "";
        chars.forEach((char, i) => {
            setTimeout(() => {
                text.innerHTML += char;
            }, 100 * i);
        });
    });

    // Blinking cursor effect
    const cursor = document.createElement("span");
    cursor.className = "cursor";
    cursor.innerHTML = "|";
    document.body.appendChild(cursor);

    gsap.to(".cursor", {
        opacity: 0,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        duration: 0.6
    });

    // Scroll-triggered section fade-in
    gsap.utils.toArray(".container").forEach(section => {
        gsap.from(section, {
            duration: 1.5,
            opacity: 0,
            y: 50,
            ease: "power2.out",
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "bottom 60%",
                toggleActions: "play none none reverse"
            }
        });
    });
});
