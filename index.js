'use strict';
const Discordie = require("discordie");
const Events = Discordie.Events;

const config = require('./config');
const dateFormat = require('dateformat');

const client = new Discordie({autoReconnect: true});

client.connect({token: config.token});

var cmd = {};
require("fs").readdirSync(require("path").join(__dirname, "commands")).forEach(function(file) {
  let command = require("./commands/" + file);
	console.log(file+" loaded.");
  for (let i = 0;i < command.length; i++) {
    for (let y = 0;y < command[i].alias.length; y++) {
      cmd[command[i].alias[y]] = command[i].action;
    }
  }
});

const messageHandler = function(e){
  if(e.message.content[0] === "!") {
    const params = e.message.content.split(" ");
    const command = params.shift().substr(1);
    if (typeof cmd[command] != "undefined") {
    	cmd[command](client,e.message,params);
    }else{
    	e.message.channel.sendMessage("Hmm, you need help? !help for help :smile:");
    }
    client.Channels.get(config.log).sendMessage("["+dateFormat(new Date(), "HH:MM:ss")+"] "+e.message.author.username+"#"+e.message.author.discriminator+"```xl\n"+e.message.content+"```");
  }
};
client.Dispatcher.on("GATEWAY_READY", e => {
  console.log("Connected as: " + client.User.username);
  client.User.setStatus("online", "!help"); 
});
client.Dispatcher.on(Events.MESSAGE_CREATE, messageHandler);

process.on('uncaughtException', function(err) {
  if (err.code !== 'ECONNRESET') {
    throw err;
  } else {
    console.error(err);
  }
});

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || config.port));
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});