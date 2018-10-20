import nodemailer from 'nodemailer';
import config from 'config';

export default class MailService {
    static getTransporter() {
        return nodemailer.createTransport({
            service: config.mail.service,
            auth: {
                user: config.mail.email,
                pass: config.mail.password,
            },
        });
    }

    static sendEmail({ to, subject, text }) {
        const transporter = MailService.getTransporter();

        const mailOptions = {
            from: config.mail.email,
            to,
            subject,
            text,
        };

        return transporter.sendMail(mailOptions);
    }
}
