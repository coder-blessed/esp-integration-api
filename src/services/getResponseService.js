const axios = require("axios");

const BASE_URL =  "https://api.getresponse.com/v3";

exports.verifyApiKey = async (apiKey) => {
    try {
        const response = await axios.get(`${BASE_URL}/accounts`, {
             headers: { "X-Auth-Token": `api-key ${apiKey}` }
        })
        return response.status === 200;
    } catch  {
        return false;
    }
};

exports.getLists = async (apiKey) => {
    try {
        const response = await axios.get(`${BASE_URL}/campaigns`, {
             headers: { "X-Auth-Token": `api-key ${apiKey}` }
        });

        return response.data;
    } catch (err) {
        throw new Error("failed to fetch getResponse lists");
    }
};