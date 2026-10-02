// ======================================================
// ELEMENTS
// ======================================================

const opening = document.getElementById("opening");

const mainContent = document.getElementById("mainContent");

const openButton = document.getElementById("openButton");


const backgroundMusic = document.getElementById("backgroundMusic");

const musicButton = document.getElementById("musicButton");

const musicIcon = document.getElementById("musicIcon");


const cheerButton = document.getElementById("cheerButton");

const anotherButton = document.getElementById("anotherButton");

const cheerMessage = document.getElementById("cheerMessage");

const messageText = document.getElementById("messageText");

const messageEmoji = document.getElementById("messageEmoji");


const lastMessageButton = document.getElementById("lastMessageButton");

const lastMessage = document.getElementById("lastMessage");


const bubbleContainer = document.getElementById("bubbleContainer");

const particleContainer = document.getElementById("particleContainer");


// ======================================================
// VARIABLES
// ======================================================

let musicPlaying = false;

let lastCheerIndex = -1;

let websiteOpened = false;


// ======================================================
// MUSIC SETTING
// ======================================================

backgroundMusic.volume = 0.32;


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
        text: "Makan dulu Mitha. Jangan cuma mikirin hidup.",
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
        text: "Hari ini berat? Kita jalanin versi easy mode dulu.",
        emoji: "🎮"
    },

    {
        text: "Rebahan 15 menit. 15 menit ya... bukan 5 jam.",
        emoji: "🛌"
    },

    {
        text: "Putar lagu favorit. Dunia mute dulu.",
        emoji: "🎧"
    },

    {
        text: "Jalan bentar yuk. Cari angin, jangan cari masalah.",
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
        text: "Satu-satu dulu. Jangan semuanya dipikirin barengan.",
        emoji: "🌱"
    },

    {
        text: "Hari jelek nggak berarti hidupmu jelek.",
        emoji: "🌤️"
    },

    {
        text: "Besok masih ada kesempatan buat nyoba lagi.",
        emoji: "🌅"
    },

    {
        text: "Mungkin kamu cuma butuh tidur cukup malam ini.",
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
        text: "Nggak ada lomba siapa yang paling cepat beres.",
        emoji: "🏁"
    },

    {
        text: "Coba lihat langit bentar.",
        emoji: "☁️"
    },

    {
        text: "Jajan dulu. Anggap aja investasi mood.",
        emoji: "🍪"
    },

    {
        text: "Kalau bingung mau ngapain... tidur siang juga keputusan.",
        emoji: "💤"
    },

    {
        text: "Senyum kalau bisa. Kalau nggak bisa ya nggak usah dipaksa 😭",
        emoji: "😂"
    },

    {
        text: "Mitha, jangan lupa makan ya. Ini perintah.",
        emoji: "🍚"
    },

    {
        text: "Satu tugas dulu. Yang lain antre.",
        emoji: "✅"
    },

    {
        text: "HP taruh bentar. Dunia masih ada kok.",
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
        text: "Kayaknya hari ini cocok buat makan yang pedes.",
        emoji: "🔥"
    },

    {
        text: "Kalau semuanya ngeselin, mandi dulu deh.",
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
        text: "Nggak harus produktif terus. Kamu manusia.",
        emoji: "🧠"
    },

    {
        text: "Istirahat bukan kalah.",
        emoji: "🌱"
    },

    {
        text: "Jangan galak-galak sama diri sendiri.",
        emoji: "🥺"
    },

    {
        text: "Hari ini cukup dijalani aja dulu.",
        emoji: "☀️"
    },

    {
        text: "Mungkin sekarang waktunya bilang: yaudah deh.",
        emoji: "😌"
    },

    {
        text: "Masalahnya masih ada? Yaudah makan dulu.",
        emoji: "🍔"
    },

    {
        text: "Kalau pusing, coba jangan dipikirin selama lima menit.",
        emoji: "🫠"
    },

    {
        text: "Mitha manusia. Bukan spons penyerap masalah.",
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
        text: "Nggak semuanya harus punya jawaban sekarang.",
        emoji: "💭"
    },

    {
        text: "Yang penting jangan lupa bernapas 😭",
        emoji: "🫧"
    },

    {
        text: "Satu kopi, satu cemilan, baru kita bahas hidup.",
        emoji: "☕"
    },

    {
        text: "Tidur cukup adalah salah satu bentuk perjuangan.",
        emoji: "😴"
    },

    {
        text: "Kalau belum membaik, besok kita coba lagi.",
        emoji: "✨"
    },

    {
        text: "Pokoknya hari ini jangan jahat sama Mitha.",
        emoji: "🤍"
    }

];


// ======================================================
// OPEN WEBSITE
// ======================================================

openButton.addEventListener("click", () => {

    if (websiteOpened) {
        return;
    }

    websiteOpened = true;

    createParticles(openButton, 22);

    opening.style.transition =
        "opacity .65s ease, transform .65s ease";

    opening.style.opacity = "0";

    opening.style.transform = "scale(1.035)";


    setTimeout(() => {

        opening.classList.add("hidden");

        mainContent.classList.remove("hidden");

        musicButton.classList.remove("hidden");


        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        });


        startMusic();


        setTimeout(() => {
            checkReveal();
        }, 150);

    }, 620);

});


// ======================================================
// MUSIC
// ======================================================

function startMusic() {

    backgroundMusic
        .play()
        .then(() => {

            musicPlaying = true;

            musicButton.classList.add("playing");

            musicIcon.textContent = "♫";

        })
        .catch(() => {

            musicPlaying = false;

            musicButton.classList.remove("playing");

            musicIcon.textContent = "♪";

        });

}


musicButton.addEventListener("click", () => {

    if (musicPlaying) {

        backgroundMusic.pause();

        musicPlaying = false;

        musicButton.classList.remove("playing");

        musicIcon.textContent = "♪";

        return;
    }


    backgroundMusic
        .play()
        .then(() => {

            musicPlaying = true;

            musicButton.classList.add("playing");

            musicIcon.textContent = "♫";

        });

});


// ======================================================
// RANDOM CHEER
// ======================================================

cheerButton.addEventListener("click", () => {

    showRandomMessage();

    cheerButton.querySelector("span").textContent =
        "Nah gitu dong 😌";

    cheerButton.querySelector("small").textContent =
        "boleh pencet lagi";

    anotherButton.classList.remove("hidden");

});


anotherButton.addEventListener("click", () => {

    showRandomMessage();

});


function showRandomMessage() {

    let randomIndex;


    do {

        randomIndex =
            Math.floor(
                Math.random() * cheerMessages.length
            );

    }
    while (
        randomIndex === lastCheerIndex &&
        cheerMessages.length > 1
    );


    lastCheerIndex = randomIndex;


    const selectedMessage =
        cheerMessages[randomIndex];


    cheerMessage.classList.remove("show");


    setTimeout(() => {

        messageText.textContent =
            selectedMessage.text;

        messageEmoji.textContent =
            selectedMessage.emoji;


        cheerMessage.classList.add("show");


        createParticles(
            cheerMessage,
            12
        );

    }, 120);

}


// ======================================================
// LAST MESSAGE
// ======================================================

lastMessageButton.addEventListener("click", () => {

    lastMessage.classList.toggle("hidden");


    if (
        lastMessage.classList.contains("hidden")
    ) {

        lastMessageButton.textContent =
            "ada satu lagi 🫧";

        return;

    }


    lastMessageButton.textContent =
        "hehe 🌼";


    createParticles(
        lastMessageButton,
        20
    );

});


// ======================================================
// SCROLL REVEAL
// ======================================================

const revealElements =
    document.querySelectorAll(".reveal");


function checkReveal() {

    const triggerPoint =
        window.innerHeight - 90;


    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;


        if (elementTop < triggerPoint) {

            element.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    checkReveal,
    {
        passive: true
    }
);


window.addEventListener(
    "resize",
    checkReveal
);


// ======================================================
// BUBBLES
// ======================================================

function createBubble() {

    if (!websiteOpened) {
        return;
    }


    const bubble =
        document.createElement("div");


    bubble.classList.add("bubble");


    const size =
        Math.random() * 27 + 8;


    const left =
        Math.random() * 100;


    const duration =
        Math.random() * 5 + 7;


    const xMovement =
        (Math.random() - 0.5) * 80;


    bubble.style.width =
        `${size}px`;

    bubble.style.height =
        `${size}px`;

    bubble.style.left =
        `${left}%`;

    bubble.style.animationDuration =
        `${duration}s`;

    bubble.style.setProperty(
        "--bubble-x",
        `${xMovement}px`
    );


    bubbleContainer.appendChild(bubble);


    setTimeout(() => {

        bubble.remove();

    }, duration * 1000 + 500);

}


setInterval(
    createBubble,
    850
);


// ======================================================
// PARTICLE BURST
// ======================================================

function createParticles(
    element,
    amount = 15
) {

    const symbols = [
        "✦",
        "✨",
        "🫧",
        "🌼",
        "⭐",
        "•"
    ];


    const rect =
        element.getBoundingClientRect();


    const centerX =
        rect.left + rect.width / 2;


    const centerY =
        rect.top + rect.height / 2;


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const particle =
            document.createElement("span");


        particle.classList.add("particle");


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


        particle.style.fontSize =
            `${Math.random() * 8 + 10}px`;


        const x =
            (Math.random() - 0.5) * 230;


        const y =
            (Math.random() - 0.5) * 230;


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


// ======================================================
// PHOTO CARD TOUCH EFFECT
// ======================================================

const photoCards =
    document.querySelectorAll(".photo-card");


photoCards.forEach(card => {

    card.addEventListener(
        "touchstart",
        () => {

            card.style.zIndex = "15";

        },
        {
            passive: true
        }
    );


    card.addEventListener(
        "touchend",
        () => {

            setTimeout(() => {

                card.style.zIndex = "";

            }, 300);

        },
        {
            passive: true
        }
    );

});


// ======================================================
// LITTLE CARD TOUCH
// ======================================================

const littleCards =
    document.querySelectorAll(".little-card");


littleCards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            createParticles(
                card,
                8
            );

        }
    );

});


// ======================================================
// INITIAL
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        window.scrollTo(
            0,
            0
        );

    }
);