require('dotenv').config()

const TelegramBot=require('node-telegram-bot-api');

const Parser=require('./utils/parser.js')

const RateService=require('./services/ratesServices.js');




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

    const result = await RateService.convert(parsed.amount, parsed.from, parsed.to);
    bot.sendMessage(chatId, ` ${parsed.amount} ${parsed.from} = ${result.toFixed(2)} ${parsed.to}`,{parse_mode:"Markdown"});

    
    }catch(error){
        bot.sendMessage(chatId,"Couldn't convert currency: "+ error.message)
    }
   
})

bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  // Ignore /convertCurrency command (it is already handled)
  if (!msg.text.startsWith('/convertCurrency')) {
    bot.sendMessage(chatId, "Use `/convertCurrency amount USD to EUR` /n you can just copy it and change the inputs", { parse_mode: "Markdown" });
  }
});




