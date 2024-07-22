let name;
let password;
let email;
let phone;
let form;


document.addEventListener("DOMContentLoaded", function() {
    form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        name = document.getElementById("name").value.trim();
        password = document.getElementById("password").value.trim();
        email = document.getElementById("email").value.trim();
        phone = document.getElementById("phone").value.trim();

        if (name === "" || password === "" || email === "" || phone === "") {
            alert("Please fill in all fields.");
            return;
        }

        // בדיקת תקינות כתובת מייל 
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        //בדיקת תקינות מספר טלפון
        if (!validatePhone(phone)) {
            alert("Please enter a valid phone number.");
            return;
        }

        // אם הגענו לכאן, ניתן לשלוח את הטופס
        // פונקציה להוספת לקוח חדש
        addUser();
        alert("Form submitted successfully!");
        form.reset(); // לאפס את הטופס לאחר שליחתו
    });

    // פונקציה לבדיקת תקינות כתובת מייל עם ביטוי רגולרי
    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    // פונקציה לבדיקת תקינות מספר טלפון עם ביטוי רגולרי
    function validatePhone(phone) {
        const re = /^\d{10}$/;
        return re.test(phone);
    }
});


// פונקציה להוספת לקוח חדש
function addUser(){
  
    const newUser = {
        name: name,
        phone: phone,
        email: email,
        password:  password
    };
    fetch('http://localhost:3000/createNewUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
    })
 
}