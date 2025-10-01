const Integration = require("../models/Integration");
const mailchimpService = require("../services/mailchimpService");
const getResponseService = require("../services/getResponseService");
const { handleError } = require("../utils/errorHandler");


exports.addIntegration = async (req , res) => {
    try {
        const {userId , esp , apiKey } = req.body;
        let isValid = false;
        if (esp === "mailchimp") {
            isValid = await mailchimpService.verifyApiKey(apiKey);
        }else if(esp === "getresponse"){
            isValid = await getResponseService.verifyApiKey(apiKey);
        }

       
    if (!isValid) return handleError(res, 400, "Invalid API key");

    const integration = await Integration.create({ userId, esp, apiKey });

    res.json({ message: "Integration added successfully", integration });



    } catch (error) {
        res.status(500).json({error: error.message});
        
    }
    
};

exports.getLists = async (req, res) => {
    try {
        const {userId , esp } = req.query;
        const record = await Integration.findOne({userId, esp});

        if (!record) return res.status(404).json({error: "record not found"});
        
        let lists = [];
        
        if (esp === "mailchimp") {
            lists = await mailchimpService.getLists(record.apiKey);
        } else if(esp === "getresponse"){
           lists = await getResponseService.getLists(record.apiKey);
        }

        res.json({ lists});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
    
}