const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const config = require('../Config/bot.json');
const build = require('../Config/build.json');

var x = [
  "🌚",
  "😂",
  "🥶",
  "😷",
  "🌻",
  "🌗",
  "✨",
  "🍐",
  "🚗",
  "💽"
];
var x2 = [
  "🌚",
  "😂",
  "🥶",
  "😷",
  "🌻",
  "🌗",
  "✨",
  "🍐",
  "🚗",
  "💽"
];

module.exports = {
  name: "emojis",
  description: "Thinking The Emoji",
  cooldown: 5,
  aliases: [""],
  time: "10",

  run: async (client, message, args) => {
    let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);
    if (Blacklist === "on") return message.channel.send(new MessageEmbed()
      .setColor(client.build.colors.err)
      .setDescription(client.build.emojis.err + " **You Got Blacklisted!**"));
    var prefix = await db.fetch(`prefix_${message.guild.id}`);
    if (prefix == null) prefix = config.bot.setting.main_prefix;
    var x3 = Math.floor(Math.random() * x.length);
    var emojis = new MessageEmbed()
      .setColor(build.colors.warn)
      .setImage(`${x[x3]}`, true)
      .setDescription(build.emojis.warn + `** You Have ` + module.exports.time + `s To Type The Correct Answer!**`, true);
    message.channel.send(emojis).then(() => {
      var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
        max: 1,
        time: module.exports.time * 1000,
        errors: ["time"]
      });
      r.catch(() => {
        return message.channel.send(new MessageEmbed()
          .setColor(build.colors.err)
          .setTitle(build.emojis.warn + " **Time Out!**")
          .setDescription(`**Time is end and no one type the correct answer**`));
      });

      r.then(async collected => {
        message.channel.send(new MessageEmbed()
          .setColor(build.emojis.done)
          .setDescription(`**${collected.first().author}** Has typed the correct answer ` + build.emojis.win))
        var points = await db.fetch(`points_${message.guild.id}_${collected.first().author.id}`);
        if (points == null) points = db.set(`points_${message.guild.id}_${collected.first().author.id}`, {
          user: collected.first().author.id,
          guild: collected.first().author.id,
          points: 0
        })
        else {
          db.add(`points_${message.guild.id}_${collected.first().author.id}.points`, 1)
        }
      }).catch(err => {
        console.log()
      })
    });
  }
};