const Telegram = require('node-telegram-bot-api');
const mongoose = require('mongoose');
require('dotenv').config()
const token = process.env.token;
console.log(token)
const bot = new Telegram(token, {polling: true});
bot.onText(/\/start/,(msg)=>{
    welcomeMessage(msg.from.id,'lalala')
})
function welcomeMessage (adressat,text){
    bot.sendMessage(adressat, text)
}
