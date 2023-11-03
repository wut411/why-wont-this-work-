const btn = document.querySelector(".next-btn");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const page3Btn = document.getElementById("page3-btn");
const loveMessage = document.getElementById("love-message");
const litBtn = document.getElementById("candle-btn");

page2.style.display = "none";
page3.style.display = "none";
page3Btn.style.display = "none";
loveMessage.style.display = "none";

const imagesToPreload = [
    "./images/slide1.png",
    "./images/slide2.png",
    "./images/slide3.png",
    "./images/slide4.png",
    "./images/slide5.png",
    "./images/slide6.png",
    "./images/slide7.png",
    "./images/slide8.png",
    "./images/slide9.png",
    "./images/slide10.png",
];

btn.addEventListener("click", () => {
    page1.style.display = "none";
    page2.style.display = "block";
    page3.style.display = "none";
});

function preloadImages() {
    const preloadedImages = [];

    imagesToPreload.forEach((imageSrc) => {
        const img = new Image();
        img.src = imageSrc;
        preloadedImages.push(img);
    });
}

preloadImages();

litBtn.addEventListener("click", () => {
    litBtn.style.display = "none";
    loveMessage.style.display = "block";

    setTimeout(() => {
        animateText("My", loveMessage);
    },2000)  
    setTimeout(() => {
        loveMessage.innerText = " "
        animateText("Love", loveMessage);
    }, 3000);
    setTimeout(() => {
        loveMessage.innerText = " " 
        animateText("Is", loveMessage);
    }, 4000);
    setTimeout(() => {
        loveMessage.innerText = " "
        animateText("Always", loveMessage);
    }, 5000);
    setTimeout(() => {
        loveMessage.innerText = " "
        animateText("With", loveMessage);
    }, 6000);
    setTimeout(() => {
        loveMessage.innerText = " "
        animateText("You", loveMessage);
    }, 7000);
    setTimeout(() => {
        loveMessage.innerText = "My Love Is Always With You <3"
    }, 8000);
    setTimeout(() => {
        gsap.to(page3Btn, { opacity: 1, display: "block", duration: 1 });
    }, 9000)
});

page3Btn.addEventListener("click", () => {
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "block";
});

document.getElementById("candle-btn").addEventListener("click", () => {
    const flame = document.getElementById("flame");
    const candleButton = document.getElementById("candle-btn");
    const candleText = document.getElementById("candle-text");

    flame.style.animation = "flicker 0.5s infinite";
    candleText.innerText = "Candle is lit!";

    gsap.to("#page2", {
        backgroundColor: "black",
        duration: 1
    });

    gsap.to("#candle-text", {
        color: "white",
        duration: 1
    });

    candleButton.disabled = true;
});

const page3Button = document.getElementById("page3-btn");

function lightCandle() {
    const flame = document.getElementById("flame");
    const body = document.body;

    const tl = gsap.timeline();

    tl.to(flame, {
        opacity: 0.8,
        duration: 2,
        onStart: () => {
            flame.style.display = "block";
        }
    });

    const candleButton = document.getElementById("candle-btn");
    tl.to(candleButton, {
        duration: 0.5,
        display: "none",
        disabled: true
    }, "-=0.5");
}
document.getElementById("candle-btn").addEventListener("click", lightCandle);

page3Button.addEventListener("click", () => {
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "block";
});

function animateText(text, targetElement) {
    const characters = text.split("");

    let index = 0;
    const interval = setInterval(() => {
        if (index < characters.length) {
            targetElement.innerText += characters[index];
            index++;
        } else {
            clearInterval(interval);
        }
    }, 100);
}
