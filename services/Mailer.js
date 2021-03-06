const sendGrid = require('sendgrid');
const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail { // 1.1
    constructor({ subject, recipients }, content) { // 1.2
        super(); // 1.3

        this.sgApi = sendgrid(keys.sendGridKey);
        this.from_email = new helper.Email('khughessean01@gmail.com');
        this.subject = subject;
        this.body = new helper.Content('text/html', content);
        this.recipients = this.formatAddresses(recipients);

        this.addContent(this.body);
        this.addClickTracking();
        this.addRecipients();
    }

    formatAddresses(recipients) {
        return recipients.map(({ email }) => {
            return new helper.Email(email);
        });
    };

    addClickTracking() {
        const trackingSettings = new helper.TrackingSettings();
        const clickTracking = new helper.ClickTracking(true, true);

        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSettings);
    };

    addRecipients() {
        const personalize = new helper.Personalization();
        this.recipients.forEach(recipient => {
            personalize.addTo(recipient); // 1.6
        });
        this.addPersonalization(personalize);
    };

    async send() {
        const request = this.sgApi.emptyRequest({
            method: 'POST',
            path: './v3/mail/send',
            body: this.toJSON()
        });

        const response = this.sgApi.API(request);
        return response;
    };
};

module.exports = Mailer;









/*
// 1.1
helper.Mail - this property is an object that takes a lot of configuration and spits out a mailer. We want to take that mailer class and we want to add onto it, provide some additional customization. 

Mailer class inherits from helper.Mail

// 1.2 
constructor is called automatically when the new keyword is used like this for example, new Mailer(...). It gives us an opportunity to do some amount of setup or initialization inside of the class instance. 

// 1.3 
Makes sure that any constructor defined on the Mail class gets executed by calling the super function. 

// 1.4
Whenever we make an instance of the mailer that instance will have a very specific from_email property. We assign this property to it by referencing 'this'. 

// 1.5
Must have () around { item } if you want to use destructuring with an arrow function. 

// 1.6
This is added to the personalize OBJECT. You are creating an object instance from Personalization object class using the new keyword. 


*/