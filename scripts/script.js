// Switch between Booking Mode and Be a Guest 
let isBookingMode = false;

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('book-studio-toggle');
    const formHeader = document.getElementById('form-header');
    const ideaContainer = document.getElementById('idea-container');
    const ideaInput = document.getElementById('idea');
    const rentalInfo = document.getElementById('studio-rental-info');
    const amenitiesPara = document.getElementById('studio-amenities_para');

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            isBookingMode = !isBookingMode;

            if (isBookingMode) {
                toggleButton.textContent = "Be a Guest";
                formHeader.textContent = "🎙️ Book the Studio";
                ideaContainer.style.display = "none";
                ideaInput.removeAttribute("required");

                if (rentalInfo) rentalInfo.style.display = "block";
                if (amenitiesPara) amenitiesPara.style.display = "none";
            } else {
                toggleButton.textContent = "Book the Studio";
                formHeader.textContent = "🎙️ Be a Guest";
                ideaContainer.style.display = "block";
                ideaInput.setAttribute("required", "required");

                if (rentalInfo) rentalInfo.style.display = "none";
                if (amenitiesPara) amenitiesPara.style.display = "block";
            }
        });
    }

    // Scroll animation set up
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {

                entry.target.style.transitionDelay = `${index * 0.1}s`;
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('main > section, main > hr');
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
});

// Send email function 
function sendEmail(event) {
    event.preventDefault();

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const idea = document.getElementById("idea") ? document.getElementById("idea").value : "";

    const name = `${fname} ${lname}`;

    let subject, body;

    if (isBookingMode) {
        subject = `Studio Booking Request - ${name}`;
        body = `Hi Tony,

        My name is ${name}, and I'd like to book the studio.

        Here are my details:

        Name: ${name}
        Email: ${email}
        Phone: ${phone}

        Please let me know your available dates and times.

        Looking forward to hearing from you. Thanks for your time!

        Best,
        ${name}`;
    } else {
        subject = `I'd like to come on the Podcast - ${name}`;
        body = `Hi Tony,

        My name is ${name}, and I'd love the opportunity to come on the podcast.

        Here's a little about me:

        Name: ${name}
        Email: ${email}
        Phone: ${phone}

        Podcast Idea:
        ${idea}

        Looking forward to hearing from you. Thanks for your time!

        Best,
        ${name}`;
    }

    window.location.href = `mailto:guddoers@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    document.getElementById("onboard-form").reset();
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    });
});

const youtubeChannel = 'https://www.youtube.com/@GuddoersMedia';

document.querySelectorAll('.clickable').forEach(element => {
    element.addEventListener('click', () => {
        window.open(youtubeChannel, '_blank');
    });
});

const spinButtons = document.querySelectorAll(".spin-button");

spinButtons.forEach((button) => {
    button.addEventListener("click", () => {

        if (button.classList.contains("animate")) return;

        button.classList.add("animate");

        button.addEventListener(
            "animationend", () => {
                button.classList.remove("animate");
            }, { once: true }
        );
    });
});

function showMenu() {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const menuBtn = document.getElementById('menu-button');

    header.classList.toggle('mobile-active');
    nav.classList.toggle('mobile-active');

    if (nav.classList.contains('mobile-active')) {
        menuBtn.src = "/assets/icons/close_button.svg";
    } else {
        menuBtn.src = "/assets/icons/hamburger_menu.svg";
    }
}

// Hide navigation bar on scroll up
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (!header.classList.contains('mobile-active')) {
        if (scrollTop > lastScrollTop && scrollTop > header.offsetHeight) {

            header.classList.add('nav-hidden');
        } else {

            header.classList.remove('nav-hidden');
        }
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});