// Telegram setup
require('dotenv').config();
const Telegraf = require('telegraf');
// Your bot token.
const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);
module.exports.bot = bot;
