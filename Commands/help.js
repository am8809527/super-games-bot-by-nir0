const { MessageEmbed } = require(`discord.js`);
const db = require('quick.db');
const config = require('../Config/bot.json');
const build = require('../Config/build.json');

module.exports = {
  name: "help",
  description: "Show The Bot Orders",
  cooldown: 5,
  aliases: [""],

  run: async (client, message, args) => {
    let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);
    if (Blacklist === "on") return message.channel.send(new MessageEmbed()
      .setColor(client.build.colors.err)
      .setDescription(client.build.emojis.err + " **You Got Blacklisted!**"));
    var prefix = await db.fetch(`prefix_${message.guild.id}`);
    if (prefix == null) prefix = config.bot.setting.main_prefix;
    let commands = message.client.commands.array();
    let embed = new MessageEmbed()
      .setTitle("**Bot Orders **" + build.emojis.done)
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      .setFooter(`Type: ${prefix}help <Command>  for more information!`)
      .setColor(build.colors.done);

    let ifargstruedothis = -1;

    switch (args[0]) {
      case "8ball":
        ifargstruedothis = 0;
        break;
      case "brand":
        ifargstruedothis = 1
        break;
      case "capitals":
        ifargstruedothis = 2
        break;
      case "coinflip":
        ifargstruedothis = 3
        break;
      case "cut":
        ifargstruedothis = 4
        break;
      case "emojis":
        ifargstruedothis = 5
        break;
      case "fast":
        ifargstruedothis = 6
        break;
      case "fkk":
        ifargstruedothis = 7
        break;
      case "flags":
        ifargstruedothis = 8
        break;
      case "fruits":
        ifargstruedothis = 9
        break;
      case "hack":
        ifargstruedothis = 10
        break;
      case "help":
        ifargstruedothis = 12
        break;
      case "hug":
        ifargstruedothis = 13
        break;
      case "kill":
        ifargstruedothis = 14
        break;
      case "kiss":
        ifargstruedothis = 15
        break;
      case "love":
        ifargstruedothis = 16
        break;
      case "math":
        ifargstruedothis = 17
        break;
      case "ping":
        ifargstruedothis = 18
        break;
      case "puzzle":
        ifargstruedothis = 19
        break;
      case "sara7a":
        ifargstruedothis = 20
        break;
      case "translate":
        ifargstruedothis = 21
        break;
      case "trash":
        ifargstruedothis = 22
        break;
      case "xo":
        ifargstruedothis = 23
        break;
      case "drake":
        ifargstruedothis = 24
        break;
      case "slap":
        ifargstruedothis = 25
        break;
      case "points":
        ifargstruedothis = 26
        break;
      case "top":
        ifargstruedothis = 27
        break;
      case "triggered":
        ifargstruedothis = 28
        break;
      case "bed":
        ifargstruedothis = 29
        break;
      case "delete":
        ifargstruedothis = 30
        break;
        case "egg":
        ifargstruedothis = 31
        break;
      default:
        commands.forEach((cmd) => {
          embed.addField(`**${prefix}${cmd.name}**`,`\`${cmd.description}\``,true)
        })
        let embed2 = new MessageEmbed()
      .setTitle("**Bot Orders **" + build.emojis.done)
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      .setFooter(`Type: ${prefix}help <Command>  for more information!`)
      .setColor(build.colors.done);
        if (message.member.hasPermission('ADMINISTRATOR')) {
          embed2.addField(`**${prefix}set-prefix**`,`\`Change The Bot Prefix\``, true)
        }
        if (config.dev.owner_id.includes(message.author.id)) {
          embed2.addField(`**${prefix}blacklist**`, `\`Give's Blacklist\``, true)
       embed2.addField(`**${prefix}unblacklist**`, `\`UnBlacklist\``, true)
        }
        
        let embed3 = new MessageEmbed()
      .setTitle("**Bot Orders **" + build.emojis.done)
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      .addField(`**${prefix}slap**`, `\`Slap Your بضان Frend\``, true)
      .addField(`**${prefix}xo**`, `\`Play Xo With Frends\``, true)
      .addField(`**${prefix}triggered**`, `\`Trigger Your Frend\``, true)
      .addField(`**${prefix}top**`, `\`See The Leaderboard\``, true)
      .addField(`**${prefix}trash**`, `\`Your Frend Is Trash\``, true)
      .addField(`**${prefix}translate**`, `\`Test Your Lang\``, true)
      
      .setFooter(`Type: ${prefix}help <Command>  for more information!`)
      .setColor(build.colors.done);

        if (!message.guild) {
          if (!args[0]) {
            message.react("✅");
          }
          return;
        }
        message.react("✅");
        message.author.send(embed).then(async(m) => {
        await message.author.send(embed3)
          message.author.send(embed2)
          message.channel.send(new MessageEmbed().setColor(build.colors.warn).setDescription(build.emojis.warn + ' **Done Sended The** `Help Menu` **In Your Dm**\!'))
        })
        break;
    }
    if (ifargstruedothis >= 0) {
      let aliases = commands[ifargstruedothis].aliases;
      if (aliases === undefined || !aliases) aliases = "No Aliases!";
      let cooldown = commands[ifargstruedothis].cooldown;
      if (cooldown === undefined || !cooldown) cooldown = "No Cooldown!";

      embed.addField(`**:notes: Aliases:**`, `\`${aliases}\``, true);
      embed.addField(`**:wrench: Cooldown:**`, `\`${cooldown}\``, true);
      message.channel.send(embed)
    }
  }
}
/**
 * @copyright Go't To NIR0
 */