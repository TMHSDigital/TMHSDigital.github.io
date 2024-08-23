document.addEventListener("DOMContentLoaded", function() {
    // Glitch Effect on Title
    gsap.to(".glitch", {
        duration: 1,
        text: {
            value: "Webfusion Solutions",
            newClass: "glitch",
            oldClass: "glitch",
            delimiter: ""
        },
        repeat: -1,
        repeatDelay: 0.2,
        ease: "power2.inOut"
    });

    // Scan line effect on body
    gsap.to("body::before", {
        duration: 1.5,
        backgroundPosition: "0 100%",
        ease: "none",
        repeat: -1
    });

    // Fade in and slide up effect for sections
    gsap.from(".container", {
        duration: 1.5,
        y: 100,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".container",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
            markers: true
        }
    });

    // Highlight effect on hover for links
    gsap.utils.toArray("a").forEach(link => {
        link.addEventListener("mouseenter", () => {
            gsap.to(link, {
                duration: 0.3,
                textShadow: "0px 0px 10px #0F0",
                ease: "power1.inOut"
            });
        });

        link.addEventListener("mouseleave", () => {
            gsap.to(link, {
                duration: 0.3,
                textShadow: "0px 0px 5px #00FF41",
                ease: "power1.inOut"
            });
        });
    });
});
