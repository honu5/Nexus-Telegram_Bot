require(dotenv).config()

const TelegramBot=require('../server/bot.js')

const express=require('express')

const app=express()

app.use(express.json())

// const port=process.env.port

// app.listen(port,()=>{
//     console.log(`Server starting on ${port}`)
// })  a telegram bot
