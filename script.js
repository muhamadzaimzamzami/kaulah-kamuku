// ======================================================
// ELEMENTS
// ======================================================

const slides = [...document.querySelectorAll(".slide")];

const startButton = document.getElementById("startButton");

const nextButtons = document.querySelectorAll(".next-button");

const backButtons = document.querySelectorAll(".back-button");

const restartButton = document.getElementById("restartButton");


const backgroundMusic = document.getElementById("backgroundMusic");

const musicButton = document.getElementById("musicButton");

const musicIcon = document.getElementById("musicIcon");


const pageIndicator = document.getElementById("pageIndicator");

const currentPageElement = document.getElementById("currentPage");

const totalPageElement = document.getElementById("totalPage");


const cheerButton = document.getElementById("cheerButton");

const anotherButton = document.getElementById("anotherButton");

const cheerMessage = document.getElementById("cheerMessage");

const messageEmoji = document.getElementById("messageEmoji");

const messageText = document.getElementById("messageText");


const bubbleContainer = document.getElementById("bubbleContainer");

const particleContainer = document.getElementById("particleContainer");


// ======================================================
// STATE
// ======================================================

let currentSlide = 0;

let isTransitioning = false;

let websiteStarted = false;

let musicPlaying = false;

let lastCheerIndex = -1;

let animationTimers = [];


// ======================================================
// SETTINGS
// ======================================================

backgroundMusic.volume = 0.22;

totalPageElement.textContent = slides.length;


// ======================================================
// CHEER MESSAGES
// ======================================================

const cheerMessages = [

    {
        text: "Ayoo nyeblak dulu.",
        emoji: "🌶️"
    },

    {
        text: "Es Krim kayanya enak.",
        emoji: "🍦"
    },

    {
        text: "Kopi duuluuu ga siii.",
        emoji: "☕"
    },

    {
        text: "Makan dulu Mimi. Jangan cuma mikirin hidup.",
        emoji: "🍜"
    },

    {
        text: "Kayaknya kamu butuh jajan sesuatu deh.",
        emoji: "🧋"
    },

    {
        text: "Tarik napas duluuu.",
        emoji: "🫧"
    },

    {
        text: "Hari ini berat? Easy mode dulu.",
        emoji: "🎮"
    },

    {
        text: "Rebahan 15 menit. Katanya.",
        emoji: "🛌"
    },

    {
        text: "Putar lagu favorit. Dunia mute dulu.",
        emoji: "🎧"
    },

    {
        text: "Cari angin. Jangan cari masalah.",
        emoji: "🌤️"
    },

    {
        text: "Minum dulu. Siapa tahu cuma kurang air.",
        emoji: "🥤"
    },

    {
        text: "Makan enak dulu. Masalah belakangan.",
        emoji: "🍱"
    },

    {
        text: "Santai dulu, Bu Mitha.",
        emoji: "😌"
    },

    {
        text: "Satu-satu dulu. Jangan semuanya dipikirin.",
        emoji: "🌱"
    },

    {
        text: "Hari jelek bukan berarti hidup jelek.",
        emoji: "🌤️"
    },

    {
        text: "Besok masih bisa coba lagi.",
        emoji: "🌅"
    },

    {
        text: "Tidur cukup dulu malam ini.",
        emoji: "🌙"
    },

    {
        text: "Kamu boleh bilang: aku capek.",
        emoji: "🫶"
    },

    {
        text: "Pelan-pelan juga tetap jalan.",
        emoji: "🐢"
    },

    {
        text: "Nggak ada lomba siapa paling cepat.",
        emoji: "🏁"
    },

    {
        text: "Coba lihat langit bentar.",
        emoji: "☁️"
    },

    {
        text: "Jajan dulu. Investasi mood.",
        emoji: "🍪"
    },

    {
        text: "Tidur siang juga sebuah keputusan.",
        emoji: "💤"
    },

    {
        text: "Senyum kalau bisa. Kalau nggak, yaudah 😭",
        emoji: "😂"
    },

    {
        text: "Mimi, jangan lupa makan ya.",
        emoji: "🍚"
    },

    {
        text: "Satu tugas dulu. Yang lain antre.",
        emoji: "✅"
    },

    {
        text: "HP taruh bentar. Dunia masih ada.",
        emoji: "📱"
    },

    {
        text: "Cari udara segar dulu.",
        emoji: "🌳"
    },

    {
        text: "Es teh juga solusi yang valid.",
        emoji: "🧊"
    },

    {
        text: "Coklat kayaknya nggak pernah salah.",
        emoji: "🍫"
    },

    {
        text: "Hari ini cocok makan yang pedes.",
        emoji: "🔥"
    },

    {
        text: "Kalau semuanya ngeselin, mandi dulu.",
        emoji: "🚿"
    },

    {
        text: "Liat ubur-ubur lewat dulu.",
        emoji: "🪼"
    },

    {
        text: "Hei. Kamu udah berusaha kok.",
        emoji: "🌼"
    },

    {
        text: "Nggak harus produktif terus.",
        emoji: "🧠"
    },

    {
        text: "Istirahat bukan berarti kalah.",
        emoji: "🌱"
    },

    {
        text: "Jangan galak sama diri sendiri.",
        emoji: "🥺"
    },

    {
        text: "Hari ini cukup dijalani dulu.",
        emoji: "☀️"
    },

    {
        text: "Kadang solusi terbaik: yaudah deh.",
        emoji: "😌"
    },

    {
        text: "Masalahnya masih ada? Makan dulu.",
        emoji: "🍔"
    },

    {
        text: "Kalau pusing, jangan dipikirin lima menit.",
        emoji: "🫠"
    },

    {
        text: "Mimi bukan spons penyerap masalah.",
        emoji: "🧽"
    },

    {
        text: "Beli sesuatu yang enak. Aku dukung.",
        emoji: "🍰"
    },

    {
        text: "Hari ini boleh biasa aja.",
        emoji: "🌥️"
    },

    {
        text: "Nggak semuanya butuh jawaban sekarang.",
        emoji: "💭"
    },

    {
        text: "Yang penting jangan lupa bernapas 😭",
        emoji: "🫧"
    },

    {
        text: "Kopi + cemilan. Baru bahas hidup.",
        emoji: "☕"
    },

    {
        text: "Tidur cukup juga perjuangan.",
        emoji: "😴"
    },

    {
        text: "Kalau belum membaik, besok coba lagi.",
        emoji: "✨"
    },

    {
        text: "Hari ini jangan jahat sama Mimi.",
        emoji: "🤍"
    }

];


// ======================================================
// INITIAL SLIDE
// ======================================================

window.addEventListener("DOMContentLoaded", () => {

    showElementsSequentially(slides[0]);

});


// ======================================================
// START
// ======================================================

startButton.addEventListener("click", () => {

    if (websiteStarted) {
        return;
    }


    websiteStarted = true;


    createParticles(
        startButton,
        20
    );


    startMusic();


    musicButton.classList.remove("hidden");

    pageIndicator.classList.remove("hidden");


    setTimeout(() => {

        goToSlide(1);

    }, 350);

});


// ======================================================
// NEXT
// ======================================================

nextButtons.forEach(button => {

    button.addEventListener("click", () => {

        if (
            isTransitioning ||
            currentSlide >= slides.length - 1
        ) {
            return;
        }


        createParticles(
            button,
            6
        );


        goToSlide(
            currentSlide + 1
        );

    });

});


// ======================================================
// BACK
// ======================================================

backButtons.forEach(button => {

    button.addEventListener("click", () => {

        if (
            isTransitioning ||
            currentSlide <= 0
        ) {
            return;
        }


        goToSlide(
            currentSlide - 1
        );

    });

});


// ======================================================
// RESTART
// ======================================================

restartButton.addEventListener("click", () => {

    goToSlide(0);


    pageIndicator.classList.add("hidden");


    setTimeout(() => {

        websiteStarted = false;

    }, 500);

});


// ======================================================
// CHANGE SLIDE
// ======================================================

function goToSlide(newIndex) {

    if (
        newIndex < 0 ||
        newIndex >= slides.length ||
        newIndex === currentSlide
    ) {
        return;
    }


    clearAnimationTimers();


    isTransitioning = true;


    const oldSlide =
        slides[currentSlide];


    const newSlide =
        slides[newIndex];


    oldSlide.classList.add(
        "slide-leaving"
    );


    resetSlideElements(
        newSlide
    );


    setTimeout(() => {

        oldSlide.classList.remove(
            "active",
            "slide-leaving"
        );


        newSlide.classList.add(
            "active"
        );


        currentSlide =
            newIndex;


        updatePageIndicator();


        showElementsSequentially(
            newSlide
        );


        setTimeout(() => {

            isTransitioning = false;

        }, 550);

    }, 380);

}


// ======================================================
// PAGE INDICATOR
// ======================================================

function updatePageIndicator() {

    currentPageElement.textContent =
        currentSlide + 1;

}


// ======================================================
// SEQUENTIAL ANIMATION
// ======================================================

function showElementsSequentially(slide) {

    clearAnimationTimers();


    const elements =
        slide.querySelectorAll("[data-show]");


    elements.forEach((element, index) => {

        element.classList.remove("show");


        const timer =
            setTimeout(() => {

                element.classList.add(
                    "show"
                );

            }, index * 1000);


        animationTimers.push(
            timer
        );

    });

}


// ======================================================
// RESET SLIDE
// ======================================================

function resetSlideElements(slide) {

    const elements =
        slide.querySelectorAll("[data-show]");


    elements.forEach(element => {

        element.classList.remove(
            "show"
        );

    });

}


// ======================================================
// CLEAR TIMER
// ======================================================

function clearAnimationTimers() {

    animationTimers.forEach(timer => {

        clearTimeout(timer);

    });


    animationTimers = [];

}


// ======================================================
// MUSIC
// ======================================================

function startMusic() {

    backgroundMusic
        .play()
        .then(() => {

            musicPlaying = true;

            musicButton.classList.add(
                "playing"
            );

            musicIcon.textContent =
                "♫";

        })
        .catch(() => {

            musicPlaying = false;

            musicIcon.textContent =
                "♪";

        });

}


musicButton.addEventListener("click", () => {

    if (musicPlaying) {

        backgroundMusic.pause();

        musicPlaying = false;

        musicButton.classList.remove(
            "playing"
        );

        musicIcon.textContent =
            "♪";

        return;
    }


    backgroundMusic
        .play()
        .then(() => {

            musicPlaying = true;

            musicButton.classList.add(
                "playing"
            );

            musicIcon.textContent =
                "♫";

        });

});


// ======================================================
// RANDOM CHEER
// ======================================================

cheerButton.addEventListener("click", () => {

    showRandomCheer();


    cheerButton.textContent =
        "Nah gitu dong 😌";


    anotherButton.classList.remove(
        "hidden"
    );

});


anotherButton.addEventListener("click", () => {

    showRandomCheer();

});


function showRandomCheer() {

    let randomIndex;


    do {

        randomIndex =
            Math.floor(
                Math.random() *
                cheerMessages.length
            );

    }
    while (
        randomIndex === lastCheerIndex &&
        cheerMessages.length > 1
    );


    lastCheerIndex =
        randomIndex;


    const message =
        cheerMessages[randomIndex];


    cheerMessage.classList.remove(
        "pop"
    );


    void cheerMessage.offsetWidth;


    messageEmoji.textContent =
        message.emoji;


    messageText.textContent =
        message.text;


    cheerMessage.classList.add(
        "pop"
    );


    createParticles(
        cheerMessage,
        10
    );

}


// ======================================================
// BUBBLES
// ======================================================

function createBubble() {

    if (!websiteStarted) {
        return;
    }


    const bubble =
        document.createElement("div");


    bubble.classList.add(
        "bubble"
    );


    const size =
        Math.random() * 23 + 8;


    const duration =
        Math.random() * 4 + 6;


    const horizontal =
        (Math.random() - .5) * 70;


    bubble.style.width =
        `${size}px`;


    bubble.style.height =
        `${size}px`;


    bubble.style.left =
        `${Math.random() * 100}%`;


    bubble.style.animationDuration =
        `${duration}s`;


    bubble.style.setProperty(
        "--bubble-x",
        `${horizontal}px`
    );


    bubbleContainer.appendChild(
        bubble
    );


    setTimeout(() => {

        bubble.remove();

    }, duration * 1000 + 500);

}


setInterval(
    createBubble,
    850
);


// ======================================================
// PARTICLES
// ======================================================

function createParticles(
    element,
    amount = 12
) {

    const symbols = [
        "✦",
        "✨",
        "🫧",
        "🌼",
        "⭐"
    ];


    const rect =
        element.getBoundingClientRect();


    const centerX =
        rect.left +
        rect.width / 2;


    const centerY =
        rect.top +
        rect.height / 2;


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const particle =
            document.createElement(
                "span"
            );


        particle.classList.add(
            "particle"
        );


        particle.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        particle.style.left =
            `${centerX}px`;


        particle.style.top =
            `${centerY}px`;


        const x =
            (Math.random() - .5) *
            200;


        const y =
            (Math.random() - .5) *
            200;


        particle.style.setProperty(
            "--particle-x",
            `${x}px`
        );


        particle.style.setProperty(
            "--particle-y",
            `${y}px`
        );


        particleContainer.appendChild(
            particle
        );


        setTimeout(() => {

            particle.remove();

        }, 1500);

    }

}