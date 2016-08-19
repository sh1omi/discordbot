# sh1omi's discord bot
This bot is for developers and not for download&run.
The bot is complete but you need to add the commands that you want.
### config.js
```javascript
module.exports = {
  port: 5000, // Port for the express server (No need to change this)
  token: '', // You need to have a bot token and client_id from https://discordapp.com/developers/applications/me
  client_id: '',
  log: '' // Channel ID for logging commands
};
```
### Adding commands
Adding new commands is easy as possible.
Add new javascript file in the folder "commands", use this example to build your custom commands:
You can add more than one command per js file, do what you want :)
```javascript
'use strict';
module.exports = [
	{
		alias:['ping','sh1omi','github'], // Aliases for the commands, you can add as much as you want.
		action: (bot, msg, params) => {
			msg.channel.sendMessage("PONG!");
		}
	},
	{
		alias:['magic'], // Aliases for the commands, you can add as much as you want.
		action: (bot, msg, params) => {
			msg.channel.sendMessage("MAGIC!");
		}
	}
];
```
### Editing help command
All the help data is stored in "data/help.json".
**Changing the alias of the command in "data/help.json" will change only the alias in the !help command.**
```json
{
  "Example Of Category": [
    {
      "help": "change me?",
      "alias": ["discord","bot","sh1omi"]
    }
  ],
  "Example Without Help": [
    {
      "alias": ["example1"]
    },
    {
      "alias": ["example2","example3"]
    }
  ]
}
```
The help infomartion will be send as a DirectMessage(you can change that in "commands/help.js"), here is a screenshot:
![alt tag](http://i.imgur.com/xlXec48.png)
### Log feature
The bot will log all the commands that executed in a channel that you choose in the config file.
If you want to change something with the log settings go to "index.js" line 32.
![alt tag](http://i.imgur.com/sYtYCqm.png)
