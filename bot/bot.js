const Discord = require('discord.js');

const client = new Discord.Client();



client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
	message.guild.members.get("306252406981918721").setNickname("SUMIU ???");
});



client.login('NTA1MDkzNzg1NTg0NDAyNDM0.D0ekUw.I1GVTSinuiSMrV40k4ZOoqcydeo');