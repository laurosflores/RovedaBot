const execute = (bot, msg, args) => {
  const queue = bot.queues.get(msg.guild.id);
  if (!queue) {
    return msg.reply("não tá tocando porra nenhuma");
  }
  queue.dispatcher.resume();
};

module.exports = {
  name: "resume",
  help: "Continua tocando a porra da música",
  execute,
};
