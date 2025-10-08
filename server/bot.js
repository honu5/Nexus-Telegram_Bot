const TelegramBot=require('node-telegram-bot-api');

const Parser=require('./utils/parser.js')

//const RateService=require('./services/ratesServices.js');

require('dotenv').config()

const token=process.env.TOKEN;

const bot=new TelegramBot(token,{polling:true})
 
console.log('Bot has started');

bot.onText(/\/convertCurrency (.+)/,async (msg,match)=>{
    const chatId=msg.chat.id;
    const message=match[1];
    
    try{
        const parsed=Parser.parse(message);
        if(!parsed){
            return bot.sendMessage(chatId,"Please use the correct format");
        }
        //call RateService
        //send formatted reply back to user
    }catch(error){
        bot.sendMessage(chatId,"Couldn't convert currency: "+ error.message)
    }
   
})

bot.on("message",(msg)=>{
    const chatId=msg.chat.id;
    bot.sendMessage(chatId,"Please use the following format eg: 100 USD to EUR")
})



