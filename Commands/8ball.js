const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const config = require('../Config/bot.json');
const build = require('../Config/build.json');

module.exports = {
  name: "8ball",
  description: "Ask The Magic 8ball",
  cooldown: 5,
  aliases: [""],

  run: async (client, message, args) => {
    let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);
    if (Blacklist === "on") return message.channel.send(new MessageEmbed()
      .setColor(client.build.colors.err)
      .setDescription(client.build.emojis.err + " **You Got Blacklisted!**"));
    var prefix = await db.fetch(`prefix_${message.guild.id}`);
    if (prefix == null) prefix = config.bot.setting.main_prefix;
    if (!args[0]) return message.reply("Please ask a full question!");
    let replies = ["Yes", "No.", "I don't know.", "Ask again later plez."];

    let result = Math.floor(Math.random() * replies.length);

    let ballembed = new MessageEmbed()
      .setAuthor(message.author.tag)
      .addField("Answer", replies[result]);

    message.channel.send(ballembed);
  }
};