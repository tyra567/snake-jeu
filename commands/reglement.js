const Discord = require('discord.js')

module.exports = {
    run: async (message, args) =>{
        if (!message.member.hasPermission('SEND_MESSAGE')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('TOS Discord')
        .setDescription('TOS Discord à respecter sous peine de ban définitif du serveur discord.')
        .setColor('RANDOM')
        .setAuthor('Tyra')
        .setImage('https://media2.giphy.com/media/HU0o58ry83dnS7d4fa/giphy.gif')
        .setThumbnail('')
        .setFooter('Règlement')
        .setTimestamp()
        .setURL('https://discord.com/terms'))
    },
    name: 'rg'
}