require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const MNumber = process.env.TWILIO_PHONE_NUMBER;

module.exports = (phone, message) => {
  const client = require("twilio")(accountSid, authToken);
  client.messages
    .create({
      body: message,
      from: MNumber,
      to: phone,
    })
    .then((message) => console.log(message.sid));
};