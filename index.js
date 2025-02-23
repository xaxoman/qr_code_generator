const express = require('express');
var QRCode = require('qrcode')
const app = express();
const port = 3000;

app.use(express.static('public'));

// spiega: Generiamo un QR code con il testo passato come parametro
app.get('/qrcode', async (req, res) => {
    try {
        /* http://localhost:3000/?qrcode_text=test */
      const url = req.query.text;
      const qrCodeImage = await QRCode.toDataURL(url);
      res.send(`<img src="${qrCodeImage}" alt="QR Code"/>`);
    
    } catch (err) {
      console.error('Error generating QR code:', err);
      res.status(500).send('Internal Server Error');
    }
  });
  


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
