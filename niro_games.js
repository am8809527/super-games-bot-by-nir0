const express = require('express')///All Copyrights Go's To NIR0 & NIR0-V
const app = express()///All Copyrights Go's To NIR0 & NIR0-V
const port = 3000///All Copyrights Go's To NIR0 & NIR0-V

app.get('/', (req, res) => res.send(`All Copyrights Go's To NIR0 & NIR0-V`))///All Copyrights Go's To NIR0 & NIR0-V
app.listen(port, () => console.log(`All Copyrights Go's To NIR0 & NIR0-V`))///All Copyrights Go's To NIR0 & NIR0-V
///////////////////|

const Discord = require("discord.js");
const niro = new Discord.Client();///All Copyrights Go's To NIR0 & NIR0-V
niro.login(process.env.NIRO_TOKEN).catch(err => console.error(`[ Discord ] Worng Token :<`));///All Copyrights Go's To NIR0 & NIR0-V
const fs = require("fs");///All Copyrights Go's To NIR0 & NIR0-V
const prefix = process.env.NIRO_PREFIX;///All Copyrights Go's To NIR0 & NIR0-V
const points = JSON.parse(fs.readFileSync("./Database/points.json", "utf8"));///All Copyrights Go's To NIR0 & NIR0-V

/////////////////////|
niro.on("ready", async () => {
  console.log(`
    ::::::::::::::::::::::::::::::::::::::::::::::::::
    :                                                :
    : - bot name : ${niro.user.username}                            :
    :                                                :
    ::::::::::::::::::::::::::::::::::::::::::::::::::
    :                                                :
    : - server : ${niro.guilds.size}                                   :
    :                                                :
    ::::::::::::::::::::::::::::::::::::::::::::::::::
    :                                                :
    : - bot id : ${niro.user.id}                  :
    :                                                :
    ::::::::::::::::::::::::::::::::::::::::::::::::::
    :                                                :
    : - bot developer : @ニロ#3892                   :
    :                                                :
    ::::::::::::::::::::::::::::::::::::::::::::::::::

███╗░░██╗██╗██████╗░░█████╗░  ██╗░░░██╗
████╗░██║██║██╔══██╗██╔══██╗  ██║░░░██║
██╔██╗██║██║██████╔╝██║░░██║  ╚██╗░██╔╝
██║╚████║██║██╔══██╗██║░░██║  ░╚████╔╝░
██║░╚███║██║██║░░██║╚█████╔╝  ░░╚██╔╝░░
╚═╝░░╚══╝╚═╝╚═╝░░╚═╝░╚════╝░  ░░░╚═╝░░░
░██████╗░░█████╗░███╗░░░███╗███████╗███████╗
██╔════╝░██╔══██╗████╗░████║██╔════╝╚════██║
██║░░██╗░███████║██╔████╔██║█████╗░░░░███╔═╝
██║░░╚██╗██╔══██║██║╚██╔╝██║██╔══╝░░██╔══╝░░
╚██████╔╝██║░░██║██║░╚═╝░██║███████╗███████╗
░╚═════╝░╚═╝░░╚═╝╚═╝░░░░░╚═╝╚══════╝╚══════╝
    `)
  await niro.user.setActivity(`NIRO GAMES IS BACK`, {
    type: "COMPETING",
  })
});

let prefixes = JSON.parse(fs.readFileSync("./prefix.json", "utf8"));///All Copyrights Go's To NIR0 & NIR0-V
const dol = "All Copyrights Go's To NIR0 & NIR0-V";///All Copyrights Go's To NIR0 & NIR0-V
niro.on("message", niro_games => {///All Copyrights Go's To NIR0 & NIR0-V
  if (!niro_games.channel.guild) return;///All Copyrights Go's To NIR0 & NIR0-V
  if (niro_games.author.bot) return;///All Copyrights Go's To NIR0 & NIR0-V
  if (!prefixes[niro_games.guild.id])///All Copyrights Go's To NIR0 & NIR0-V
    prefixes[niro_games.guild.id] = {///All Copyrights Go's To NIR0 & NIR0-V
      prefix: process.env.PREFIX///All Copyrights Go's To NIR0 & NIR0-V
    };///All Copyrights Go's To NIR0 & NIR0-V
  var prefix = prefixes[niro_games.guild.id].prefix;///All Copyrights Go's To NIR0 & NIR0-V
  var setp = prefixes[niro_games.guild.id];///All Copyrights Go's To NIR0 & NIR0-V
  if (niro_games.content.startsWith(prefix + "setp")) {///All Copyrights Go's To NIR0 & NIR0-V
    if (!niro_games.member.hasPermission(`MANAGE_GUILD`))///All Copyrights Go's To NIR0 & NIR0-V
      return niro_games.reply(///All Copyrights Go's To NIR0 & NIR0-V
        `**:x: Error: You do not have the required permissions: Manage Server.**`///All Copyrights Go's To NIR0 & NIR0-V
      );///All Copyrights Go's To NIR0 & NIR0-V

    let args = niro_games.content.split(" ").slice(1);///All Copyrights Go's To NIR0 & NIR0-V

    if (!args.join(" "))///All Copyrights Go's To NIR0 & NIR0-V
      return niro_games.reply(`**:x: Error: Say The Prefix Please.**`);///All Copyrights Go's To NIR0 & NIR0-V
    const embed = new Discord.RichEmbed()///All Copyrights Go's To NIR0 & NIR0-V

      .setColor("BLACK")///All Copyrights Go's To NIR0 & NIR0-V
      .setTitle("Prefix Set!")///All Copyrights Go's To NIR0 & NIR0-V
      .setDescription(`**Set to ${args[0]}**`);///All Copyrights Go's To NIR0 & NIR0-V
    niro_games.channel.send(embed);///All Copyrights Go's To NIR0 & NIR0-V
    setp.prefix = args.join();///All Copyrights Go's To NIR0 & NIR0-V
  }

  fs.writeFile("./prefix.json", JSON.stringify(prefixes), err => {///All Copyrights Go's To NIR0 & NIR0-V
    if (err) console.error(err);///All Copyrights Go's To NIR0 & NIR0-V
  });///All Copyrights Go's To NIR0 & NIR0-V
});///All Copyrights Go's To NIR0 & NIR0-V

niro.on("message", message => {
  if (message.channel.type === "dm") {

    message.channel.startTyping();
    setTimeout(() => {
      message.channel.stopTyping();
    }, Math.random() * (1 - 3) + 1 * 1000);

  }
});

niro.on("message", async niro_help => {
  if (!prefixes[niro_help.guild.id])///All Copyrights Go's To NIR0 & NIR0-V
    prefixes[niro_help.guild.id] = {///All Copyrights Go's To NIR0 & NIR0-V
      prefix: process.env.PREFIX///All Copyrights Go's To NIR0 & NIR0-V
    };///All Copyrights Go's To NIR0 & NIR0-V

  var prefix = prefixes[niro_help.guild.id].prefix;///All Copyrights Go's To NIR0 & NIR0-V
  if (niro_help.content.startsWith(prefix + "help")) {
    niro_help.channel.send(new Discord.RichEmbed().setColor("GREEN").setFooter("NIRO_GAMEZ IS BACK").setAuthor("~~=~~ Bot Orders | أوامر البوت ~~=~~").setDescription(`**
╭━━┳━━┳━━┳━━┳━━┳━━┳━━┳━━┳━━┳━━┳━━╮
╰━━┻━━┻━━┻━━┻━━┻━━┻━━┻━━┻━━┻━━┻━━╯

╭━╮╱╭┳━━┳━━━┳━━━╮
┃┃╰╮┃┣┫┣┫╭━╮┃╭━╮┃
┃╭╮╰╯┃┃┃┃╰━╯┃┃╱┃┃
┃┃╰╮┃┃┃┃┃╭╮╭┫┃╱┃┃
┃┃╱┃┃┣┫┣┫┃┃╰┫╰━╯┃
╰╯╱╰━┻━━┻╯╰━┻━━━╯
╭━━━┳━━━┳━╮╭━┳━━━┳━━━━╮
┃╭━╮┃╭━╮┃┃╰╯┃┃╭━━┻━━╮━┃
┃┃╱╰┫┃╱┃┃╭╮╭╮┃╰━━╮╱╭╯╭╯
┃┃╭━┫╰━╯┃┃┃┃┃┃╭━━╯╭╯╭╯
┃╰┻━┃╭━╮┃┃┃┃┃┃╰━━┳╯━╰━╮
╰━━━┻╯╱╰┻╯╰╯╰┻━━━┻━━━━╯

╭━━┳━━┳━━┳━━┳━━┳━━┳━━┳━━┳━━┳━━┳━━╮
╰━━┻━━┻━━┻━━┻━━┻━━┻━━┻━━┻━━┻━━┻━━╯

🎮 - ${prefix}fkk - فكك

🎮 - ${prefix}fast - اسرع

🎮 - ${prefix}math - رياضيات

🎮 - ${prefix}puzzle - لغز

🎮 - ${prefix}xo

🎮 - ${prefix}rps

🎮 - ${prefix}capitals - عواصم

🎮 - ${prefix}brand - شعار

🎮 - ${prefix}emoji - ايموجي

🎮 - ${prefix}flag - اعلام

🎮 - ${prefix}cut - كت

🎮 - ${prefix}8ball

🎮 - ${prefix}frots - فواكه

🎮 - ${prefix}sara7a - صراحه

🎮 - ${prefix}tanslation - ترجمه

╭━━┳━━┳━━┳━━┳━━┳━━┳━━┳━━┳━━┳━━┳━━╮
╰━━┻━━┻━━┻━━┻━━┻━━┻━━┻━━┻━━┻━━┻━━╯

🎭 - ${prefix}kill - قتل

🎭 - ${prefix}hug - حضن

🎭 - ${prefix}coinflip - ملك و كتابه

🎭 - ${prefix}love - حب

🎭 - ${prefix}hack - تهكير

🎭 - ${prefix}kiss - بوسه

╭━━┳━━┳━━┳━━┳━━┳━━┳━━┳━━┳━━┳━━┳━━╮
╰━━┻━━┻━━┻━━┻━━┻━━┻━━┻━━┻━━┻━━┻━━╯

🛠️ - ${prefix}ping

🛠️ - ${prefix}setp

╭━━┳━━┳━━┳━━┳━━┳━━┳━━┳━━┳━━┳━━┳━━╮
╰━━┻━━┻━━┻━━┻━━┻━━┻━━┻━━┻━━┻━━┻━━╯
**`))
      .then(m => {
        niro_help.react('✅');
      })
      .catch(() => {
        niro_help.react('❌');
      });
    console.log(`
      
█████████████████████████████████████████████████████████████████████
█░░░░░░██████████░░░░░░█░░░░░░░░░░█░░░░░░░░░░░░░░░░███░░░░░░░░░░░░░░█
█░░▄▀░░░░░░░░░░██░░▄▀░░█░░▄▀▄▀▄▀░░█░░▄▀▄▀▄▀▄▀▄▀▄▀░░███░░▄▀▄▀▄▀▄▀▄▀░░█
█░░▄▀▄▀▄▀▄▀▄▀░░██░░▄▀░░█░░░░▄▀░░░░█░░▄▀░░░░░░░░▄▀░░███░░▄▀░░░░░░▄▀░░█
█░░▄▀░░░░░░▄▀░░██░░▄▀░░███░░▄▀░░███░░▄▀░░████░░▄▀░░███░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░██░░▄▀░░███░░▄▀░░███░░▄▀░░░░░░░░▄▀░░███░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░██░░▄▀░░███░░▄▀░░███░░▄▀▄▀▄▀▄▀▄▀▄▀░░███░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░██░░▄▀░░███░░▄▀░░███░░▄▀░░░░░░▄▀░░░░███░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░▄▀░░░░░░▄▀░░███░░▄▀░░███░░▄▀░░██░░▄▀░░█████░░▄▀░░██░░▄▀░░█
█░░▄▀░░██░░▄▀▄▀▄▀▄▀▄▀░░█░░░░▄▀░░░░█░░▄▀░░██░░▄▀░░░░░░█░░▄▀░░░░░░▄▀░░█
█░░▄▀░░██░░░░░░░░░░▄▀░░█░░▄▀▄▀▄▀░░█░░▄▀░░██░░▄▀▄▀▄▀░░█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░░░░░██████████░░░░░░█░░░░░░░░░░█░░░░░░██░░░░░░░░░░█░░░░░░░░░░░░░░█
█████████████████████████████████████████████████████████████████████
███████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
█░░░░░░░░░░░░███░░░░░░░░░░░░░░█░░░░░░██░░░░░░█░░░░░░░░░░░░░░█░░░░░░█████████░░░░░░░░░░░░░░█░░░░░░██████████░░░░░░█░░░░░░░░░░░░░░█░░░░░░██████████░░░░░░█░░░░░░░░░░░░░░█
█░░▄▀▄▀▄▀▄▀░░░░█░░▄▀▄▀▄▀▄▀▄▀░░█░░▄▀░░██░░▄▀░░█░░▄▀▄▀▄▀▄▀▄▀░░█░░▄▀░░█████████░░▄▀▄▀▄▀▄▀▄▀░░█░░▄▀░░░░░░░░░░░░░░▄▀░░█░░▄▀▄▀▄▀▄▀▄▀░░█░░▄▀░░░░░░░░░░██░░▄▀░░█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░▄▀░░░░▄▀▄▀░░█░░▄▀░░░░░░░░░░█░░▄▀░░██░░▄▀░░█░░▄▀░░░░░░░░░░█░░▄▀░░█████████░░▄▀░░░░░░▄▀░░█░░▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀░░█░░▄▀░░░░░░░░░░█░░▄▀▄▀▄▀▄▀▄▀░░██░░▄▀░░█░░░░░░▄▀░░░░░░█
█░░▄▀░░██░░▄▀░░█░░▄▀░░█████████░░▄▀░░██░░▄▀░░█░░▄▀░░█████████░░▄▀░░█████████░░▄▀░░██░░▄▀░░█░░▄▀░░░░░░▄▀░░░░░░▄▀░░█░░▄▀░░█████████░░▄▀░░░░░░▄▀░░██░░▄▀░░█████░░▄▀░░█████
█░░▄▀░░██░░▄▀░░█░░▄▀░░░░░░░░░░█░░▄▀░░██░░▄▀░░█░░▄▀░░░░░░░░░░█░░▄▀░░█████████░░▄▀░░██░░▄▀░░█░░▄▀░░██░░▄▀░░██░░▄▀░░█░░▄▀░░░░░░░░░░█░░▄▀░░██░░▄▀░░██░░▄▀░░█████░░▄▀░░█████
█░░▄▀░░██░░▄▀░░█░░▄▀▄▀▄▀▄▀▄▀░░█░░▄▀░░██░░▄▀░░█░░▄▀▄▀▄▀▄▀▄▀░░█░░▄▀░░█████████░░▄▀░░██░░▄▀░░█░░▄▀░░██░░▄▀░░██░░▄▀░░█░░▄▀▄▀▄▀▄▀▄▀░░█░░▄▀░░██░░▄▀░░██░░▄▀░░█████░░▄▀░░█████
█░░▄▀░░██░░▄▀░░█░░▄▀░░░░░░░░░░█░░▄▀░░██░░▄▀░░█░░▄▀░░░░░░░░░░█░░▄▀░░█████████░░▄▀░░██░░▄▀░░█░░▄▀░░██░░░░░░██░░▄▀░░█░░▄▀░░░░░░░░░░█░░▄▀░░██░░▄▀░░██░░▄▀░░█████░░▄▀░░█████
█░░▄▀░░██░░▄▀░░█░░▄▀░░█████████░░▄▀▄▀░░▄▀▄▀░░█░░▄▀░░█████████░░▄▀░░█████████░░▄▀░░██░░▄▀░░█░░▄▀░░██████████░░▄▀░░█░░▄▀░░█████████░░▄▀░░██░░▄▀░░░░░░▄▀░░█████░░▄▀░░█████
█░░▄▀░░░░▄▀▄▀░░█░░▄▀░░░░░░░░░░█░░░░▄▀▄▀▄▀░░░░█░░▄▀░░░░░░░░░░█░░▄▀░░░░░░░░░░█░░▄▀░░░░░░▄▀░░█░░▄▀░░██████████░░▄▀░░█░░▄▀░░░░░░░░░░█░░▄▀░░██░░▄▀▄▀▄▀▄▀▄▀░░█████░░▄▀░░█████
█░░▄▀▄▀▄▀▄▀░░░░█░░▄▀▄▀▄▀▄▀▄▀░░███░░░░▄▀░░░░███░░▄▀▄▀▄▀▄▀▄▀░░█░░▄▀▄▀▄▀▄▀▄▀░░█░░▄▀▄▀▄▀▄▀▄▀░░█░░▄▀░░██████████░░▄▀░░█░░▄▀▄▀▄▀▄▀▄▀░░█░░▄▀░░██░░░░░░░░░░▄▀░░█████░░▄▀░░█████
█░░░░░░░░░░░░███░░░░░░░░░░░░░░█████░░░░░░█████░░░░░░░░░░░░░░█░░░░░░░░░░░░░░█░░░░░░░░░░░░░░█░░░░░░██████████░░░░░░█░░░░░░░░░░░░░░█░░░░░░██████████░░░░░░█████░░░░░░█████
███████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████
      `)
  }
})
fs.writeFile("./prefix.json", JSON.stringify(prefixes), err => {///All Copyrights Go's To NIR0 & NIR0-V
  if (err) console.error(err);///All Copyrights Go's To NIR0 & NIR0-V
});///All Copyrights Go's To NIR0 & NIR0-V
/////////////////////|

niro.on("message", async niro_games => {///All Copyrights Go's To NIR0 & NIR0-V
  if (!prefixes[niro_games.guild.id])///All Copyrights Go's To NIR0 & NIR0-V
    prefixes[niro_games.guild.id] = {///All Copyrights Go's To NIR0 & NIR0-V
      prefix: process.env.PREFIX///All Copyrights Go's To NIR0 & NIR0-V
    };///All Copyrights Go's To NIR0 & NIR0-V

  var prefix = prefixes[niro_games.guild.id].prefix;///All Copyrights Go's To NIR0 & NIR0-V
  if (!niro_games.channel.guild) return;///All Copyrights Go's To NIR0 & NIR0-V
  if (niro_games.content.startsWith(prefix + "ping")) {///All Copyrights Go's To NIR0 & NIR0-V
    if (!niro_games.channel.guild) return;///All Copyrights Go's To NIR0 & NIR0-V
    var msg = `${Date.now() - niro_games.createdTimestamp}`;///All Copyrights Go's To NIR0 & NIR0-V
    var api = `${Math.round(niro.ping)}`;///All Copyrights Go's To NIR0 & NIR0-V
    if (niro_games.author.bot) return;///All Copyrights Go's To NIR0 & NIR0-V
    let embed = new Discord.RichEmbed()///All Copyrights Go's To NIR0 & NIR0-V
      .setAuthor(niro_games.author.username, niro_games.author.avatarURL)///All Copyrights Go's To NIR0 & NIR0-V
      .addField("**Time Taken:**", msg + " ms 📶 ")///All Copyrights Go's To NIR0 & NIR0-V
      .addField("**WebSocket:**", api + " ms 📶 ")///All Copyrights Go's To NIR0 & NIR0-V
      .setTimestamp();///All Copyrights Go's To NIR0 & NIR0-V
    niro_games.channel.send({ embed: embed });///All Copyrights Go's To NIR0 & NIR0-V
  }///All Copyrights Go's To NIR0 & NIR0-V
});///All Copyrights Go's To NIR0 & NIR0-V
fs.writeFile("./prefix.json", JSON.stringify(prefixes), err => {///All Copyrights Go's To NIR0 & NIR0-V
  if (err) console.error(err);///All Copyrights Go's To NIR0 & NIR0-V
});///All Copyrights Go's To NIR0 & NIR0-V

niro.on("message", niro_games => {///All Copyrights Go's To NIR0 & NIR0-V
  if (!prefixes[niro_games.guild.id])///All Copyrights Go's To NIR0 & NIR0-V
    prefixes[niro_games.guild.id] = {///All Copyrights Go's To NIR0 & NIR0-V
      prefix: process.env.PREFIX///All Copyrights Go's To NIR0 & NIR0-V
    };///All Copyrights Go's To NIR0 & NIR0-V

  var prefix = prefixes[niro_games.guild.id].prefix;///All Copyrights Go's To NIR0 & NIR0-V
  if (///All Copyrights Go's To NIR0 & NIR0-V
    niro_games.content == prefix + "fkk" ||///All Copyrights Go's To NIR0 & NIR0-V
    niro_games.content == prefix + "فكك"///All Copyrights Go's To NIR0 & NIR0-V
  ) {///All Copyrights Go's To NIR0 & NIR0-V
    var x = ["https://media.discordapp.net/attachments/798926497490010112/798926550124462110/2021-47-13_04__47__35.png", "https://cdn.discordapp.com/attachments/798926497490010112/798926555040055296/2021-43-13_04__43__14.png", "https://cdn.discordapp.com/attachments/798926497490010112/798926555811282954/2021-45-13_04__45__08.png", "https://cdn.discordapp.com/attachments/798926497490010112/798926559041814528/2021-45-13_04__45__27.png", "https://cdn.discordapp.com/attachments/798926497490010112/798926546609242162/2021-47-13_04__47__18.png", "https://cdn.discordapp.com/attachments/798926497490010112/798926561549615174/2021-45-13_04__45__42.png", "https://cdn.discordapp.com/attachments/798926497490010112/798926565554913290/2021-45-13_04__45__50.png", "https://cdn.discordapp.com/attachments/798926497490010112/798926564728635402/2021-46-13_04__46__05.png", "https://cdn.discordapp.com/attachments/798926497490010112/798926565475876874/2021-47-13_04__47__06.png"];///All Copyrights Go's To NIR0 & NIR0-V
    var x2 = ["ا ل ق م د", "ا ل ق م ر", "ح م ا د ه", "ا ل ف ر ع و ن", "ا خ و ا ت ي", "م ع ك ر و ن ه", "ب ي ض", "ا ل م و ت", "ن ي ر و"]///All Copyrights Go's To NIR0 & NIR0-V
    var x3 = Math.floor(Math.random() * x.length);///All Copyrights Go's To NIR0 & NIR0-V
    var brand = new Discord.RichEmbed()///All Copyrights Go's To NIR0 & NIR0-V
      .setImage(`${x[x3]}`, true)///All Copyrights Go's To NIR0 & NIR0-V
      .setTitle(`**اسرع شخص يرسل تفكيك الكلمة خلال __10__ ثواني**`, true);///All Copyrights Go's To NIR0 & NIR0-V

    niro_games.channel.sendEmbed(brand).then(msg1 => {///All Copyrights Go's To NIR0 & NIR0-V
      var r = niro_games.channel.awaitMessages(msg => msg.content == x2[x3], {///All Copyrights Go's To NIR0 & NIR0-V
        maxMatches: 1,///All Copyrights Go's To NIR0 & NIR0-V
        time: 20000,///All Copyrights Go's To NIR0 & NIR0-V
        errors: ["time"]///All Copyrights Go's To NIR0 & NIR0-V
      });///All Copyrights Go's To NIR0 & NIR0-V
      r.catch(() => {///All Copyrights Go's To NIR0 & NIR0-V
        return niro_games.channel///All Copyrights Go's To NIR0 & NIR0-V
          .send(///All Copyrights Go's To NIR0 & NIR0-V
            new Discord.RichEmbed()///All Copyrights Go's To NIR0 & NIR0-V
              .setTitle(`**:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح الصحيحة هيا __${x2[x3]}__ **`)
          );///All Copyrights Go's To NIR0 & NIR0-V
      });///All Copyrights Go's To NIR0 & NIR0-V

      r.then(collected => {///All Copyrights Go's To NIR0 & NIR0-V
        niro_games.channel.send(`${collected.first().author}`)
        niro_games.channel.send(///All Copyrights Go's To NIR0 & NIR0-V
          new Discord.RichEmbed()///All Copyrights Go's To NIR0 & NIR0-V
            .setTitle(` لقد قمت بأرسال التفكيك في الوقت المناسب`)///All Copyrights Go's To NIR0 & NIR0-V
        );///All Copyrights Go's To NIR0 & NIR0-V
      });///All Copyrights Go's To NIR0 & NIR0-V
    });///All Copyrights Go's To NIR0 & NIR0-V
  }///All Copyrights Go's To NIR0 & NIR0-V
});///All Copyrights Go's To NIR0 & NIR0-V
fs.writeFile("./prefix.json", JSON.stringify(prefixes), err => {///All Copyrights Go's To NIR0 & NIR0-V
  if (err) console.error(err);///All Copyrights Go's To NIR0 & NIR0-V
});///All Copyrights Go's To NIR0 & NIR0-V

niro.on("message", niro_games => {///All Copyrights Go's To NIR0 & NIR0-V
  if (!prefixes[niro_games.guild.id])///All Copyrights Go's To NIR0 & NIR0-V
    prefixes[niro_games.guild.id] = {///All Copyrights Go's To NIR0 & NIR0-V
      prefix: process.env.PREFIX///All Copyrights Go's To NIR0 & NIR0-V
    };///All Copyrights Go's To NIR0 & NIR0-V

  var prefix = prefixes[niro_games.guild.id].prefix;///All Copyrights Go's To NIR0 & NIR0-V
  if (///All Copyrights Go's To NIR0 & NIR0-V
    niro_games.content == prefix + "puzzle" ||///All Copyrights Go's To NIR0 & NIR0-V
    niro_games.content == prefix + "لغز"///All Copyrights Go's To NIR0 & NIR0-V
  ) {///All Copyrights Go's To NIR0 & NIR0-V
    var x = ["https://cdn.discordapp.com/attachments/798926497490010112/798944666762477588/PicsArt_01-13-06.00.32.png", "https://cdn.discordapp.com/attachments/798926497490010112/798945106409160764/PicsArt_01-13-06.02.21.png", "https://cdn.discordapp.com/attachments/798926497490010112/798942961655611412/PicsArt_01-13-05.52.59.png", "https://cdn.discordapp.com/attachments/798926497490010112/798943832401379338/PicsArt_01-13-05.57.15.png", "https://cdn.discordapp.com/attachments/798926497490010112/798941596015132712/1610551137976.png"];///All Copyrights Go's To NIR0 & NIR0-V
    var x2 = ["تموز", "المسمار", "البيضه", "العمر", "السلحفة"]///All Copyrights Go's To NIR0 & NIR0-V
    var x3 = Math.floor(Math.random() * x.length);///All Copyrights Go's To NIR0 & NIR0-V
    var brand = new Discord.RichEmbed()///All Copyrights Go's To NIR0 & NIR0-V
      .setImage(`${x[x3]}`, true)///All Copyrights Go's To NIR0 & NIR0-V
      .setTitle(`**اسرع شخص يحل الغز في خلال __10__ ثواني**`);///All Copyrights Go's To NIR0 & NIR0-V

    niro_games.channel.sendEmbed(brand).then(msg1 => {///All Copyrights Go's To NIR0 & NIR0-V
      var r = niro_games.channel.awaitMessages(msg => msg.content == x2[x3], {///All Copyrights Go's To NIR0 & NIR0-V
        maxMatches: 1,///All Copyrights Go's To NIR0 & NIR0-V
        time: 20000,///All Copyrights Go's To NIR0 & NIR0-V
        errors: ["time"]///All Copyrights Go's To NIR0 & NIR0-V
      });///All Copyrights Go's To NIR0 & NIR0-V
      r.catch(() => {///All Copyrights Go's To NIR0 & NIR0-V
        return niro_games.channel///All Copyrights Go's To NIR0 & NIR0-V
          .send(///All Copyrights Go's To NIR0 & NIR0-V
            new Discord.RichEmbed()///All Copyrights Go's To NIR0 & NIR0-V
              .setTitle(`**:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح الصحيحة هيا __${x2[x3]}__ **`, true)///All Copyrights Go's To NIR0 & NIR0-V
          );///All Copyrights Go's To NIR0 & NIR0-V
      });///All Copyrights Go's To NIR0 & NIR0-V

      r.then(collected => {///All Copyrights Go's To NIR0 & NIR0-V
        niro_games.channel.send(`${collected.first().author}`)
        niro_games.channel.send(///All Copyrights Go's To NIR0 & NIR0-V
          new Discord.RichEmbed()///All Copyrights Go's To NIR0 & NIR0-V
            .setTitle(`**لقد قمت باحل الغز في الوقت المناسب**`)///All Copyrights Go's To NIR0 & NIR0-V
        );///All Copyrights Go's To NIR0 & NIR0-V
      });///All Copyrights Go's To NIR0 & NIR0-V
    });///All Copyrights Go's To NIR0 & NIR0-V
  }
});
fs.writeFile("./prefix.json", JSON.stringify(prefixes), err => {///All Copyrights Go's To NIR0 & NIR0-V
  if (err) console.error(err);///All Copyrights Go's To NIR0 & NIR0-V
});///All Copyrights Go's To NIR0 & NIR0-V

niro.on("message", niro_games => {///All Copyrights Go's To NIR0 & NIR0-V
  if (!prefixes[niro_games.guild.id])///All Copyrights Go's To NIR0 & NIR0-V
    prefixes[niro_games.guild.id] = {///All Copyrights Go's To NIR0 & NIR0-V
      prefix: process.env.PREFIX///All Copyrights Go's To NIR0 & NIR0-V
    };///All Copyrights Go's To NIR0 & NIR0-V

  var prefix = prefixes[niro_games.guild.id].prefix;///All Copyrights Go's To NIR0 & NIR0-V
  if (///All Copyrights Go's To NIR0 & NIR0-V
    niro_games.content == prefix + "fast" ||///All Copyrights Go's To NIR0 & NIR0-V
    niro_games.content == prefix + "اسرع"///All Copyrights Go's To NIR0 & NIR0-V
  ) {//"1","2","3","4","5","6","7","8","9"
    var x = ["https://cdn.discordapp.com/attachments/798926497490010112/798948125607854080/2021-10-13_06__10__31.png", "https://cdn.discordapp.com/attachments/798926497490010112/798948132149788692/2021-10-13_06__10__50.png", "https://cdn.discordapp.com/attachments/798926497490010112/798948138585030656/2021-11-13_06__11__14.png", "https://cdn.discordapp.com/attachments/798926497490010112/798948139226628099/2021-11-13_06__11__56.png", "https://cdn.discordapp.com/attachments/798926497490010112/798948142732410920/2021-12-13_06__12__14.png", "https://cdn.discordapp.com/attachments/798926497490010112/798948145425022996/2021-12-13_06__12__26.png", "https://cdn.discordapp.com/attachments/798926497490010112/798948147153207316/2021-14-13_06__14__14.png7", "https://cdn.discordapp.com/attachments/798926497490010112/798948146418810890/2021-12-13_06__12__52.png", "https://cdn.discordapp.com/attachments/798926497490010112/798948145437736980/2021-12-13_06__12__36.png"];///All Copyrights Go's To NIR0 & NIR0-V
    var x2 = ["نيرو", "القمر", "المحلة", "نار", "سرير", "قولون", "الأسماعيليه", "القاهره", "الأسكندر"]///All Copyrights Go's To NIR0 & NIR0-V
    var x3 = Math.floor(Math.random() * x.length);///All Copyrights Go's To NIR0 & NIR0-V
    var brand = new Discord.RichEmbed()///All Copyrights Go's To NIR0 & NIR0-V
      .setImage(`${x[x3]}`)///All Copyrights Go's To NIR0 & NIR0-V
      .setTitle(`**اسرع شخص يرسل العاصمه خلال __10__ ثواني**`);///All Copyrights Go's To NIR0 & NIR0-V
    ///All Copyrights Go's To NIR0 & NIR0-V
    niro_games.channel.sendEmbed(brand).then(msg1 => {///All Copyrights Go's To NIR0 & NIR0-V
      var r = niro_games.channel.awaitMessages(msg => msg.content == x2[x3], {///All Copyrights Go's To NIR0 & NIR0-V
        maxMatches: 1,///All Copyrights Go's To NIR0 & NIR0-V
        time: 20000,///All Copyrights Go's To NIR0 & NIR0-V
        errors: ["time"]///All Copyrights Go's To NIR0 & NIR0-V
      });///All Copyrights Go's To NIR0 & NIR0-V
      r.catch(() => {///All Copyrights Go's To NIR0 & NIR0-V
        return niro_games.channel///All Copyrights Go's To NIR0 & NIR0-V
          .send(///All Copyrights Go's To NIR0 & NIR0-V
            new Discord.RichEmbed()///All Copyrights Go's To NIR0 & NIR0-V
              .setTitle(`**:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح الصحيحة هيا __${x2[x3]}__ **`)///All Copyrights Go's To NIR0 & NIR0-V
          );///All Copyrights Go's To NIR0 & NIR0-V
      });///All Copyrights Go's To NIR0 & NIR0-V

      r.then(collected => {///All Copyrights Go's To NIR0 & NIR0-V
        niro_games.channel.send(`${collected.first().author}`)
        niro_games.channel.send(///All Copyrights Go's To NIR0 & NIR0-V
          new Discord.RichEmbed()///All Copyrights Go's To NIR0 & NIR0-V
            .setTitle(`**لقد قمت بأرسال الكلمة في الوقت المناسب**`)///All Copyrights Go's To NIR0 & NIR0-V
        );///All Copyrights Go's To NIR0 & NIR0-V
      });///All Copyrights Go's To NIR0 & NIR0-V
    });///All Copyrights Go's To NIR0 & NIR0-V
  }///All Copyrights Go's To NIR0 & NIR0-V
});///All Copyrights Go's To NIR0 & NIR0-V
fs.writeFile("./prefix.json", JSON.stringify(prefixes), err => {///All Copyrights Go's To NIR0 & NIR0-V
  if (err) console.error(err);///All Copyrights Go's To NIR0 & NIR0-V
});///All Copyrights Go's To NIR0 & NIR0-V

niro.on("message", niro_games => {///All Copyrights Go's To NIR0 & NIR0-V
  if (!prefixes[niro_games.guild.id])///All Copyrights Go's To NIR0 & NIR0-V
    prefixes[niro_games.guild.id] = {///All Copyrights Go's To NIR0 & NIR0-V
      prefix: process.env.PREFIX///All Copyrights Go's To NIR0 & NIR0-V
    };///All Copyrights Go's To NIR0 & NIR0-V

  var prefix = prefixes[niro_games.guild.id].prefix;///All Copyrights Go's To NIR0 & NIR0-V
  if (///All Copyrights Go's To NIR0 & NIR0-V///All Copyrights Go's To NIR0 & NIR0-V
    niro_games.content == prefix + "math" ||///All Copyrights Go's To NIR0 & NIR0-V
    niro_games.content == prefix + "رياضيات"///All Copyrights Go's To NIR0 & NIR0-V
  ) {///All Copyrights Go's To NIR0 & NIR0-V
    var x = ["https://cdn.discordapp.com/attachments/798926497490010112/798949965610090567/2021-21-13_06__21__41.png", "https://cdn.discordapp.com/attachments/798926497490010112/798950267521466398/2021-23-13_06__23__00.png", "https://media.discordapp.net/attachments/798926497490010112/798950456050843668/2021-23-13_06__23__41.png", "https://cdn.discordapp.com/attachments/798926497490010112/798950748809461770/2021-24-13_06__24__51.png", "https://cdn.discordapp.com/attachments/798926497490010112/798950982905888809/2021-25-13_06__25__50.png"];///All Copyrights Go's To NIR0 & NIR0-V
    var x2 = ["2000", "26", "14", "5.3", "12"]///All Copyrights Go's To NIR0 & NIR0-V
    var x3 = Math.floor(Math.random() * x.length);///All Copyrights Go's To NIR0 & NIR0-V
    var brand = new Discord.RichEmbed()///All Copyrights Go's To NIR0 & NIR0-V
      .setImage(`${x[x3]}`)///All Copyrights Go's To NIR0 & NIR0-V
      .setTitle(`**اسرع شخص يرسل الحل خلال __10__ ثواني**`);///All Copyrights Go's To NIR0 & NIR0-V

    niro_games.channel.sendEmbed(brand).then(msg1 => {///All Copyrights Go's To NIR0 & NIR0-V
      var r = niro_games.channel.awaitMessages(msg => msg.content == x2[x3], {///All Copyrights Go's To NIR0 & NIR0-V
        maxMatches: 1,///All Copyrights Go's To NIR0 & NIR0-V
        time: 20000,///All Copyrights Go's To NIR0 & NIR0-V
        errors: ["time"]///All Copyrights Go's To NIR0 & NIR0-V
      });///All Copyrights Go's To NIR0 & NIR0-V
      r.catch(() => {///All Copyrights Go's To NIR0 & NIR0-V
        return niro_games.channel///All Copyrights Go's To NIR0 & NIR0-V
          .send(///All Copyrights Go's To NIR0 & NIR0-V
            new Discord.RichEmbed()///All Copyrights Go's To NIR0 & NIR0-V
              .setTitle(`**:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح الصحيحة هيا __${x2[x3]}__ **`)///All Copyrights Go's To NIR0 & NIR0-V
          );///All Copyrights Go's To NIR0 & NIR0-V
      });///All Copyrights Go's To NIR0 & NIR0-V

      r.then(collected => {///All Copyrights Go's To NIR0 & NIR0-V
        niro_games.channel.send(`${collected.first().author}`)
        niro_games.channel.send(///All Copyrights Go's To NIR0 & NIR0-V
          new Discord.RichEmbed()///All Copyrights Go's To NIR0 & NIR0-V
            .setTitle(`**لقد قمت بأرسال الحل في الوقت المناسب**`)///All Copyrights Go's To NIR0 & NIR0-V
        );///All Copyrights Go's To NIR0 & NIR0-V
      });///All Copyrights Go's To NIR0 & NIR0-V
    });///All Copyrights Go's To NIR0 & NIR0-V
  }///All Copyrights Go's To NIR0 & NIR0-V
});///All Copyrights Go's To NIR0 & NIR0-V
fs.writeFile("./prefix.json", JSON.stringify(prefixes), err => {///All Copyrights Go's To NIR0 & NIR0-V
  if (err) console.error(err);///All Copyrights Go's To NIR0 & NIR0-V
});///All Copyrights Go's To NIR0 & NIR0-V

niro.on("message", niro_games => {///All Copyrights Go's To NIR0 & NIR0-V
  if (!prefixes[niro_games.guild.id])///All Copyrights Go's To NIR0 & NIR0-V
    prefixes[niro_games.guild.id] = {///All Copyrights Go's To NIR0 & NIR0-V
      prefix: process.env.PREFIX///All Copyrights Go's To NIR0 & NIR0-V
    };///All Copyrights Go's To NIR0 & NIR0-V

  var prefix = prefixes[niro_games.guild.id].prefix;///All Copyrights Go's To NIR0 & NIR0-V
  if (///All Copyrights Go's To NIR0 & NIR0-V
    niro_games.content == prefix + "capitals" ||///All Copyrights Go's To NIR0 & NIR0-V
    niro_games.content == prefix + "عواصم"///All Copyrights Go's To NIR0 & NIR0-V
  ) {///All Copyrights Go's To NIR0 & NIR0-V
    var x = ["https://cdn.discordapp.com/attachments/798926497490010112/798951739687960646/2021-28-13_06__28__29.png", "https://cdn.discordapp.com/attachments/798926497490010112/798952044719243304/2021-30-13_06__30__03.png", "https://cdn.discordapp.com/attachments/798926497490010112/798951871486099516/2021-28-13_06__28__29.png", "https://cdn.discordapp.com/attachments/798926497490010112/798951510582886420/2021-27-13_06__27__49.png", "https://cdn.discordapp.com/attachments/798926497490010112/798951367917174874/2021-27-13_06__27__18.png", "https://cdn.discordapp.com/attachments/798926497490010112/798951194633699359/2021-26-13_06__26__36.png"];///All Copyrights Go's To NIR0 & NIR0-V
    var x2 = ["القاهره", "برازيليا", "اوتاوا", "الرياض", "دمشق", "القدس"]///All Copyrights Go's To NIR0 & NIR0-V
    var x3 = Math.floor(Math.random() * x.length);///All Copyrights Go's To NIR0 & NIR0-V
    var brand = new Discord.RichEmbed()///All Copyrights Go's To NIR0 & NIR0-V
      .setImage(`${x[x3]}`)///All Copyrights Go's To NIR0 & NIR0-V
      .setTitle(`**اسرع شخص يرسل العاصمه خلال __10__ ثواني**`);///All Copyrights Go's To NIR0 & NIR0-V

    niro_games.channel.sendEmbed(brand).then(msg1 => {///All Copyrights Go's To NIR0 & NIR0-V
      var r = niro_games.channel.awaitMessages(msg => msg.content == x2[x3], {///All Copyrights Go's To NIR0 & NIR0-V
        maxMatches: 1,///All Copyrights Go's To NIR0 & NIR0-V
        time: 20000,///All Copyrights Go's To NIR0 & NIR0-V
        errors: ["time"]///All Copyrights Go's To NIR0 & NIR0-V
      });///All Copyrights Go's To NIR0 & NIR0-V
      r.catch(() => {///All Copyrights Go's To NIR0 & NIR0-V
        return niro_games.channel///All Copyrights Go's To NIR0 & NIR0-V
          .send(///All Copyrights Go's To NIR0 & NIR0-V
            new Discord.RichEmbed()///All Copyrights Go's To NIR0 & NIR0-V
              .setTitle(`**:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح الصحيحة هيا __${x2[x3]}__ **`)///All Copyrights Go's To NIR0 & NIR0-V
          );///All Copyrights Go's To NIR0 & NIR0-V
      });///All Copyrights Go's To NIR0 & NIR0-V

      r.then(collected => {///All Copyrights Go's To NIR0 & NIR0-V
        niro_games.channel.send(`${collected.first().author}`)
        niro_games.channel.send(///All Copyrights Go's To NIR0 & NIR0-V
          new Discord.RichEmbed()///All Copyrights Go's To NIR0 & NIR0-V
            .setTitle(`**لقد قمت بأرسال العاصمة في الوقت المناسب**`)///All Copyrights Go's To NIR0 & NIR0-V
        );///All Copyrights Go's To NIR0 & NIR0-V
      });///All Copyrights Go's To NIR0 & NIR0-V
    });///All Copyrights Go's To NIR0 & NIR0-V
  }///All Copyrights Go's To NIR0 & NIR0-V
});///All ///All Copyrights Go's To NIR0 & NIR0-VCopyrights Go's To NIR0 & NIR0-V
fs.writeFile("./prefix.json", JSON.stringify(prefixes), err => {///All Copyrights Go's To NIR0 & NIR0-V
  if (err) console.error(err);///All Copyrights Go's To NIR0 & NIR0-V
});///All Copyrights Go's To NIR0 & NIR0-V

niro.on("message", niro_games => {
  if (!prefixes[niro_games.guild.id])
    prefixes[niro_games.guild.id] = {
      prefix: process.env.PREFIX
    };

  var prefix = prefixes[niro_games.guild.id].prefix;
  if (
    niro_games.content == prefix + "brand" ||
    niro_games.content == prefix + "شعار"
  ) {
    var x = [
      "https://cdn.discordapp.com/attachments/756329106953601225/776584216161812490/jW4dnFtA_400x400.png",
      "https://cdn.discordapp.com/attachments/756329106953601225/776589087997296691/InCS8dvy_400x400.png",
      "https://cdn.discordapp.com/attachments/756329106953601225/776590445622329344/ocZKRu9P_400x400.png",
      "https://cdn.discordapp.com/attachments/756329106953601225/776591027943243776/aCWlGSZF_400x400.png"
    ];
    var x2 = ["جافا", "ريزر", "يوتيوب", "جوجل كروم"];
    var x3 = Math.floor(Math.random() * x.length);
    var brand = new Discord.RichEmbed()
      .setImage(`${x[x3]}`)
      .setTitle(`**اسرع شخص يرسل الاشعار خلال __10__ ثواني**`);

    niro_games.channel.sendEmbed(brand).then(msg1 => {
      var r = niro_games.channel.awaitMessages(msg => msg.content == x2[x3], {
        maxMatches: 1,
        time: 20000,
        errors: ["time"]
      });
      r.catch(() => {
        return niro_games.channel
          .send(
            new Discord.RichEmbed()
              .setTitle(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الصحيحةة هيا **${x2[x3]}**`)
          );
      });

      r.then(collected => {
        niro_games.channel.send(`${collected.first().author}`)
        niro_games.channel.send(
          new Discord.RichEmbed()
            .setTitle(`**لقد قمت ب أرسال الشعار في الوقت المناسب**`)
        );
      });
    });
  }
});
fs.writeFile("./prefix.json", JSON.stringify(prefixes), err => {
  if (err) console.error(err);
});

niro.on("message", niro_games => {
  if (!prefixes[niro_games.guild.id])
    prefixes[niro_games.guild.id] = {
      prefix: process.env.PREFIX
    };

  var prefix = prefixes[niro_games.guild.id].prefix;
  if (
    niro_games.content == prefix + "flag" ||
    niro_games.content == prefix + "اعلام"
  ) {
    var x = [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/256px-Flag_of_Brazil.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/256px-Flag_of_Jordan.svg.png",
      "https://cdn.discordapp.com/attachments/756329106953601225/776908227476062258/images_4.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/1200px-Flag_of_Senegal.svg.png"
    ];
    var x2 = ["البرازيل", "الاردن", "مصر", "السنغال"];
    var x3 = Math.floor(Math.random() * x.length);
    var flag = new Discord.RichEmbed()
      .setImage(`${x[x3]}`)
      .setTitle(`**اسرع شخص يرسل العلم خلال __10__ ثواني**`);
    niro_games.channel.sendEmbed(flag).then(msg1 => {
      var r = niro_games.channel.awaitMessages(msg => msg.content == x2[x3], {
        maxMatches: 1,
        time: 20000,
        errors: ["time"]
      });
      r.catch(() => {
        return niro_games.channel
          .send(
            new Discord.RichEmbed()
              .setTitle(`:negative_squared_cross_mark: **لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الصحيحةة هيا** ***${x2[x3]}***`)
          );
      });

      r.then(collected => {
        niro_games.channel.send(`${collected.first().author}`)
        niro_games.channel.send(
          new Discord.RichEmbed()
            .setTitle(`**لقد قمت بالاجابه بشكل صحيح**`)
        );
      });
    });
  }
});
fs.writeFile("./prefix.json", JSON.stringify(prefixes), err => {
  if (err) console.error(err);
});

const cuttweet = [
  "كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟",
  "كت تويت | أكثر شيء يُسكِت الطفل برأيك؟",
  "كت تويت | الحرية لـ ... ؟",
  "كت تويت | قناة الكرتون المفضلة في طفولتك؟",
  "كت تويت ‏| كلمة للصُداع؟",
  "كت تويت ‏| ما الشيء الذي يُفارقك؟",
  "كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟",
  "كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟",
  "كت تويت | بعد ١٠ سنين ايش بتكون ؟",
  "كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟",
  "‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟",
  "كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟",
  "‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟",
  "‏كت تويت | وش يفسد الصداقة؟",
  "‏كت تويت | شخص لاترفض له طلبا ؟",
  "‏كت تويت | كم مره خسرت شخص تحبه؟.",
  "‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟",
  "‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟",
  "‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!",
  "‏كت تويت |أقوى كذبة مشت عليك ؟",
  "‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟",
  "كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟",
  "‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟",
  "‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟",
  "‏كت تويت | وش محتاج عشان تكون مبسوط ؟",
  "‏كت تويت | مطلبك الوحيد الحين ؟",
  "‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟"
];

niro.on("message", niro_games => {
  if (!prefixes[niro_games.guild.id])
    prefixes[niro_games.guild.id] = {
      prefix: process.env.PREFIX
    };

  var prefix = prefixes[niro_games.guild.id].prefix;
  if (
    niro_games.content.startsWith(prefix + "cut") ||
    niro_games.content.startsWith(prefix + "كت")
  ) {
    if (!niro_games.channel.guild)
      return niro_games.reply("** This command only for servers**");
    var embed = new Discord.RichEmbed()
      .setThumbnail(niro_games.author.avatarURL)
      .addField(
        "لعبه كت تويت",
        `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`
      );
    niro_games.channel.sendEmbed(embed);

    console.log("[id] Send By: " + niro_games.author.username);
  }
});
fs.writeFile("./prefix.json", JSON.stringify(prefixes), err => {
  if (err) console.error(err);
});

niro.on("message", niro_games => {
  if (!prefixes[niro_games.guild.id])
    prefixes[niro_games.guild.id] = {
      prefix: process.env.PREFIX
    };

  var prefix = prefixes[niro_games.guild.id].prefix;
  if (
    niro_games.content == prefix + "emoji" ||
    niro_games.content == prefix + "ايموجي"
  ) {
    var x = ["🌚", "😂", "🥶", "😷", "🌻", "🌗", "✨", "🍐", "🚗", "💽"];
    var x2 = ["🌚", "😂", "🥶", "😷", "🌻", "🌗", "✨", "🍐", "🚗", "💽"];
    var x3 = Math.floor(Math.random() * x.length);
    var emoji = new Discord.RichEmbed()
      .setTitle(`** لديك __10 ثواني__ لكتابة الايموجي **`)
      .addField(`${x[x3]}`);
    niro_games.channel.sendEmbed(emoji).then(msg1 => {
      var r = niro_games.channel.awaitMessages(msg => msg.content == x2[x3], {
        maxMatches: 1,
        time: 20000,
        errors: ["time"]
      });
      r.catch(() => {
        return niro_games.channel
          .send(
            new Discord.RichEmbed()
              .setTitle(`:negative_squared_cross_mark:** لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الصحيحة هيا __${x2[x3]}__ **`)
          );
      });

      r.then(collected => {
        niro_games.channel.send(`${collected.first().author}`)
        niro_games.channel.send(
          new Discord.RichEmbed()
            .setTitle(`**لقد قمت بكتابة الايموجي في الوقت المناسب**`)
        );
      });
    });
  }
});
fs.writeFile("./prefix.json", JSON.stringify(prefixes), err => {
  if (err) console.error(err);
});

niro.on("message", message => {
  if (!prefixes[message.guild.id])
    prefixes[message.guild.id] = {
      prefix: process.env.PREFIX
    };

  var prefix = prefixes[message.guild.id].prefix;
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "xo")) {
    let array_of_mentions = message.mentions.users.array();
    let symbols = [":o:", ":heavy_multiplication_x:"];
    var grid_message;

    if (array_of_mentions.length == 1 || array_of_mentions.length == 2) {
      let random1 = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
      let random2 = Math.abs(random1 - 1);
      if (array_of_mentions.length == 1) {
        random1 = 0;
        random2 = 0;
      }
      var player1_id = message.author.id;
      let player2_id = array_of_mentions[random2].id;
      var turn_id = player1_id;
      var symbol = symbols[0];
      let initial_message = `اللعبة بين اللاعبين التاليين <@${player1_id}> and <@${player2_id}>!`;
      if (player1_id == player2_id) {
        initial_message += "\n_(لقد خسرت, العب مع نفسك :joy:)_";
      }
      message.channel
        .send(`Xo ${initial_message}`)
        .then(console.log("Successful tictactoe introduction"))
        .catch(console.error);
      message.channel
        .send(
          ":one::two::three:" +
          "\n" +
          ":four::five::six:" +
          "\n" +
          ":seven::eight::nine:"
        )
        .then(new_message => {
          grid_message = new_message;
        })
        .then(console.log("Successful tictactoe game initialization"))
        .catch(console.error);
      message.channel
        .send("Loading... Please wait for the :ok: reaction.")
        .then(async new_message => {
          await new_message.react("1⃣");
          await new_message.react("2⃣");
          await new_message.react("3⃣");
          await new_message.react("4⃣");
          await new_message.react("5⃣");
          await new_message.react("6⃣");
          await new_message.react("7⃣");
          await new_message.react("8⃣");
          await new_message.react("9⃣");
          await new_message.react("🆗");
          await new_message
            .edit(`It\'s <@${turn_id}>\'s اشتغل! الرمز هو ${symbol}`)
            .then(new_new_message => {
              require("./xo.js")(
                niro,
                message,
                new_new_message,
                player1_id,
                player2_id,
                turn_id,
                symbol,
                symbols,
                grid_message
              );
            })
            .then(
              console.log("Successful tictactoe listeprefix initialization")
            )
            .catch(console.error);
        })
        .then(console.log("Successful tictactoe react initialization"))
        .catch(console.error);
    } else {
      message.channel
        .send(`جرب *xo @uesr`)
        .then(console.log("Successful error reply"))
        .catch(console.error);
    }
  }
});
fs.writeFile("./prefix.json", JSON.stringify(prefixes), err => {
  if (err) console.error(err);
});

niro.on("message", function(niro_games) {
  if (!prefixes[niro_games.guild.id])
    prefixes[niro_games.guild.id] = {
      prefix: process.env.PREFIX
    };

  var prefix = prefixes[niro_games.guild.id].prefix;
  if (niro_games.content.startsWith(prefix + "rps")) {
    let messageArgs = niro_games.content
      .split(" ")
      .slice(1)
      .join(" ");
    let messageRPS = niro_games.content
      .split(" ")
      .slice(2)
      .join(" ");
    let arrayRPS = ["**# - Rock**", "**# - Paper**", "**# - Scissors**"];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
      .setAuthor(niro_games.author.username)
      .setThumbnail(niro_games.author.avatarURL)
      .addField("Rock", "🇷", true)
      .addField("Paper", "🇵", true)
      .addField("Scissors", "🇸", true);
    niro_games.channel.send(RpsEmbed).then(msg => {
      msg.react("🇸");
      msg.react("🇷");
      msg
        .react("🇵")
        .then(() => msg.react("🇸"))
        .then(() => msg.react("🇷"))
        .then(() => msg.react("🇵"));
      let reaction1Filter = (reaction, user) =>
        reaction.emoji.name === "🇸" && user.id === niro_games.author.id;
      let reaction2Filter = (reaction, user) =>
        reaction.emoji.name === "🇷" && user.id === niro_games.author.id;
      let reaction3Filter = (reaction, user) =>
        reaction.emoji.name === "🇵" && user.id === niro_games.author.id;
      let reaction1 = msg.createReactionCollector(reaction1Filter, {
        time: 12000
      });

      let reaction2 = msg.createReactionCollector(reaction2Filter, {
        time: 12000
      });
      let reaction3 = msg.createReactionCollector(reaction3Filter, {
        time: 12000
      });
      reaction1.on("collect", r => {
        niro_games.channel.send(result);
      });
      reaction2.on("collect", r => {
        niro_games.channel.send(result);
      });
      reaction3.on("collect", r => {
        niro_games.channel.send(result);
      });
    });
  }
});
fs.writeFile("./prefix.json", JSON.stringify(prefixes), err => {
  if (err) console.error(err);
});

niro.on("message", async niro_games => {
  if (!prefixes[niro_games.guild.id])
    prefixes[niro_games.guild.id] = {
      prefix: process.env.PREFIX
    };

  var prefix = prefixes[niro_games.guild.id].prefix;
  if (niro_games.author.bot) return;
  if (niro_games.channel.type === "dm") return;

  let messageArray = niro_games.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === prefix + `8ball`) {
    if (!args[1]) return niro_games.reply("Please ask a full question!");
    let replies = ["Yes", "No.", "I don't know.", "Ask again later plez."];

    let result = Math.floor(Math.random() * replies.length);
    let question = args.slice(1).join(" ");

    let ballembed = new Discord.RichEmbed()
      .setAuthor(niro_games.author.tag)
      .addField("Question", question)
      .addField("Answer", replies[result]);

    niro_games.channel.send(ballembed);
  }
});
fs.writeFile("./prefix.json", JSON.stringify(prefixes), err => {
  if (err) console.error(err);
});

niro.on("message", niro_games => {
  if (!prefixes[niro_games.guild.id])
    prefixes[niro_games.guild.id] = {
      prefix: process.env.PREFIX
    };

  var prefix = prefixes[niro_games.guild.id].prefix;

  if (
    niro_games.content.startsWith(prefix + "frots") ||
    niro_games.content.startsWith(prefix + "فواكه")
  ) {
    let slot1 = ["🍏", "🍇", "🍒", "🍍", "🍅", "🍆", "🍑", "🍓"];
    let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
    let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
    let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
    let we;
    if (slots1 === slots2 && slots2 === slots3) {
      we = "Win!";
    } else {
      we = "Lose!";
    }
    niro_games.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`);
  }
});
fs.writeFile("./prefix.json", JSON.stringify(prefixes), err => {
  if (err) console.error(err);
});

const Sra7a = [
  "صراحه  |  صوتك حلوة؟",
  "صراحه  |  التقيت الناس مع وجوهين؟",
  "صراحه  |  شيء وكنت تحقق اللسان؟",
  "صراحه  |  أنا شخص ضعيف عندما؟",
  "صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟",
  "صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟",
  "صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟",
  "صراحه  |  كيفية الكشف عن من يكمن عليك؟",
  "صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟",
  "صراحه  |  أشجع شيء حلو في حياتك؟",
  'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
  "صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟",
  "صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟",
  "صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟",
  "صراحه  |  نظرة و يفسد الصداقة؟",
  "صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟",
  "صراحه  |  شخص معك بالحلوه والمُره؟",
  "صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟",
  "صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟",
  "صراحه  |  وش تتمنى الناس تعرف عليك؟",
  "صراحه  |  ابيع المجرة عشان؟",
  "صراحه  |  أحيانا احس ان الناس ، كمل؟",
  "صراحه  |  مع مين ودك تنام اليوم؟",
  "صراحه  |  صدفة العمر الحلوة هي اني؟",
  'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
  "صراحه  |  صفة تحبها في نفسك؟",
  'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
  "صراحه  |  تصلي صلواتك الخمس كلها؟",
  "صراحه  |  ‏تجامل أحد على راحتك؟",
  "صراحه  |  اشجع شيء سويتة بحياتك؟",
  "صراحه  |  وش ناوي تسوي اليوم؟",
  "صراحه  |  وش شعورك لما تشوف المطر؟",
  "صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟",
  "صراحه  |  ما اكثر شي ندمن عليه؟",
  "صراحه  |  اي الدول تتمنى ان تزورها؟",
  "صراحه  |  متى اخر مره بكيت؟",
  "صراحه  |  تقيم حظك ؟ من عشره؟",
  "صراحه  |  هل تعتقد ان حظك سيئ؟",
  "صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟",
  "صراحه  |  كلمة تود سماعها كل يوم؟",
  "صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟",
  "صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟",
  "صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟",
  "صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟",
  "‏صراحه | هل جرحت شخص تحبه من قبل ؟",
  "صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟",
  "‏صراحه | هل تحب عائلتك ام تكرههم؟",
  "‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟",
  "‏صراحه  |  هل خجلت من نفسك من قبل؟",
  "‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟",
  "‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟",
  "‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟",
  "‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟",
  "‏صراحه  |  ماذا تختار حبيبك أم صديقك؟",
  "‏صراحه  | هل حياتك سعيدة أم حزينة؟",
  "صراحه  |  ما هي أجمل سنة عشتها بحياتك؟",
  "‏صراحه  |  ما هو عمرك الحقيقي؟",
  "‏صراحه  |  ما اكثر شي ندمن عليه؟",
  "صراحه  |  ما هي أمنياتك المُستقبلية؟‏",
  "صراحه | نفسك فـ ايه ؟",
  "صراحه | هل تحب فتاه او احببت من قبل ؟",
  "صراحه | هل شكلك حلو او جيد او متوسط او سئ ؟",
  "صراحه | ما هي الماده الدراسيه التي تحبها اكثر وتفضلها؟",
  "صراحه | هل تحب مدرستك ؟",
  "صراحه | ما الشئ الذي تتمني ان يحصل ؟",
  "صراحه | هل تحب عائلتك ؟"
];
niro.on("message", niro_games => {
  if (!prefixes[niro_games.guild.id])
    prefixes[niro_games.guild.id] = {
      prefix: process.env.PREFIX
    };

  var prefix = prefixes[niro_games.guild.id].prefix;
  if (niro_games.author.bot) return;
  if (niro_games.content.startsWith(prefix + "sara7a")) {
    if (!niro_games.channel.guild)
      return niro_games.reply("** This command only for servers **");
    var niro = new Discord.RichEmbed()
      .setTitle("لعبة صراحة ..")
      .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
      .setImage(
        "https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png"
      )
      .setTimestamp();

    niro_games.channel.sendEmbed(niro);
  }
});
fs.writeFile("./prefix.json", JSON.stringify(prefixes), err => {
  if (err) console.error(err);
});

niro.on("message", niro_games => {
  if (!prefixes[niro_games.guild.id])
    prefixes[niro_games.guild.id] = {
      prefix: process.env.PREFIX
    };

  var prefix = prefixes[niro_games.guild.id].prefix;
  if (
    niro_games.content == prefix + "translation" ||
    niro_games.content == prefix + "ترجمه"
  ) {
    var x = [
      "Constantinople",
      "Clever",
      "apple",
      "day",
      "browser",
      "cocked",
      "Tomatoes",
      "Connect",
      "coconut"
    ];
    var x2 = [
      "القسطنطينيه",
      "ذكي",
      "تفاح",
      "يوم",
      "متصفح",
      "مطبوخ",
      "طماطم",
      "اتصال",
      "ك"
    ];
    var x3 = Math.floor(Math.random() * x.length);
    var emoji = new Discord.RichEmbed()
      .setTitle(`** لديك __10 ثواني__ لكتابة الترجمه**`)
      .addField(`${x[x3]}`);
    niro_games.channel.sendEmbed(emoji).then(msg1 => {
      var r = niro_games.channel.awaitMessages(msg => msg.content == x2[x3], {
        maxMatches: 1,
        time: 20000,
        errors: ["time"]
      });
      r.catch(() => {
        return niro_games.channel
          .send(
            new Discord.RichEmbed()
              .setTitle(`:negative_squared_cross_mark:** لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الصحيحة هيا __${x2[x3]}__ **`)
          );
      });

      r.then(collected => {
        niro_games.channel.send(`${collected.first().author}`)
        niro_games.channel.send(
          new Discord.RichEmbed()
            .setTitle(`** لقد قمت بكتابة الترجمه في الوقت المناسب **`)
        );
      });
    });
  }
});
fs.writeFile("./prefix.json", JSON.stringify(prefixes), err => {
  if (err) console.error(err);
});

niro.on("message", niro_games => {
  if (!prefixes[niro_games.guild.id])
    prefixes[niro_games.guild.id] = {
      prefix: process.env.PREFIX
    };

  var prefix = prefixes[niro_games.guild.id].prefix;
  if (
    niro_games.content.startsWith(prefix + "قتل") +
    niro_games.content.startsWith(prefix + "kill")
  ) {
    let user = niro_games.mentions.users.first();
    if (!user) return niro_games.channel.send(">>> منشن الشخص");
    var x = [
      "https://media.giphy.com/media/lrPDCZOAwf2S0k7B8R/giphy.gif",
      "https://cdn.discordapp.com/attachments/756329106953601225/789337451080450048/source.gif",
      "https://cdn.discordapp.com/attachments/756329106953601225/789337003987828736/e1c_1.gif"
    ];

    var x3 = Math.floor(Math.random() * x.length);

    const embed = new Discord.RichEmbed()
      .setColor("#fffff")
      .setTitle(`>>> ${niro_games.author.username} Killed ☠️ ${user.username}`)
      .setImage(`${x[x3]}`);
    niro_games.channel.send(embed);
  }
});
fs.writeFile("./prefix.json", JSON.stringify(prefixes), err => {
  if (err) console.error(err);
});

niro.on("message", niro_games => {
  if (!prefixes[niro_games.guild.id])
    prefixes[niro_games.guild.id] = {
      prefix: process.env.PREFIX
    };

  var prefix = prefixes[niro_games.guild.id].prefix;
  if (
    niro_games.content.startsWith(prefix + "حضن") +
    niro_games.content.startsWith(prefix + "hug")
  ) {
    let user = niro_games.mentions.users.first();
    if (!user) return niro_games.channel.send(">>> منشن الشخص");
    var x = [
      "https://cdn.discordapp.com/attachments/756329106953601225/789469547023433758/200.gif",
      "https://cdn.discordapp.com/attachments/756329106953601225/789469547395940352/tenor.gif",
      "https://cdn.discordapp.com/attachments/756329106953601225/789469975327932416/tenor_1.gif"
    ];

    var x3 = Math.floor(Math.random() * x.length);

    const embed = new Discord.RichEmbed()
      .setColor("#fffff")
      .setTitle(`>>> ${niro_games.author.username} hug 🤗️ ${user.username}`)
      .setImage(`${x[x3]}`);
    niro_games.channel.send(embed);
  }
});
fs.writeFile("./prefix.json", JSON.stringify(prefixes), err => {
  if (err) console.error(err);
});
niro.on("message", niro_games => {
  if (!prefixes[niro_games.guild.id])
    prefixes[niro_games.guild.id] = {
      prefix: process.env.PREFIX
    };

  var prefix = prefixes[niro_games.guild.id].prefix;
  if (
    niro_games.content.startsWith(prefix + "حب") +
    niro_games.content.startsWith(prefix + "love")
  ) {
    let user = niro_games.mentions.users.first();
    if (!user) return niro_games.channel.send(">>> منشن الشخص");
    var x = ["100", "8", "10", "99", "93", "82", "62", "71", "38"];

    var x3 = Math.floor(Math.random() * x.length);

    const embed = new Discord.RichEmbed()
      .setColor("#fffff")
      .setTitle(
        `**${niro_games.author.username} Love 💕 ${user.username} With ${x[x3]}%**`
      )
      .setImage(
        "https://cdn.discordapp.com/attachments/756329106953601225/789540715301961738/200_1.gif"
      );
    niro_games.channel.send(embed);
  }
});
fs.writeFile("./prefix.json", JSON.stringify(prefixes), err => {
  if (err) console.error(err);
});

niro.on("message", niro_games => {
  if (!prefixes[niro_games.guild.id])
    prefixes[niro_games.guild.id] = {
      prefix: process.env.PREFIX
    };

  var prefix = prefixes[niro_games.guild.id].prefix;
  if (niro_games.content.startsWith(prefix + "hack")) {
    if (!niro_games.author.id === "") return;
    if (niro_games.author.bot) return;
    niro_games.delete();
    let args = niro_games.content.split(" ").slice(1);

    let virusname = args.join(" ");
    if (virusname < 1) {
      return niro_games.channel.send("**```type user you wont to hack👾👾```**");
    }
    niro_games.channel
      .send({
        embed: new Discord.RichEmbed()
          .setTitle("Loading " + virusname + "...")
          .setColor(0xff0000)
      })
      .then(function(m) {
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("[" + virusname + "]: Loading Discord Virus [▓ ] 1%")
              .setColor(0xff0000)
          });
        }, 1000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("[" + virusname + "]: Loading Discord Virus [▓▓ ] 2%")
              .setColor(0xff0000)
          });
        }, 2000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("[" + virusname + "]: Loading Discord Virus [▓▓▓ ] 3%")
              .setColor(0xff0000)
          });
        }, 3000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("[" + virusname + "]: Loading Discord Virus [▓▓▓▓ ] 4%")
              .setColor(0xff0000)
          });
        }, 4000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" + virusname + "]: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓ ] 20%"
              )
              .setColor(0xff0000)
          });
        }, 5000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                virusname +
                "]: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 30%"
              )
              .setColor(0xff0000)
          });
        }, 6000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                virusname +
                "]: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 40%"
              )
              .setColor(0xff0000)
          });
        }, 7000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                virusname +
                "]: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 50%"
              )
              .setColor(0xff0000)
          });
        }, 8000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                virusname +
                "]: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 70%"
              )
              .setColor(0xff0000)
          });
        }, 9000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                virusname +
                "]: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 85%"
              )
              .setColor(0xff0000)
          });
        }, 10000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                virusname +
                "]: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 90%"
              )
              .setColor(0xff0000)
          });
        }, 11000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                virusname +
                "]: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 95%"
              )
              .setColor(0xff0000)
          });
        }, 12000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                virusname +
                "]: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 96%"
              )
              .setColor(0xff0000)
          });
        }, 13000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                virusname +
                "]: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 97%"
              )
              .setColor(0xff0000)
          });
        }, 14000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                virusname +
                "]: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 98%"
              )
              .setColor(0xff0000)
          });
        }, 15000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                virusname +
                "]: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 99%"
              )
              .setColor(0xff0000)
          });
        }, 16000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                virusname +
                "]: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%"
              )
              .setColor(0xff0000)
          });
        }, 17000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                virusname +
                "]:" +
                virusname +
                "done it's going good 100.9%"
              )
              .setColor(0xff0000)
          });
        }, 18000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("[" + virusname + "]: يتم تهكير ")
              .setColor(0xff0000)
          });
        }, 19000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("[" + virusname + "]: تحديث بسيط" + virusname + ".key")
              .setColor(0xff0000)
          });
        }, 22000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("[" + virusname + "]: يرجى انتضار ثواني 5...")
              .setColor(0xff0000)
          });
        }, 25000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("[" + virusname + "]: يرجى انتضار ثواني 4...")
              .setColor(0xff0000)
          });
        }, 26000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("[" + virusname + "]: يرجى انتضار ثواني 3...")
              .setColor(0xff0000)
          });
        }, 27000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("[" + virusname + "]: يرجى انتضار ثواني 2...")
              .setColor(0xff0000)
          });
        }, 28000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("[" + virusname + "]: يرجى انتضار ثواني 1...")
              .setColor(0xff0000)
          });
        }, 29000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                virusname +
                "]: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 99%"
              )
              .setColor(0xff0000)
          });
        }, 30000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                virusname +
                "]: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]100% virus added"
              )
              .setColor(0xff0000)
          });
        }, 31000);
        setTimeout(function() {
          m.delete();
        }, 32000);
        setTimeout(function() {
          niro_games.channel.send("**This user has ben hacked😂😆**");
        }, 33000);
      });
  }
});
fs.writeFile("./prefix.json", JSON.stringify(prefixes), err => {
  if (err) console.error(err);
});


niro.on("message", niro_games => {
  if (!prefixes[niro_games.guild.id])
    prefixes[niro_games.guild.id] = {
      prefix: process.env.PREFIX
    };

  var prefix = prefixes[niro_games.guild.id].prefix;
  if (
    niro_games.content.startsWith(prefix + "ملك و كتابه") +
    niro_games.content.startsWith(prefix + "coinflip")
  ) {
    let user = niro_games.mentions.users.first();
    if (!user) return niro_games.channel.send(">>> منشن الشخص");
    var x = [
      "https://cdn.discordapp.com/attachments/776819669213642754/789623814257508382/1608331349170.png",
      "https://cdn.discordapp.com/attachments/776819669213642754/789623814513754122/app_image_big_12515.jpg"
    ];

    var x3 = Math.floor(Math.random() * x.length);

    const embed = new Discord.RichEmbed()
      .setColor("#fffff")
      .setTitle(`>>> ${niro_games.author.username} Fliped The Coin`)
      .setImage(`${x[x3]}`);
    niro_games.channel.send(embed);
  }
});
fs.writeFile("./prefix.json", JSON.stringify(prefixes), err => {
  if (err) console.error(err);
});
niro.on("message", niro_games => {
  if (!prefixes[niro_games.guild.id])
    prefixes[niro_games.guild.id] = {
      prefix: process.env.PREFIX
    };

  var prefix = prefixes[niro_games.guild.id].prefix;
  if (
    niro_games.content.startsWith(prefix + "بوسه") +
    niro_games.content.startsWith(prefix + "kiss")
  ) {
    let user = niro_games.mentions.users.first();
    if (!user) return niro_games.channel.send(">>> منشن الشخص");
    var x = [
      "https://cdn.discordapp.com/attachments/776819669213642754/789625570262122516/giphy_3.gif",
      "https://cdn.discordapp.com/attachments/776819669213642754/789625570597404682/QcfT_1.gif",
      "https://cdn.discordapp.com/attachments/776819669213642754/789625571217899540/tenor_3.gif",
      "https://cdn.discordapp.com/attachments/776819669213642754/789625571523952700/tenor_2.gif",
      "https://tenor.com/view/kiss-mwuah-baby-gif-10053867"
    ];

    var x3 = Math.floor(Math.random() * x.length);

    const embed = new Discord.RichEmbed()
      .setColor("#fffff")
      .setTitle(`>>> ${niro_games.author.username} kissed 💋 ${user.username}`)
      .setImage(`${x[x3]}`);
    niro_games.channel.send(embed);
  }
});
fs.writeFile("./prefix.json", JSON.stringify(prefixes), err => {
  if (err) console.error(err);
});