var AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });
var fs = require("fs");
var Handlebars = require("handlebars");

function sendEmail(emailOptions) {
  return new Promise((resolve, reject) => {
    const { templateName } = emailOptions;
    getTemplate(templateName)
      .then(template => sendTemplate(emailOptions, template))
      .then(() => resolve())
      .catch(err => reject(err));
  });
}

function getTemplate(templateName) {
  return new Promise((resolve, reject) => {
    fs.readFile(`${__dirname}/emailTemplates/${templateName}.html`, function(
      err,
      data
    ) {
      if (err) reject(err);
      resolve(data.toString());
    });
  });
}

function sendTemplate(emailOptions, template) {
    const  {data, fallbackText, subject, sendTo } = emailOptions;
  return new Promise((resolve, reject) => {
    const compiledTemplate = Handlebars.compile(template);
    const compiledHTML = compiledTemplate(data);
    var params = {
      Destination: {
        ToAddresses: sendTo
      },
      Message: {
        Body: {
          Text: {
            Charset: "UTF-8",
            Data: fallbackText
          },
          Html: {
            Data: compiledHTML,
            Charset: "UTF-8"
          }
        },
        Subject: {
          Charset: "UTF-8",
          Data: subject
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
