const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('Ben Laden')
        .setDescription('s/o les tours jummelles')
        .setColor('RANDOM')
        .setAuthor('Ben Laden')
        .setImage('https://i.skyrock.net/2761/13792761/pics/349264580.gif')
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/c/ca/Osama_bin_Laden_portrait.jpg')
        .setFooter('Ben Laden')
        .setTimestamp())
    },
    name: 'boum',
    help: {
        description: 'Cette commande permet d\'invoquer Ben Laden et de faire exploser les tours jummelles!! 💥'
    }
}