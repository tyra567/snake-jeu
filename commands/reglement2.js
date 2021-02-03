const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('📜✧ Règlement ✧📜')
        .setDescription(`・Salons Textuels
        ➜・1. Soyez respectueux et accueillant envers les autres membres. Aucun cas d'attaques personnelles, d'irrespect, d'exclusion, de harcèlement, de doxxing ou d'arguments ne devrait se produire ici(à part si c’est du second degré).
        On a une certaine tolérance tout de même, mais tout abus sera sanctionnable.
        
        ➜・2. Du contenu NSFW. Les photos de profil, liens ou images NSFW (pornographie, gore etc.) ne sont pas interdits mais n’abusez pas sinon ça sera mute ou kick. Vous pouvez parler des sujets tels que la politique, la religion etc mais seulement en second degré.
        
        ➜・3. Vous pouvez spam mais il ne faut pas abuser. Exemple: les messages, emojis, murs de texte, chaînes et @mentions.
        
        ➜・4. Mettez les choses à leur place. Conservez les discussions dans leur salons de chat spécifiques, les publicités sont interdites, les commandes lié aux bots dans le salon: commandes , etc.
        
        ➜・5. Écoutez notre staff. Tenter de contourner les sanctions ou  avertissement du staff n'est pas autorisé. Les interdictions peuvent être contestées en cas de nécessaire besoin. Par ailleurs veuillez me signaler tout abus des modérateurs.`))
    },
    name: 'regle'
}