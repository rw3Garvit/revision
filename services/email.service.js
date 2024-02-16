const nodemailer = require("nodemailer");


let transport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: 'rw3.garvit.rd@gmail.com',
    pass: 'vmejnmieouatanvy',
  },
});

/** Send mail */
const send_mail = async (to, data ,subject) => {
  try {
    return transport.sendMail({
      from:'<rw3.garvit.rd@gmail.com>',
      to,
      subject,
      html:data
    });
  } catch (error) {
    return false;
  }
};

module.exports = {
  send_mail,
};