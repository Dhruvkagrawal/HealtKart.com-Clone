require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const MNumber = process.env.TWILIO_PHONE_NUMBER;

const sendSms = (phone, message) => {
  const client = require("twilio")(accountSid, authToken);
  console.log(phone);
  client.messages
    .create({
      body: message,
      from: MNumber,
      to: `+91${phone}`,
    })
    .then((message) => console.log(message.sid));
};
module.exports = sendSms;
