var AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });

function sendEmail(name, email, msg) {
  return new Promise((resolve, reject) => {
    var params = {
      Destination: {
        ToAddresses: ["kevinbriggs1@gmail.com"]
      },
      Message: {
        Body: {
          Text: {
            Charset: "UTF-8",
            Data: `Name: ${name}, Email: ${email}, Message: ${msg}`
          }
        },
        Subject: {
          Charset: "UTF-8",
          Data: "Message from mrteacherkevin.com"
        }
      },
      Source: "kevinbriggs1@gmail.com",
      ReplyToAddresses: ["kevinbriggs1@gmail.com"]
    };

    var sendPromise = new AWS.SES({ apiVersion: "2010-12-01" })
      .sendEmail(params)
      .promise();

    sendPromise
      .then(function(data) {
        resolve(data.MessageId);
      })
      .catch(function(err) {
        reject(err);
      });
  });
}
module.exports = sendEmail;
