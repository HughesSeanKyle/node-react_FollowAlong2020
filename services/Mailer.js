const sendGrid = require('sendgrid');
const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail { // 1

}

module.exports = Mailer;









/*
// 1.1
helper.Mail - this property is an object that takes a lot of configuration and spits out a mailer. We want to take that mailer class and we want to add onto it, provide some additional customization. 

Mailer class inherits from helper.Mail
*/