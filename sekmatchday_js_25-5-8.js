const spinners = document.getElementById('spinners'),
    letterWindows = document.querySelectorAll('.lwindow'),
    letterWheels = document.querySelectorAll('.lwindow .wheel'),
    cfLogos = document.querySelectorAll('#logos img'),
    shadowColors = {
        'cfsek': '#ffd200',
        'cacf': '#cc2027',
        'fsacf': '#019f16',
        'gacf': '#8daa31'
    };

window.addEventListener("DOMContentLoaded", () => {
    letterWheels.forEach((letterWheel, index) => {
        letterWheel.style.animationDelay = `${index * 0.1}s`;
    });
});

cfLogos.forEach(cfLogo => {
    cfLogo.addEventListener("mouseenter", e => {
        spinners.style.textShadow = `2px 2px 6px ${shadowColors[cfLogo.id]}`;
    });

    cfLogo.addEventListener("mouseleave", e => {
        spinners.style.textShadow = "";
    })
})

window.addEventListener("click", e => {
    spinners.classList.remove("static");
    spinners.style.gap = randomInRange(0, 6, true) + 'vw';
    letterWindows.forEach(lwindow => {
        lwindow.style.transform = `rotate(${randomInRange(-15, 15, false)}deg)`;
        lwindow.classList.add('floating');
    });
    shuffleProperties(letterWheels);
});

function randomInRange(min, max, int = false) {
    if (int) {
        return Math.floor(Math.random() * (max - min)) + min;
    } else {
        return Math.random() * (max - min) + min;
    }
}

function shuffleProperties(arr) {
    arr.forEach(el => {
        el.style.color = `rgb(${randomInRange(0, 256, true)}, ${randomInRange(0, 256, true)}, ${randomInRange(0, 256, true)})`;
        el.style.fontSize = randomInRange(5, 12, true) + 'vw';
        el.style.fontVariationSettings = `"wght" ${randomInRange(1, 1000, true)}, "wdth" ${randomInRange(75, 125, true)}`;
        el.style.setProperty('--tx', `${randomInRange(-1, 1, false)}vw`);
        el.style.setProperty('--ty', `${randomInRange(-1, 1, false)}vw`);
        el.style.setProperty('--rot', `${randomInRange(-15, 15, false)}deg`);
        el.style.animationDelay = `${randomInRange(10, 15, false)}s`;
        el.style.animationDuration = `${randomInRange(7, 9, false)}s`;
    })
}