const execute = (bot, msg, args) => {
  const queue = bot.queues.get(msg.guild.id);
  if (!queue) {
    return msg.reply("Não tá tocando porra nenhuma");
  }
  queue.songs = [];
  bot.queues.set(msg.guild.id, queue);
  queue.dispatcher.end();
};

module.exports = {
  name: "stop",
  help: "Para a música pq tava uma merda",
  execute,
};
