let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

document.getElementById("contactForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const form = event.target;
    const status = document.getElementById("formStatus");

    status.textContent = "Sending message...";

    try {
        const response = await fetch("https://formspree.io/f/mblkwzll", {
            method: "POST",
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            alert("Message sent successfully!")
            form.reset();
        } else {
            alert("Message not sent. Try again!")
        }
    } catch (error) {
        alert("Network error. Please try again later.");
    }
});