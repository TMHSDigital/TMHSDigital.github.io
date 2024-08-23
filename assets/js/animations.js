gsap.registerPlugin(ScrollTrigger);

gsap.from('.header-text', {
    duration: 2,
    text: '',
    ease: 'power2.inOut',
    repeat: -1,
    yoyo: true,
    repeatDelay: 0.5,
    ease: 'linear',
    cursor: 'blink',
    delay: 1
});

gsap.from('.content', {
    scrollTrigger: {
        trigger: '.content',
        start: 'top 80%',
        end: 'bottom 60%',
        scrub: true,
        markers: true,
    },
    duration: 2,
    opacity: 0,
    y: 50,
    ease: 'power2.inOut',
    delay: 0.5,
    stagger: 0.2,
});

gsap.to('.blinking-text', {
    duration: 0.5,
    opacity: 0,
    ease: 'power2.inOut',
    repeat: -1,
    yoyo: true
});

gsap.from('.nav-item', {
    opacity: 0,
    y: -30,
    stagger: 0.3,
    ease: 'power2.inOut',
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
        trigger: '.nav',
        start: 'top 90%',
        end: 'bottom 80%',
        scrub: true,
    },
});

gsap.from('.footer', {
    opacity: 0,
    y: 30,
    ease: 'power2.inOut',
    duration: 1.5,
    delay: 1,
    scrollTrigger: {
        trigger: '.footer',
        start: 'top 90%',
        end: 'bottom 80%',
        scrub: true,
    },
});
