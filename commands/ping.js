'use strict';
module.exports = [
	{
		alias:['ping'],
		action: (bot, msg, params) => {
			msg.channel.sendMessage("PONG!");
		}
	}
];
