const mongoose  = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://DhruvKumar:qwer1234@cluster0.y79vr.mongodb.net/test"
  );
};
