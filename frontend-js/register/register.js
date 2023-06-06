"use strict";

const RegisterForm = document.getElementById('RegisterForm');
const RegisterBtn = document.getElementById('RegisterBtn');

RegisterBtn.addEventListener('click', async (event) => {
    event.preventDefault();

    const username = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;
    const name = document.getElementById('exampleInputName').value;

    try {
        const response = await axios.post('https://pdp-movies-78.onrender.com/api/users', {
            name,
            username,
            password,
        });
        console.log(response.data);
        alert(`Ro'yxatdan o'tdingiz, Rahmat😉`);
        window.location.href = '../index.html';

    }
    catch (error) {
        console.error(error);
        if (error.response) {
            alert(`Serverda xatolik yuz berdi: ${error.response.data}`);
        }
        else {
            alert(`Ma'lumotlar serverga jo'natilmadi!❌`);
        }
    }
});














