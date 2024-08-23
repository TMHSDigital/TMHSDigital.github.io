document.addEventListener('DOMContentLoaded', (event) => {
    gsap.registerPlugin(ScrollTrigger);

    // Typing effect for the main title
    gsap.to('.site-title', {
        duration: 2,
        text: {
            value: "Webfusion Solutions",
            delimiter: ""
        },
        ease: "none",
        onComplete: () => {
            gsap.to('.cursor', {opacity: 0, repeat: -1, yoyo: true, duration: 0.5});
        }
    });

    // Fade in effect for content
    gsap.from('.content', {
        scrollTrigger: {
            trigger: '.content',
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: 1,
        },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
    });

    // Navigation items slide in
    gsap.from('.nav-link', {
        opacity: 0,
        y: -20,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power2.out'
    });

    // Footer fade in
    gsap.from('.site-footer', {
        scrollTrigger: {
            trigger: '.site-footer',
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: 1,
        },
        opacity: 0,
        y: 20,
        duration: 1,
    });

    // Blinking cursor in footer
    gsap.to('.blinking-text', {
        opacity: 0,
        repeat: -1,
        yoyo: true,
        duration: 0.5
    });
});