/*
========================================
SOCForge Main JavaScript
========================================
*/


// ================================
// Terminal Typing Effect
// ================================


const terminalLines = [

    {
        text: "[+] Initializing SOC environment...",
        className: "green"
    },

    {
        text: "[+] Wazuh Manager: ONLINE",
        className: "green"
    },

    {
        text: "[+] Windows Agent: CONNECTED",
        className: "blue"
    },

    {
        text: "[+] Sysmon telemetry: ACTIVE",
        className: "blue"
    },

    {
        text: "[!] Threat detection engine monitoring",
        className: "yellow"
    },

    {
        text: "[+] MITRE ATT&CK mapping enabled",
        className: "green"
    }

];


const terminal = document.querySelector(".terminal-body");


let lineIndex = 0;



function typeTerminal() {

    if (!terminal || lineIndex >= terminalLines.length) {
        return;
    }


    const line = terminalLines[lineIndex];


    const element = document.createElement("p");

    element.classList.add(line.className);


    terminal.appendChild(element);


    let charIndex = 0;


    function typeCharacter() {

        if (charIndex < line.text.length) {

            element.textContent += line.text.charAt(charIndex);

            charIndex++;

            setTimeout(typeCharacter, 35);

        }

        else {

            lineIndex++;

            setTimeout(typeTerminal, 400);

        }

    }


    typeCharacter();

}


window.addEventListener(
    "load",
    typeTerminal
);





// ================================
// Metric Counter Animation
// ================================


const counters = document.querySelectorAll(".metric-card h2");



function animateCounter(counter) {


    const target = Number(
        counter.textContent.replace("+", "")
    );


    const hasPlus = counter.textContent.includes("+");


    let current = 0;


    const increment = Math.ceil(
        target / 40
    );


    const timer = setInterval(() => {


        current += increment;


        if (current >= target) {


            counter.innerHTML = target + (hasPlus ? "<span>+</span>" : "");


            clearInterval(timer);

        }

        else {


            counter.innerHTML = current + (hasPlus ? "<span>+</span>" : "");


        }


    }, 40);


}




const observer = new IntersectionObserver(

    (entries) => {


        entries.forEach(entry => {


            if (entry.isIntersecting) {


                animateCounter(
                    entry.target
                );


                observer.unobserve(
                    entry.target
                );

            }


        });


    },

    {
        threshold: 0.7
    }



);



counters.forEach(counter => {

    observer.observe(counter);

});






// ================================
// Scroll Reveal Animation
// ================================


const revealElements = document.querySelectorAll(
    ".metric-card, \
    .dashboard-card, \
    .evidence-card, \
    .workflow-card, \
    .architecture-card, \
    .overview-card, \
    .tech-grid > div, \
    .stack-list > div, \
    .doc-card, \
    .simulation-card, \
    .flow-node, \
    .future-list"
);



revealElements.forEach(element => {
    element.style.transitionDelay =
        `${Math.random() * 0.2}s`;

    element.style.opacity = "0";

    element.style.transform = "translateY(40px)";

    element.style.transition =
        "opacity .7s ease, transform .7s ease";

});





const revealObserver = new IntersectionObserver(

    (entries) => {


        entries.forEach(entry => {


            if (entry.isIntersecting) {


                entry.target.style.opacity = "1";


                entry.target.style.transform =
                    "translateY(0)";


                revealObserver.unobserve(
                    entry.target
                );


            }


        });


    },

    {
        threshold: .15
    }



);



revealElements.forEach(element => {

    revealObserver.observe(element);

});






// ================================
// Live Status Pulse
// ================================


const status = document.querySelector(".nav-status");



if (status) {


    setInterval(() => {


        status.style.opacity =
            status.style.opacity === "0.5"
                ? "1"
                : "0.5";


    }, 1200);


}

// ==================================
// SOCForge Page Transition Animation
// ==================================

document.addEventListener("DOMContentLoaded", () => {

    document.body.classList.add("page-loaded");

});



// Add fade effect when navigating

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", function (e) {


        const href = this.getAttribute("href");


        // Ignore empty links
        if (!href || href === "#") {
            return;
        }


        e.preventDefault();


        document.body.classList.remove("page-loaded");


        setTimeout(() => {

            window.location.href = href;

        }, 250);


    });

});

const evidenceImages = document.querySelectorAll(".expand-image");

const imageModal = document.querySelector(".image-modal");

const modalImage = document.querySelector(".modal-image");

const closeModal = document.querySelector(".close-modal");


evidenceImages.forEach(image => {

    image.addEventListener("click", () => {

        imageModal.classList.add("active");

        modalImage.src = image.src;

    });

});


closeModal.addEventListener("click", () => {

    imageModal.classList.remove("active");

});


imageModal.addEventListener("click", (event) => {

    if (event.target === imageModal) {

        imageModal.classList.remove("active");

    }

});


document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        imageModal.classList.remove("active");

    }

});