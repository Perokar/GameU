const Telegram = require('node-telegram-bot-api');
const mongoose = require('mongoose');
require('./schema/userSchema');
const {menu} = require('./menu')
const {userAdd} = require('./schema/userSchema')
require('dotenv').config();
const token = process.env.token;
const database = process.env.database;
const bot = new Telegram(token, {
    polling: true
});
 mongoose.connect(database)

bot.setMyCommands(menu)
bot.onText(/\/start/, (msg) => {
    userAdd(msg.from.id, msg.from.username)
    welcomeMessage(msg.from.id, 'lalala')
})

function welcomeMessage(adressat, text) {
    bot.sendMessage(adressat, text)
}