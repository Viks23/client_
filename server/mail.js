const nodemailer = require('nodemailer');

const trasporter = nodemailer.createTransport({
    service:'gmail',
    host:'smtp.gmail.com',
    secure:false,
    port:587,
    auth:{
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

class Mail {
    constructor() {
        this.mailOptions = {
            from :{
                address: process.env.EMAIL,
                name:"UpSkillMafia"
            }
        };
    }

    /**
     * Sets the name of the company that is sending the email.
     * 
     * @param {string} name - The name of the company. 
     */

    sendCompanyName(name){
        //Set the name of the company in the mail options.
        this.mailOptions.from.name = name;
    }

    /**
     * Sets the email address of sender.
     * 
     * @param {string} email - The the email address of sender. 
     */

    sendSenderEmail(email){
        //Set the email address of sender in the mail options.
        //
        //{string} email = the email address of the sender
        this.mailOptions.from.address = email;
    }

    /**
     * Sets the name of the company that is sending the email.
     * 
     * @param {string} receiver - The the email address of recipient. 
     */

    setTo(receiver){
        /**
         * The email address of the recipient
         * @type {string}
         */

        this.mailOptions.to = receiver;
    }


    /**
     * Sets the subject of the email.
     * 
     * @param {string} subject - The subject of the email. 
     */

    setSubject(subject){

        // Sets the subject of the email.
        //
        // @param {string} subject - The subject of the email.  

        this.mailOptions.subject = subject;
    }
    /**
     * Sets the text content of the email.
     * 
     * @param {string} text - The text content of the email. 
     */

    setText(text){
        /**
         * The text content of the email
         * @type {string}
         */

        this.mailOptions.text = text;
    }
    /**
     * Sets the HTML content of the email.
     * 
     * @param {string} text - The HTML content of the email. 
     */

    setHTML(html){
        /**
         * The HTML address of the email
         * @type {string}
         */

        this.mailOptions.html = html;
    }

    /**
     * Sends the email using the configured options.
     * 
     * This function uses the nodemailer trasnporter to send the emial.
     * If an error ouccures during sending, it logs the error.
     * If the emial is sent successfully, it logs the response from the server.
     * 
     * @return {void} Does not return anything
     */

    send() {
        // Send the email using the configured options.
        // The method uses the nodemailer transporter to send the email.
        // If an error occurres, logs the error.
        // If the email is send successfully, logs the response from the server

        //send the email using the mail options and logs the result.
        trasporter.sendMail(this.mailOptions, (error,info) => {
            // If an error occures, logs the error.
            if (error){
                console.log(error);
            } else {
                // If the email is sent successfully, logs the response from the
                console.log('Email sent: ' + info.response);
            }
        });
    }


}

module.exports = Mail;
