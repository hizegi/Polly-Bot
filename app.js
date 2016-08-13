  pry = require('pryjs')
var dotenv = require('dotenv');

dotenv.load();

var request = require('request');
var slackbot = require('./slackbot-new');
var xml2js = require('xml2js');
var fs = require('fs');
var xmlParser = new xml2js.Parser();

var botKey = process.env['SLACKBOT_KEY'];
var taID = process.env['TA_ID'];
var adminID = process.env['ADMIN_ID'];

var bot = new slackbot(botKey);
var bot_functions = require('./bot-functions')(bot, taID, adminID);
var easterEggs = require('./easter-eggs')(bot, taID);

bot.use(bot_functions);

for (var key in easterEggs) {
  bot.use(easterEggs[key]);
}

bot.connect();
