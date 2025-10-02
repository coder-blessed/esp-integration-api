
const mongoose = require("mongoose");

const IntegrationSchema = new mongoose.Schema({
    userId:{type : String , require: true},
    esp:{type: String, enum: ["mailchimp", "getresponse"], reqired: true},
    apiKey: {type: String , required: true},
    createdAt:{ type: Date, default: Date.now},
})

module.exports = mongoose.model("Integration", IntegrationSchema);