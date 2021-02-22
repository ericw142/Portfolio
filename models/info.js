const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const InfoSchema = new Schema({
    password: {
        type: String
    }

});


const Info = mongoose.model('Info',InfoSchema)

module.exports = Info;