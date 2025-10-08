const TelegramBot=require('node-telegram-bot-api');

const RateService=require('../services/ratesServices.js');
require('dotenv').config()

const currencyapi = require('@everapi/currencyapi-js');
const client = new currencyapi(process.env.API_KEY);

const token=process.env.TOKEN;

const bot=new TelegramBot(token,{polling:true})

console.log('Bot has started');
//todo bot logic

bot.on("message",(msg)=>{
    const chatId=msg.chat.id;

    bot.sendMessage(chatId,"Message recieved");
})



