require('dotenv').config();
function reminder() {
  let { bot } = require('./telegram.js');
  bot.telegram.sendMessage(
    process.env.TELEGRAM_CHAT_ID,
    '♻️🗑️♻️ Take out the Recycling you dumb fuck. ♻️🗑️♻️'
  );
  bot.launch();
}

exports.reminder = reminder;
