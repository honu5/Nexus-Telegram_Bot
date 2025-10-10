# Currency Convertor Bot
A telegram bot built with node.js and JavaScript. The telegram bot we build helps user convert currencies,fetching the latest forex. The API used in this project is Frankfurter.

### Folder Structure

server/
├─ bot.js          
├─ services/ratesService.js
└─ utils/parser.js

tests/
  └─ parser.test.js
  
.env
package.json


# Quick Start

1.Install Dependencies

```bash
npm install
```
2.Set up Environment
```ini
BOT_TOKEN=your_telegram_bot_token
```

3. Run bot js using
 ```bash
     node server/bot.js
 ```

3.Go to the telegram @NexusCurrencyConvertorBot and Start bot using "/start" try commands like:

```bash
/convert 100 USD to EUR
```


Video demo: https://www.awesomescreenshot.com/video/45165217?key=dbc98b0579c3c4e5745ce84dc86969bf
