const express = require('express');
const cors = require('cors');
const svgCaptcha = require('svg-captcha');

const app = express();

app.use(cors());

// الصفحة الرئيسية
app.get('/', (req, res) => {
  res.send('API is working 🚀');
});

// الكابتشا
app.get('/captcha', (req, res) => {

  const captcha = svgCaptcha.create();

  res.json({
    text: captcha.text,
    svg: captcha.data
  });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server running');
});
