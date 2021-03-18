const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const config = require('../Config/bot.json');
const build = require('../Config/build.json');

module.exports = {
  name: "ping",
  description: "See The Bot Ping",
  cooldown: 5,
  aliases: [""],

  run: async (client, message, args) => {
    let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);
    if (Blacklist === "on") return message.channel.send(new MessageEmbed()
      .setColor(client.build.colors.err)
      .setDescription(client.build.emojis.err + " **You Got Blacklisted!**"));
    var prefix = await db.fetch(`prefix_${message.guild.id}`);
    if (prefix == null) prefix = config.bot.setting.main_prefix;
    message.channel.send("pong!").then(m => m.edit(new MessageEmbed().setDescription(`\`\`\`js
Ping: ${client.ws.ping}
\`\`\``)))
  }
};