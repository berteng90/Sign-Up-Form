let validate = false;

function inputChangeEvent() {
    const checkFirst = document.getElementById("firstname")
    const checkLast = document.getElementById("lastname")
    const checkEmail = document.getElementById("email")
    const checkPhone = document.getElementById("phonenumber")
    const checkPass = document.getElementById("password")
    const input = document.querySelectorAll("input")
    input.forEach(input => input.addEventListener('focusout', () => {
        if (input.id === 'firstname') {
            const check = /^[^\W\d\s]+$/g.test(input.value)
            console.log(check)
            if (check === true) {
                validate = true
                const label = document.querySelector(".error")
                label.remove();
            } else {
                const label = document.querySelector(".error")
                if (!label) {
                    const div = document.querySelector(".firstname")
                    const label = document.createElement("label")
                    label.style.color = "#FF0000";
                    label.className = "error";
                    label.textContent = `Firstname should have no number`;
                    div.appendChild(label)
                } else {
                    console.log('test')
                }

            }
        }
    }))

}
inputChangeEvent();
function validateForm() {
    event.preventDefault();
    const input = document.querySelectorAll("input")
    input.forEach(input => {
        if (input.value === "" && input.id === "firstname") {
            const div = document.querySelector(".firstname")
            const label = document.createElement("label")
            label.style.color = "#FF0000";
            label.textContent = `Firstname is required!`;
            div.appendChild(label)
        }
        else if (input.value === "" && input.id === "lastname") {
            const div = document.querySelector(".lastname")
            const label = document.createElement("label")
            label.style.color = "#FF0000";
            label.textContent = `Lastname is required!`;
            div.appendChild(label)
        } else if (input.value === "" && input.id === "email") {
            const div = document.querySelector(".email")
            const label = document.createElement("label")
            label.style.color = "#FF0000";
            label.textContent = `Email is required!`;
            div.appendChild(label)
        } else if (input.value === "" && input.id === "phonenumber") {
            const div = document.querySelector(".phonenumber")
            const label = document.createElement("label")
            label.style.color = "#FF0000";
            label.textContent = `Phone number is required!`;
            div.appendChild(label)
        } else if (input.value === "" && input.id === "password") {
            const div = document.querySelector(".password")
            const label = document.createElement("label")
            label.style.color = "#FF0000";
            label.textContent = `Password is required!`;
            div.appendChild(label)
        }
        else if (input.value === "" && input.id === "confirmpass") {
            const div = document.querySelector(".confirm")
            const label = document.createElement("label")
            label.style.color = "#FF0000";
            label.textContent = `Password does not match!`;
            div.appendChild(label)
        }
    })
}

