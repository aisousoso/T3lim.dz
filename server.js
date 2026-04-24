const express = require('express');
const app = express();

// 1. خدمة الملفات الثابتة (مثل style.css و app.js و أي صور أو ملفات HTML)
app.use(express.static(__dirname));

// 2. المسارات (Routes)
app.get('/', (req, res) => {
    res.send('DZ EDU PLATFORM READY');
});

app.get('/api/books', (req, res) => {
    res.json([{ id: 1, title: 'Math Book' }]);
});

// 3. تحديد المنفذ ديناميكياً ليتوافق مع بيئة Render
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`🚀 Server is RUNNING on port ${port}`);
});