const Alexa = require('alexa-sdk');
var crypto = require("./crypto");
var texts = require("./texts");

const handlers = {
    'CurrencyHint': function() {
        crypto.getHint().then(result => {
            var answer = this.t("HINT", {
                "name": result.name,
                "change": Math.round(parseFloat(result.change)),
                "rank": result.rank
            });
            this.emit(':tell', answer);
        }, error => {
            console.log(error);
        });
    }
};

exports.handler = (event, context, callback) => {
    const alexa = Alexa.handler(event, context, callback);
    alexa.appId = 'amzn1.ask.skill.07bfc0c0-5c8d-40cd-81f0-6f58e99fcd71';
    alexa.registerHandlers(handlers);
    alexa.resources = texts.texts;
    alexa.execute();
};
