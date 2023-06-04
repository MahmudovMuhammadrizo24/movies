"use strict";
const loginForm = document.getElementById('RegisterForm');
const loginBtn = document.getElementById('loginBtn');


loginBtn.addEventListener('click', function (event) {
    event.preventDefault(); // Prevents the default click behavior

    // Retrieve the values
    const username = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;
    const name = document.getElementById('exampleInputName').value;

    // Create an object with the input values
    let loginData = {
        username: username,
        password: password,
        name: name
    };

    // Output the object to the console
    console.log(loginData);
    window.location.href = '../index.html';
});
fetch('/register', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
})
    .then(response => response.json())
    .then(data => {
        // Process the response from the backend
        console.log(data); // You can do further actions based on the response
    })
    .catch(error => {
        console.error('Error:', error);
    });

















