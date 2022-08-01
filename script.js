function inputChangeEvent() {
    const input = document.querySelectorAll("input")
    input.forEach(input => input.addEventListener("change", () => {
    }))
}

function validateForm() {
    event.preventDefault();
    const firstname = document.getElementById("firstname")
    const lastname = document.getElementById("lastname")
    const email = document.getElementById("email")
    const number = document.getElementById("number")
    const password = document.getElementById("password")
    const confirmpass = document.getElementById("confirmpass")

    if (firstname.textContent === '') {

    }
}

