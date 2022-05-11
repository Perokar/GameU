const Telegram = require('node-telegram-bot-api');
const mongoose = require('mongoose');
require('dotenv').config()
const token = process.env.token;
console.log(1)
const bot = new Telegram(token, {polling: true});
bot.on()

