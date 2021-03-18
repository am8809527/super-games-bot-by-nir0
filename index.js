const Discord = require('discord.js');
const config = require('./Config/bot.json');
const client = new Discord.Client();
const fs = require('fs');
const db = require('quick.db');
const { Collection } = require('discord.js');

client.config = require('./Config/bot.json');
client.build = require('./Config/build.json');

const pre = client.config.bot.setting.main_prefix;
client.on('message', async message => {
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = pre;
  if (!message.guild || message.author.bot) return;
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = pre;
  var args = message.content.toLowerCase().split(' ');
  var cmd = args[0];
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = pre;
  if (cmd === `${prefix}set-prefix`) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return;
    if (!args[1]) {
      return message.channel.send("Type The New Prefix!")
    }
    await db.set(`prefix_${message.guild.id}`, `${args[1]}`);
    let embed = new Discord.MessageEmbed().setColor(client.build.colors.done)
      .setAuthor(`${message.author.tag}`, `${message.author.avatarURL()}`)
      .setDescription(`**The new prefix is : ${args[1]}**`);
    message.channel.send(embed);
  }
}).on("message", async message => {
  if (message.author.bot) return;
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  let args = message.content.split(" ");
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = pre;
  if (args[0].toLowerCase() == prefix + "blacklist") {
    if (!client.config.dev.owner_id.includes(message.author.id))
      return message.channel.send("** ❌ | __ليس لديك صلاحيات مطور البوت__ **");
    message.channel.bulkDelete(1);
    let embed = new Discord.MessageEmbed()
      .setThumbnail(message.author.avatarURL())
      .setAuthor(message.author.username, message.author.avatarURL())
      .setTitle("** __NEW Blacklist__ **")
      .setColor("BLACK")
      .addField("**- User :**", `[${user.tag}]`)
      .addField("**- Blacklisted By :**", `[${message.author.tag}]`)
      .addField("**- Reason :**", `[${reason}]`)
      .addField("**- Blacklisted In :**", `[${message.guild.name}]`)
      .addField("**- Time & Date :**", `[${message.createdAt}]`)
      .setFooter(`${client.user.username}`)
      .setFooter(message.guild.name, message.guild.iconURL());
    let channel = message.guild.channels;
    client.channelscache.get(client.config.dev.blacklist_room)
      .send(embed)
      .find("name", "blacklist-users");
    channel.send(embed);
  }
}).on("message", async message => {
  if (message.author.bot) return undefined;
  let user = message.mentions.users.first();
  let reason = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  let args = message.content.split(" ");
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = pre;
  if (args[0].toLowerCase() == prefix + "blacklist") {
    if (!client.config.dev.owner_id.includes(message.author.id))
      return message.channel.send("** ❌ | __ليس لديك صلاحيات مطور البوت__ **");
    let user =
      message.mentions.users.first() ||
      message.guild.members.cache.get(args[0]);
    let Blacklist = await db.fetch(`Blacklist_${user.id}`);
    if (Blacklist === null) Blacklist = "off";
    message.channel.send(`**Done Blacklisted The User**`);
    db.set(`Blacklist_${user.id}`, "on");
    user.send(`⚠️${user}⚠️
**You Are Blacklisted FROM \`${client.user.username}\` 
Reason: \`${reason}\` **`);
  }
}).on("message", async message => {
  if (message.author.bot) return undefined;
  let user = message.mentions.users.first();
  let reason = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  let args = message.content.split(" ");
  var prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = pre;
  if (args[0].toLowerCase() == prefix + "unblacklist") {
    if (!client.config.dev.owner_id.includes(message.author.id))
      return message.channel.send("** ❌ | __ليس لديك صلاحيات مطور البوت__ **");
    let user =
      message.mentions.users.first() ||
      message.guild.members.cache.get(args[0]);
    let Blacklist = await db.fetch(`Blacklist_${user.id}`);
    if (Blacklist === null) Blacklist = "off";
    if (!user)
      return message.channel.send(
        `**Usage: ${prefix}unblacklist \`<Mention/ID>\`**`
      );
    message.channel.send(`**Done Unblacklisted The User**`);
    db.set(`Blacklist_${user.id}`, "off");
    user.send(`⚠️${user}⚠️
**You Are UnBlacklisted FROM \`${client.user.username}\` 
Reason: \`${reason}\` **`);
  }
}).on('guildCreate', async(server) => {
  server.owner.send(
    new Discord.MessageEmbed()
    .setAuthor("😃 Thx For Invite Me To Your Server!")
    .setDescription("**You Can Create Bot Like This From Here: __[📴](https://replit.com/@NIR0/NGamesS-Version#index.js)__**")
    .addFields({
      name: "Bot Owner:",
      value: "<@!" + client.config.dev.owner_id + ">",
      inline: true
    },
    {
      name: "Bot Support Server",
      value: `${client.config.dev.support || "https://discord.gg/zezCEN36Hh" }`,
      inline: true
    },
    {
      name: "Bot Website",
      value: `${client.config.dev.website || "https://discord.gg/zezCEN36Hh" }`
    })
  )
})

fs.readdir('./Events/', (err, files) => {
  if (err) return console.log(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    const event = require(`./Events/${file}`);
    let eventName = file.split('.')[0];
    console.log(`Loading ${eventName}.js!`);
    client.on(eventName, event.bind(null, client));
  });
});
fs.readdir(`./Commands/`, (error, files) => {
  if (error) { return console.log("error i can not find commands"); };
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    const command = require(`./Commands/${file}`);
    let commandName = file.split('.')[0];
    console.log("Loading Command \"" + commandName + "\"")
    client.commands.set(command.name, command);
  })
});

client.commands = new Collection();

client.login(client.config.bot.connection.token).catch(err => {
  console.table({
    Error: "THE TOKEN IS INVIELD"
  })
  console.table({
    How_To_FIX_1: "Please Check Is The Token Is Right!",
    How_To_FIX_2: "Accounts tokens do not work!",
    How_To_FIX_3: "Check the parentheses!",
    How_To_FIX_4: "You Can Call The Support For More Information!!"
  })
})