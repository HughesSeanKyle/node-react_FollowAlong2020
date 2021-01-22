const sendGrid = require('sendgrid');
const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail { // 1.1
    constructor({ subject, recipients }, content) { // 1.2
        super(); // 1.3

        this.from_email = new helper.Email('khughessean01@gmail.com');
        this.subject = subject;
        this.body = new helper.Content('text/html', content);
        this.recipients = this.formatAddresses(recipients);
    }
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
*/