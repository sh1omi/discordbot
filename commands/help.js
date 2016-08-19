'use strict';
const data = require('../data/help.json');
module.exports = [
	{
		alias:['help'],
		action: (bot, msg, params) => {
			let help='';
			for(let category in data){
    			help += category+"\n";
    			for (let i = 0;i < data[category].length; i++) {
					for (let y = 0;y < data[category][i].alias.length; y++) {
						help += "!"+data[category][i].alias[y]+" ";
					}
					if (data[category][i].help!=null) help += "\t"+data[category][i].help;
					help += "\n";
    			}
			}
			msg.author.openDM().then(function(dm){dm.sendMessage("```xl"+ "\n►►►►►►►►►►HELP◄◄◄◄◄◄◄◄◄◄\n"+help+"```");})
    		if(msg.channel.guild_id!=null) msg.reply("Check your DM :smiley:");
		}
	}
];
