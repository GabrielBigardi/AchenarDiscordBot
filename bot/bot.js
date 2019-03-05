var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var fs = require('fs');
var saveddanilocarregado = "danilocarregado.txt";
var savedcrowbarrioplaying = "crowbarrioplaying.txt";

//define a var global do json do savedvars
var saveddanilocarregadodata;
var savedcrowbarrioplayingdata;


// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Conectado');
    logger.info('Logado como: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
	
	if (user != "ACR Bot"){
		if(channelID == "549382401906704400"){
			bot.sendMessage({
							to: channelID,
							message: '!play the unforgiven 2'
						});
		}
	}
	
	
	if(userID != "429799860959576066" && user != "ACR Bot"){
		if(channelID == "518603094343548938"){
			bot.sendMessage({
							to: channelID,
							message: 'VC N É O GABRIEL <:Reeee:502599950417526804>'
						});
		}
	}
	
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
			
			case 'teste2':
				message.guild.member(userID).setNickname('teste2');
			break;
			
			case 'botuserid':
				bot.sendMessage({
						to: channelID,
						message: 'Bot USER ID: ' + bot.userID
					});
			break;
			
			case 'crowbarrioisplaying':
			savedcrowbarrioplayingdata = JSON.parse(fs.readFileSync('crowbarrioplaying.txt'))
			var crowbarrioplaying = savedcrowbarrioplayingdata.crowbarrioplayinginfo;
			crowbarrioplaying++;
			fs.writeFileSync(savedcrowbarrioplaying, '{"crowbarrioplayinginfo":"'+crowbarrioplaying+'"}');
			
			
				bot.sendMessage({
						to: channelID,
						message: 'cRoWbArRiO iS pLaYiNg ' + crowbarrioplaying + ' vezes !!! PORA CROWBARRIO OLHA O JOGO DISGRAÇA'
					});
			break;
			
			case 'danilocarregado':
			saveddanilocarregadodata = JSON.parse(fs.readFileSync('danilocarregado.txt'))
			var vezescarregado = saveddanilocarregadodata.danilocarregado;
			vezescarregado++;
			fs.writeFileSync(saveddanilocarregado, '{"danilocarregado":"'+vezescarregado+'"}');
			
			
				bot.sendMessage({
						to: channelID,
						message: 'DANILO JA FOI CARREGADO ' + vezescarregado + ' VEZES !!! PORA DANILU'
					});
			break;
			
			case 'userid':
				bot.sendMessage({
						to: channelID,
						message: 'Channel ID: ' + userID
					});
			break;
			
			case 'canalid':
				bot.sendMessage({
						to: channelID,
						message: 'Channel ID: ' + channelID
					});
			break;
			
			// !mensagem
			case 'mensagem':
			
				switch(args[0]){
					default:
					var mensagem = 'Hello World!';
					bot.sendMessage({
						to: channelID,
						message: mensagem
					});
					break;
					
					case '666':
					var mensagem = 'Hell World!';
					bot.sendMessage({
						to: channelID,
						message: mensagem
					});
					break;
				}
			break;
			
                
			
			
			
			// !parse
			case 'parse':
                bot.sendMessage({
                    to: channelID,
                    message: args[0]
                });
            break;
			
			
			
			// !reuniao
			case 'reuniao':
			
                bot.sendMessage({
                    to: channelID,
                    message: '@everyone O nosso querido <@!'+ userID +'> mandou correr, a reunião já vai começar e o Paulo é brabo!'
                });
            break;
			
			// !horario
			case 'horario':
			var d = new Date();
			
			var horas = d.getHours();
			var minutos = d.getMinutes();
			var segundos = d.getSeconds();
			
                bot.sendMessage({
                    to: channelID,
                    message: 'Agora são exatamente: ' + horas + ":" + minutos + " (e " + segundos + " segundos)"
                });
            break;
			
			
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
            // Just add any case commands if you want to..
         }
     }
});