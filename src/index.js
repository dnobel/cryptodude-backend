const alexaSkill = require('./alexa-lambda');
var testEvent = {
  "session": {
    "new": true,
    "sessionId": "SessionId.880c842b-9503-4877-bfc9-5d647231d35e",
    "application": {
      "applicationId": "amzn1.ask.skill.07bfc0c0-5c8d-40cd-81f0-6f58e99fcd71"
    },
    "attributes": {},
    "user": {
      "userId": "amzn1.ask.account.AGMJH2UR6DWMBRA2NEN3GOO3O54TEA5G5VVARK4GN7P3O3QTUQSL2CBKXBCURUY6EFS4V4A266FW3YYZ4OCBFHNDDD6ATEVCJASJBRM6THWIRAATXTU5MN5JKO67MWSQXNNHTVLNQXSDLKXTJRO7KEYAEJKMLHDWURENZJAJEGDLPYUA2OHTQ4SGUXXQ2XXRKRHNBEJQZZENCRI"
    }
  },
  "request": {
    "type": "IntentRequest",
    "requestId": "EdwRequestId.387b9bd0-6b02-4308-bf49-bfa70115ce52",
    "intent": {
      "name": "CurrencyHint",
      "slots": {}
    },
    "locale": "de-DE",
    "timestamp": "2018-01-07T21:27:22Z"
  },
  "context": {
    "AudioPlayer": {
      "playerActivity": "IDLE"
    },
    "System": {
      "application": {
        "applicationId": "amzn1.ask.skill.07bfc0c0-5c8d-40cd-81f0-6f58e99fcd71"
      },
      "user": {
        "userId": "amzn1.ask.account.AGMJH2UR6DWMBRA2NEN3GOO3O54TEA5G5VVARK4GN7P3O3QTUQSL2CBKXBCURUY6EFS4V4A266FW3YYZ4OCBFHNDDD6ATEVCJASJBRM6THWIRAATXTU5MN5JKO67MWSQXNNHTVLNQXSDLKXTJRO7KEYAEJKMLHDWURENZJAJEGDLPYUA2OHTQ4SGUXXQ2XXRKRHNBEJQZZENCRI"
      },
      "device": {
        "supportedInterfaces": {}
      }
    }
  },
  "version": "1.0"
}
alexaSkill.handler(testEvent, {}, (error, result) => {
    console.log(error);
    console.log(result);
});  