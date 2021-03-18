const { MessageAttachment, MessageEmbed } = require('discord.js');
const DIG = require("discord-image-generation");
const db = require('quick.db');
const config = require('../Config/bot.json');
const build = require('../Config/build.json');

module.exports = {
  name: "triggered",
  description: "Trigger Your Frend",
  cooldown: 5,
  aliases: ["trg"],

  run: async (client, message, args) => {
    let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);
    if (Blacklist === "on") return message.channel.send(new MessageEmbed()
      .setColor(client.build.colors.err)
      .setDescription(client.build.emojis.err + " **You Got Blacklisted!**"));
    var prefix = await db.fetch(`prefix_${message.guild.id}`);
    if (prefix == null) prefix = config.bot.setting.main_prefix;
        let user = message.mentions.users.first();
    if (!user) return message.channel.send(new MessageEmbed()
    .setDescription(build.emojis.warn + " Please mention sameone!")
    .setColor(build.colors.warn)
    .setColor(build.emojis.warn));

    const avatar2 = user.displayAvatarURL({ dynamic: true, format: 'png' });
    let img = await new DIG.Triggered().getImage(`${avatar2}`);

    let attach = new MessageAttachment(img, "Slap.gif");;

    message.channel.send(attach)
  }
};