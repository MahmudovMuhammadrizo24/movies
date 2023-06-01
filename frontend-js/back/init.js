const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/data', (req, res) => {
    const data = req.body;
    console.log(data); // Ma'lumotni konsolga chiqaring
    res.send('Ma\'lumot qabul qilindi');
});

app.listen(3000, () => {
    console.log('Server ishga tushdi');
});
