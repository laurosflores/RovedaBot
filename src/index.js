const Discord = require("discord.js");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");

dotenv.config();

const bot = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
bot.commands = new Discord.Collection();
bot.queues = new Map();

const commandFiles = fs
  .readdirSync(path.join(__dirname, "/commands"))
  .filter((filename) => filename.endsWith(".js"));

for (var filename of commandFiles) {
  const command = require(`./commands/${filename}`);
  bot.commands.set(command.name, command);
}

bot.login(process.env.TOKEN);

bot.on("ready", function () {
  console.log(`To ligado nessa porra!!! ${bot.user.username}`);
});

bot.on("message", (msg) => {
  if (!msg.content.startsWith(process.env.PREFIX) || msg.author.bot) return;

  const args = msg.content.slice(process.env.PREFIX.length).split(" ");
  const command = args.shift();

//COMANDOS

  if(command === 'stop'){
    msg.reply('Vou parar essa porra:thumbsup:')
  }
  if(command === 'clear'){
    bot.commands.get('clear').execute(msg, args);//
  } 

  if(command === 'neyday'){
    msg.reply(`Hoje não é neyday
    https://prnt.sc/1qktxdd`)
  }

  if(command === 'druida'){
    msg.reply(`Armadura Mísera do Druida (Corrompido) 
    https://steamcommunity.com/market/listings/570/Corrupted%20Poor%20Armor%20of%20the%20Druid`)
  }
  if(command === 'comboio'){
    msg.reply(`BORA COMBOIO RAPAZIADA :sunglasses:
    https://prnt.sc/1iqqw8n `)
  }
  if(command === 'reactionrole'){
    bot.commands.get('reactionrole').execute(msg, args, Discord, bot);
  }

  //
  if(command === 'quem vai ganhar?'){
    var myArray = [
      "REIMS",
      "PARIS SAINT-GERMAIN",
    ];

    var randomItem = 
    myArray[Math.floor(Math.random()*myArray.length)];

    msg.reply(randomItem)
  }
 //


if(command === 'baldasso'){
  msg.reply(`Live Baldasso KTO a live mais interativa do Brasil
  https://www.youtube.com/channel/UC4QpkZzN08pFibmJAl213-w`)
}

if(command === 'balda'){
  var baldaArray = [
    "BALDASSO É FODA",
    "PREFIRO A MOMO",
    "PREFIRO O CÉSAR CIDADE DIAS",
    "PREFIRO O JB FILHO",
    "PREFIRO O TAYGOR",
    "BALDASSO É O CARALHO",
    "PREFIRO O VAGUINHA",
    "É O BALDA É NÃO ADIANTA"
  ]

  var balda = 
  baldaArray[Math.floor(Math.random()*baldaArray.length)];

  msg.reply(balda)
}




  //COMANDOS

  try {
    bot.commands.get(command).execute(bot, msg, args);
  } catch (e) {
    console.error(e);
  }
});
