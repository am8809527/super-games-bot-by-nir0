const config = require('../Config/bot.json');
const chalk = require('chalk');
const figlet = require('figlet');

module.exports = async (client) => {
  console.log(chalk.yellow(figlet.textSync('Ngames', { horizontalLayout: 'full' })));
  console.log(chalk.red(`Bot started!
=====================================
> Users: ${client.users.cache.size}
> Channels: ${client.channels.cache.size}
> Servers: ${client.guilds.cache.size}
> Bot Ping: ${client.ws.ping} XD
> Prefix: ${config.bot.setting.main_prefix}
> Developer: @ニロ#3892
> Support: https://discord.gg/zezCEN36Hh
=====================================`))
  client.user.setActivity(config.bot.setting.main_prefix + "help");

}
