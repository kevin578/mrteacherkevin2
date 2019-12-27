var AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });
var fs = require("fs");
var Handlebars = require("handlebars");

function sendEmail(name, email, msg) {
  return new Promise((resolve, reject) => {
    getTemplate()
      .then(template => sendTemplate(name, email, msg, template))
      .then(() => resolve())
      .catch(err => reject(err));
  });
}

function getTemplate() {
  return new Promise((resolve, reject) => {
    fs.readFile(`${__dirname}/emailTemplates/message.html`, function(
      err,
      data
    ) {
      if (err) reject(err);
      resolve(data.toString());
    });
  });
}

function sendTemplate(name, email, msg, template) {
  return new Promise((resolve, reject) => {

    const compiledTemplate = Handlebars.compile(template);
    const compiledHTML = compiledTemplate({name, email, msg});

    var params = {
      Destination: {
        ToAddresses: ["kevinbriggs1@gmail.com"]
      },
      Message: {
        Body: {
          Text: {
            Charset: "UTF-8",
            Data: `Name: ${name}, Email: ${email}, Message: ${msg}`
          },
          Html: {
            Data: compiledHTML,
            Charset: "UTF-8"
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
