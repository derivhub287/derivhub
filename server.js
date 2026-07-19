
const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());

const BOT_TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

app.post("/send-telegram", async (req, res) => {
  try {
    await axios.post(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        chat_id: CHAT_ID,
        text: req.body.message
      }
    );

    res.json({ success: true });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ success: false });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running");
});
