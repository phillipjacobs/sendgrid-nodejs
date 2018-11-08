
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY); // This Wont be valid if you didn't source that 'sendgrid.env' file

const TO = 'email you want to send this message TO';

const FROM = 'email you want to send FROM';

const SUBJECT = 'ADD A SUBJECT';

const TEXT = 'THIS IS WHERE THE TEXT GOES';

const HTML = 'add some text here <h1>Some HTML if you wish</h1>';

const msg = {
  to: TO,
  from: FROM,
  subject: SUBJECT,
  html: HTML, // REMOVE THIS LINE IF YOU WANT THE TEXT to be added to the email, else the HTML will overrite it
  text: TEXT
};

sgMail.send(msg);