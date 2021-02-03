const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('Joyeux Anniversaire')
        .setDescription('[la chanson de l\'anniversaire](https://www.youtube.com/watch?v=pDn0lzevy6k)')
        .setColor('#FFFF00')
        .setAuthor('Tyra','https://i.pinimg.com/originals/f9/2b/c7/f92bc752c04c297d7489f517e9c6e7de.gif')
        .setImage('https://www.gifsanimes.com/data/media/1243/joyeux-anniversaire-image-animee-0001.gif')
        .setThumbnail('https://www.numerama.com/wp-content/uploads/2017/06/giphy-1.gif')
        .setFooter('Anniversaire')
        .setTimestamp()
        .setURL('https://www.google.com/search?client=opera-gx&q=non+je+rigole+fdp&sourceid=opera&ie=UTF-8&oe=UTF-8'))
    },
    name: 'hb'
}