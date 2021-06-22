const playSong = require("./play").playSong;

const execute = (bot, msg, args) => {
  const queue = bot.queues.get(msg.guild.id);
  if (!queue) {
    return msg.reply("não tá tocando porra nenhuma");
  }

  if(queue) {
    msg.reply(`Vou pular essa bosta:thumbsup:`)
  }

  queue.songs.shift();
  bot.queues.set(msg.guild.id, queue);
  playSong(bot, msg, queue.songs[0]);
};

module.exports = {
  name: "skip",
  help: "Pula a música",
  execute,
};
