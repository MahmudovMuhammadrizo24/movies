"use strict";
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents form submission
    const username = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;

    // Create an object with the input values
    let loginData = {
        username: username,
        password: password
    };

    // Output the object to the console
    console.log(loginData);
});