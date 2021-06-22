const execute = (bot, msg, args) => {
  const queue = bot.queues.get(msg.guild.id);
  if (!queue) {
    return msg.reply("Não ta tocando porra nenhuma");
  }
  queue.dispatcher.pause();
};

module.exports = {
  name: "pause",
  help: "Pausa a porra da música pq tava uma merda",
  execute,
};
