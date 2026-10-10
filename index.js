const { Telegraf } = require('telegraf');
const http = require('http');

// Render o‘chib qolmasligi uchun kichik veb-server
http.createServer((req, res) => {
  res.write("Bot ishlamoqda!");
  res.end();
}).listen(process.env.PORT || 3000);

// Telegram bot (TOKEN keyinchalik Render sozlamalariga kiritiladi)
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Salom! Men Render xostingida ishlayapman!'));
bot.on('text', (ctx) => ctx.reply(`Siz yozdingiz: ${ctx.message.text}`));

bot.launch();
