const mongoose = require("mongoose");

module.exports = () => {
  mongoose
    .connect(
      "mongodb+srv://Rishy:N4BUh4CS2FDveVin@cluster0.sxw1v.mongodb.net/ImageUploader?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
      }
    )
    .then(() => console.log("Connected to Mongodb......"));
};
