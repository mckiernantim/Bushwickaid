const functions = require('firebase-functions');
const cors = require('cors')({
  origin: true
});
const mailgun = require("mailgun-js");
const DOMAIN = 'sandbox00ce53d916c3432198c3cdfdf2d71004.mailgun.org';
const api_key = 'key-41a0ebb1953797fbe176c2be241f1beb';
const mg = mailgun({
  apiKey: api_key,
  domain: DOMAIN
});



exports.contactUs = functions.https.onRequest((req, res) => {


  return cors(req, res, () => {
    let emailInfo = JSON.parse(req.body)
    const data = {
      from: 'help@sandbox00ce53d916c3432198c3cdfdf2d71004.mailgun.org',
      to: emailInfo.claimedBy,
      subject: "Bushwick Mutual Aid Corona Virus Task for: " + emailInfo.author + " -  " + emailInfo.text,

      html: "<p>hello, you've agreed to assist " +
        emailInfo.author +
        " with  a Bushwick Mutual Aid Task entitled: " +
        emailInfo.text + " at " +
        emailInfo.time + "." +
        emailInfo.author + " can also be contacted at " +
        emailInfo.contact +
        " for more information.  Thank you and be safe out there! </p>",
      text: "this is tbhe text"
    };
    mg.messages().send(data, (error, body) => {

      body ? res.status(200).send(error) : res.status(500).send(body);
    });
  });
});


exports.sendEmailToHelper = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    const data = {
      from: 'help@sandbox00ce53d916c3432198c3cdfdf2d71004.mailgun.org',
      to: 'mckiernantim@gmail.com',
      subject: "email test",

      html: "<p>works?</p>",
      text: "this is tbhe text"
    };
    mg.messages().send(data, (error, body) => {

      body ? res.status(200).send(body) : res.status(500).send(error);
    });
  });
});