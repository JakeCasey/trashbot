// Telegram setup
require('dotenv').config();
const Telegraf = require('telegraf');
const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);
module.exports.bot = bot;