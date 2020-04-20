
const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const path = require('path')
const config = require ("./config.json"); 

bot.on('ready', () => {
    console.log('I am now working!')

    bot.user.setActivity('Yawning', {type: "PLAYING"})
})

bot.on('message', async msg => {
    if (msg.author.bot) return;
    let cmdPrefix = "";
    if(!msg.content.startsWith(cmdPrefix)) return;

    const args = msg.content.slice(cmdPrefix.length);
    console.log(args);

    if (msg.content === cmdPrefix + 'test') {
        
        let embed = new Discord.MessageEmbed()
        .setColor('#ff6efd')
        .setDescription('This bot is online and is working perfectly fine!')

        msg.reply(embed)
    }

    if (msg.content === cmdPrefix + 'help') {

        let embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTitle('Commands')
        .addField('test', 'Tests to see if bot is online.')
        .addField('help', 'Provides this panel.')
        .addField('kick','Kicks a member from the server.)
        msg.channel.send(embed)
    }
if(cmd === `${prefix}kick)}`
if(!
message.member.hasPermission("KICK_MEMBERS"))
return message.reply('You cannot use this command. You need the Permission "KICK_MEMBERS" If you have the permission please retry.');
  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!member)return
message.channel.send
        }
    }
});

bot.login(token);
