const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
    title: String,
    body: String, 
    subject: String, 
    recipients: [RecipientSchema],
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0 },
    _user: { type: Schema.Types.ObjectId, ref: 'User' }, // 1
    dateSent: Date,
    lastResponded: Date
});

mongoose.model('surveys', surveySchema);

/*
// 1
_user - Reference to an instance of a very particular user
        The underscore indicates that this is supposed to be a relationship field. It is done so purely by convension. 

_user: { type: Schema.Types.ObjectId, ref: 'User' }
Every survey is going to belong to a very particular user 

    type: Schema.Types.ObjectId
    When every schema saved to DB, if we look up this user property We will see an id assigned to _user field and it will be the id of the user who owns this record

    ref: 'User'
    Tells mongoose that the reference that we are making this to belongs to the users collection
*/