let username, password, loginForm, user = "";

document.addEventListener("DOMContentLoaded", function () {
    loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // למנוע מהטופס לשלוח את הבקשה

        // קבלת ערכי השדות
        username = document.getElementById("username").value.trim();
        password = document.getElementById("password").value.trim();

        if (username === '' || password === '') {
            alert('אנא מלא את כל השדות.');
            return;
        }

        // בדיקת אם השם משתמש והסיסמה קיימים
        getUserByPassword(password)
            .then(data => {
                if (data && data.user) {
                    console.log('User:', data.user);
                    if (5 === 5) {
                   
                        window.location.href = '../html/home.html';
                    }
                    else
                    {
                        alert("שם וסיסמא לא קימים הרשם מחדש")
                        window.location.href = '../html/singup.html';
                    }
                    // כאן אפשר להוסיף את מה שתרצה לעשות עם המשתמש שהוחזר
                } else {
                    console.log('No user found');
                }
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    });
});

function getUserByPassword(password) {
    const user = {
        password: password
    };

    return fetch('http://localhost:3000/getUserByPassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        });
}