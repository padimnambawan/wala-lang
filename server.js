const express = require('express');
const fetch = require('node-fetch');
const app = express();

const botToken = '8095590413:AAGPvu7lWRpMXONrYC2tG760PHuaKHZnlfY';
const chatId = '868202089';

app.get('/send', async (req, res) => {
  const message = req.query.message || 'Default alert';
  const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

  try {
    const response = await fetch(telegramUrl);
    const data = await response.json();
    res.send(data);
  } catch (err) {
    res.status(500).send("Error sending Telegram message");
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
