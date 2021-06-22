module.exports = {
    name: 'clear',
    description: 'apaga as mensagens',
    async execute(msg, args){
        if(!args[0]) return msg.reply('Coloca o tanto de mensagens que tu quer apagar!')
        if(isNaN(args[0])) return msg.reply('É pra colocar um número nessa porra!')

        if(args[0] > 100) return msg.reply('Tem que ser um número menor do que 100')
        if(args[0] < 1) return msg.reply('Tem que ser um número maior do que 0 o burro do caralho')

        await msg.channel.messages.fetch({limit: args[0]}).then(messages => {
            msg.channel.bulkDelete(messages);
        });
    }
} 