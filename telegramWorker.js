require('dotenv').config();
let { bot } = require('./telegram.js');

function reminder() {
  console.log('Attempting to send message.');
  bot.telegram.sendMessage(
    process.env.TELEGRAM_CHAT_ID,
    '♻️🗑️♻️ Take out the Recycling you dumb fuck. ♻️🗑️♻️'
  );
  bot.launch();
}

exports.reminder = reminder;
