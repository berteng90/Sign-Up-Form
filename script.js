let validate = false;
function focus() {
    const input = document.querySelectorAll("input")
    input.forEach(input => input.addEventListener("focusout", () => {
        console.log(input)
        inputChangeEvent(input)
    }))
}
focus()

function inputChangeEvent(input) {

    if (input.id === 'firstname') {
        const check = /^[^\W\d\s]+$/g.test(input.value)
        const div = document.querySelector(".firstname").children.length
        const label = document.querySelector(".error")
        if (check === true && label !== null) {
            validate = true
            const label = document.querySelector(".error")
            label.remove();
        } else if (check === true && label === null) {
            validate = true
        }
        else {
            const label = document.querySelector(".error")
            if (div !== 3) {
                const div = document.querySelector(".firstname")
                const label = document.createElement("label")
                label.style.color = "#FF0000";
                label.className = "error";
                label.textContent = `*Firstname should have no number`;
                div.appendChild(label)
            } else {
            }
        }
    } else if (input.id === "lastname") {
        const div = document.querySelector(".lastname").children.length
        const check = /^[^\W\d\s]+$/g.test(input.value)
        const label = document.querySelector(".error")
        if (check === true && label !== null) {
            validate = true
            const label = document.querySelector(".error")
            label.remove();
        } else if (check === true && label === null) {
            validate = true
        }
        else {
            if (div !== 3) {
                const div = document.querySelector(".lastname")
                const label = document.createElement("label")
                label.style.color = "#FF0000";
                label.className = `error`;
                label.textContent = `*Lastname should have no number`;
                div.appendChild(label)
            }
        }
    } else if (input.id === "email") {
        const check = /^[^\W\d\s]+$/g.test(input.value)
        const div = document.querySelector(".email").children.length
        const label = document.querySelector(".error")
        if (check === true && label !== null) {
            validate = true
            const label = document.querySelector(".error")
            label.remove();
        } else if (check === true && label === null) {
            validate = true
        }
        else {
            const label = document.querySelector(".error")
            if (div !== 3) {
                const div = document.querySelector(".email")
                const label = document.createElement("label")
                label.style.color = "#FF0000";
                label.className = "error";
                label.textContent = `*This is not a valid email!`;
                div.appendChild(label)
            } else {

            }
        }
    } else if (input.id === 'phonenumber') {
        const check = /^[0-9]+$/g.test(input.value)
        const div = document.querySelector(".phonenumber").children.length
        const label = document.querySelector(".error")
        if (check === true && label !== null) {
            validate = true
            const label = document.querySelector(".error")
            label.remove();
        } else if (check === true && label === null) {
            validate = true
        }
        else {
            const label = document.querySelector(".error")
            if (div !== 3) {
                const div = document.querySelector(".phonenumber")
                const label = document.createElement("label")
                label.style.color = "#FF0000";
                label.className = "error";
                label.textContent = `*Email hehe`;
                div.appendChild(label)
            } else {
            }
        }
    } else if (input.id === "password") {
        const check = /^[^\W\d\s]+$/g.test(input.value)
        const div = document.querySelector(".password").children.length
        const label = document.querySelector(".error")
        if (check === true && label !== null) {
            validate = true
            const label = document.querySelector(".error")
            label.remove();
        } else if (check === true && label === null) {
            validate = true
        }
        else {
            const label = document.querySelector(".error")
            if (div !== 3) {
                const div = document.querySelector(".password")
                const label = document.createElement("label")
                label.style.color = "#FF0000";
                label.className = "error";
                label.textContent = `*Email hehe`;
                div.appendChild(label)
            } else {

            }
        }
    } else if (input.id === "confirmpass") {
        const check = /^[^\W\d\s]+$/g.test(input.value)
        const div = document.querySelector(".confirm").children.length
        const label = document.querySelector(".error")
        if (check === true && label !== null) {
            validate = true
            const label = document.querySelector(".error")
            label.remove();
        } else if (check === true && label === null) {
            validate = true
        }
        else {
            const label = document.querySelector(".error")
            if (div !== 3) {
                const div = document.querySelector(".confirm")
                const label = document.createElement("label")
                label.style.color = "#FF0000";
                label.className = "error";
                label.textContent = `*Email hehe`;
                div.appendChild(label)
            } else {

            }
        }
    }
}


function validateForm() {
    event.preventDefault();
    const input = document.querySelectorAll("input")
    input.forEach(input => {
        if (input.value === "" && input.id === "firstname") {
            const div = document.querySelector(".firstname")
            const label = document.createElement("label")
            label.className = "error"
            label.style.color = "#FF0000";
            label.textContent = `*Firstname is required!`;
            div.appendChild(label)
        }
        else if (input.value === "" && input.id === "lastname") {
            const div = document.querySelector(".lastname")
            const label = document.createElement("label")
            label.className = "error"
            label.style.color = "#FF0000";
            label.textContent = `*Lastname is required!`;
            div.appendChild(label)
        } else if (input.value === "" && input.id === "email") {
            const div = document.querySelector(".email")
            const label = document.createElement("label")
            label.className = "error"
            label.style.color = "#FF0000";
            label.textContent = `*Email is required!`;
            div.appendChild(label)
        } else if (input.value === "" && input.id === "phonenumber") {
            const div = document.querySelector(".phonenumber")
            const label = document.createElement("label")
            label.className = "error"
            label.style.color = "#FF0000";
            label.textContent = `*Phone number is required!`;
            div.appendChild(label)
        } else if (input.value === "" && input.id === "password") {
            const div = document.querySelector(".password")
            const label = document.createElement("label")
            label.className = "error"
            label.style.color = "#FF0000";
            label.textContent = `*Password is required!`;
            div.appendChild(label)
        }
        else if (input.value === "" && input.id === "confirmpass") {
            const div = document.querySelector(".confirm")
            const label = document.createElement("label")
            label.className = "error"
            label.style.color = "#FF0000";
            label.textContent = `*Password does not match!`;
            div.appendChild(label)
        }
    })
}

