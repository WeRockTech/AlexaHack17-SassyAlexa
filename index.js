'use strict';

const Alexa = require('alexa-sdk');
const APP_ID = process.env.AMAZON_ID;  // TODO replace with your app ID (OPTIONAL).

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";

var SKILL_NAME = "Sassy Alexa";
var GET_SASSY_MESSAGE = "Here's your random sass: ";
var HELP_MESSAGE = "You can ask me to be sassy, or, you can say exit... What can I help you with love?";
var HELP_REPROMPT = "What can I help you with my dear?";
var STOP_MESSAGE = "Bye Felicia!";

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
var sassy_data = [
  "Not today Satan, not today!",
  "Your clothes looks like a donkey fucked a piñata and threw up.",
  "By the looks of you dear, you're going through the change of life.",
  "You are so full of shit, the toilet is jealous.",
  "You are shadier than a palm tree.",
  "I don't get cute. I get drop dead gorgeous.",
  "Ain't nobody got time for that.",
  "Good God Get a Grip Girl",
  "My goal is to always come from a place of love, but sometimes I just have to break it down for a mofo",
  "If you can't love yourself, how in the hell can you love somebody else?",
  "You are born naked and the rest is drag",
  "Roses are red, violets are blue. God made me beautiful, what happened to you?",
  "To be honest I don't even know why you keep trying because I honestly don't even care",
  " Seize the moment, because tomorrow you might be dead.",
  "If you can’t love yourself, how in the hell you gonna love somebody else?",
  "Life’s too short to bullshit.",
  "You’re not gonna tell me who I am. I’m gonna tell you who I am.",
  "Bitches get stuff done.",
  "Don’t get bitter, just get better.",
  "The secret of getting ahead is getting started.",
  "Always remember you’re unique, just like everyone else.",

]

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewSassyAlexaIntent');
    },
    'GetNewSassyAlexaIntent': function () {
        var factArr = sassy_data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomSass = factArr[factIndex];
        var speechOutput = GET_SASSY_MESSAGE + randomSass;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomSass)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
