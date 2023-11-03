gsap.to("#text", {
    y: -70,
    opacity: 1,
    duration: 1.5,
    delay: 1,
})

gsap.to("#subtext", {
    y: -40,
    opacity: 1,
    duration: 1,
    delay: 8,
    scale: 1.5
})

const nameChars = document.querySelectorAll('.char');

nameChars.forEach((char, index) => {
    gsap.from(char, {
        color: 'transparent',
        duration: 2.5,
        delay: 2.5 + index * 0.2,
        ease: 'power1.inOut',
        onComplete: () => {
            char.style.color = '#FF1493';
        },
    });
});

gsap.to(".smile", {
    y: -22,
    x: 20,
    opacity: 1,
    duration: 1,
    delay: 9,
})

gsap.to(".next", {
    opacity: 1,
    duration: 1,
    delay: 10
})