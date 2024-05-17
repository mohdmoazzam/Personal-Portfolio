const nodemailer = require("nodemailer");
const mailSender = require("../utility/mailsender");
const { contactUsEmail } = require("../app-data/email-templates/contactFormRes");

const sendEmail = async (req, res) => {
    try {
        const admin_email = process.env.OWNER_EMAIL;
        const { name, email, msg } = req.body;
        if (!name || !email || !msg) {
            return res.status(400).send({
                success: false,
                message: "Please provide all fields"
            });
        }
        await mailSender(email, "Your Data send successfully", contactUsEmail(email, name, msg));
        await mailSender(admin_email, "Someone Send this data to you", contactUsEmail(email, name, msg));
        return res.status(201).send({
            success: true,
            message: "Send successfully"
        })
    } catch (ex) {
        console.error(ex);
        return res.status(400).send({
            success: false,
            message: "Something went wrong"
        });
    }
};

module.exports = { sendEmail };