const mailer = require('nodemailer');
const mail = require('../../../config/mail');

module.exports = class MailService{

    static getUserTransport(){
        var smtpTransport = mailer.createTransport({
            service: mail.development.mailType,
            auth: {
                user: mail.development.username,
                pass: mail.development.password
            }
        });

        return smtpTransport;
    }

    static sendMail(transport, options) {
        
        transport.sendMail(options, (error, info) => {
            if(error){
                console.log(error);
            }else{
                console.log("Message sent: " + response.message);
            }
    
            transport.close();
        });
    }
    
}

