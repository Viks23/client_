const express = require('express');
const cors = require('cors');
require('dotenv').config();
const Mail = require('./mail');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // Ensure you can parse JSON payloads

app.post('/send-email', (req, res) => {
    const { user_name, user_email, message } = req.body;

    const mail = new Mail();
    mail.setTo(user_email);
    mail.setSubject("Welcome to UpSkillMafia – Let's Build Something Amazing!");
    mail.setText(`
        Dear ${user_name},

        We're thrilled to have you join the UpSkillMafia community!

        Thank you for choosing us. At UpSkillMafia, we're committed to helping you build 
        your website, mobile app, and more. Whether you're here for professional development or just exploring, we're here to assist you every step of the way.

        Explore Our Services: Check out our range of services on our website.
        Join Our Community: Follow us on social media to stay updated with the latest news and offers.
        Contact Support: If you have any questions, our support team is here to help. Feel free to reach out to us anytime.

        Exclusive Offer: As a token of our appreciation, we're excited to offer you an exclusive discount on your first project. Use the code WELCOME10 at checkout to enjoy 10% off.

        Closing: Thank you once again for choosing UpSkillMafia. We're excited to have you on board and look forward to helping you build something amazing.
    `);
    mail.setHTML(`
        <html>
            <body>
                <p>Dear ${user_name},</p>
                <p>We're thrilled to have you join the UpSkillMafia community!</p>
                <p>Thank you for choosing us. At UpSkillMafia, we're committed to helping you build your website, mobile app, and more. Whether you're here for professional development or just exploring, we're here to assist you every step of the way.</p>
                <p><strong>Explore Our Services:</strong> Check out our range of services on our website.</p>
                <p><strong>Join Our Community:</strong> Follow us on social media to stay updated with the latest news and offers.</p>
                <p><strong>Contact Support:</strong> If you have any questions, our support team is here to help. Feel free to reach out to us anytime.</p>
                <p><strong>Exclusive Offer:</strong> As a token of our appreciation, we're excited to offer you an exclusive discount on your first project. Use the code <strong>WELCOME10</strong> at checkout to enjoy 10% off.</p>
                <p>Thank you once again for choosing UpSkillMafia. We're excited to have you on board and look forward to helping you build something amazing.</p>
                <p>Best regards,</p>
                <p>Customer Support Team</p>
                <p>UpSkillMafia</p>
            </body>
        </html>
    `);
    mail.send();

    res.status(200).json({ message: 'Email sent successfully!' });
});

app.listen(PORT, () => console.log(`App Listening at http://localhost:${PORT}`));
