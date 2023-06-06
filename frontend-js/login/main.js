"use strict";
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevents form submission
    const username = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;


    try {
        const response = await axios.post('https://pdp-movies-78.onrender.com/api/auth', {
            username,
            password
        });
        console.log(response.data);
        const userToken = response.data.data;
        localStorage.setItem('userToken', userToken);

        alert('Akkauntga kirdingiz, Rahmat😉');
        window.location.href = '../index.html';
    }
    catch (error) {
        console.error(error);
        if (error.response) {
            alert(`Serverda xatolik yuz berdi: ${error.response.data}`);
        }
        else {
            alert(`Malumotlar serverga jonatilmadi!❌`);
        }
    }
});