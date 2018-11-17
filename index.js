require("discord.js");
const tokenfile = require("./settings/config.json");
const bot = new Discord.Client(); // Bot в данном случее можно заменить на любое другое слово (на английском разумеется)

bot.login(tokenfile.token);
