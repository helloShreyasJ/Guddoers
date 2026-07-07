function sendEmail(event) {
    event.preventDefault();

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const idea = document.getElementById("idea").value;

    const name = `${fname} ${lname}`;

    const subject = `I'd like to come on the Podcast - ${name}`;

    const body = `Hi Tony,

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

    window.location.href = `mailto:guddoers@gmail.com?subject=${encodeURIComponent(
        subject
    )}&body=${encodeURIComponent(body)}`;

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