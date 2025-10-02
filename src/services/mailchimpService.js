
const axios = require("axios");

exports.verifyApiKey = async (apiKey) => {
    try {
        const dataCenter = apiKey.split("-")[1];
        const response = await axios.get(`https://${dataCenter}.api.mailchimp.com/3.0/`, {
     auth: {
        username: "anystring",
        password: apiKey
      }
    });
        return response.status === 200;


    } catch {
        return false;
    }
}

exports.getLists = async (apiKey) => {
    try {
        const dataCenter = apiKey.split("-")[1];
        const response = await axios.get(`https://${dataCenter}.api.mailchimp.com/3.0/lists`,{
        auth: {
        username: "anystring", 
        password: apiKey
      }
    });
        return response.data.lists;
    } catch (err) {
        throw new Error ("Failed to fetch mailchimp lists");
    }
};