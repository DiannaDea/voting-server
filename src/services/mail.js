import nodemailer from 'nodemailer';
import CONFIG from '../config';

export default class MailService {
    static getTransporter() {
        return nodemailer.createTransport({
            service: CONFIG.mail.SERVICE,
            auth: {
                user: CONFIG.mail.EMAIL,
                pass: CONFIG.mail.PASSWORD,
            },
        });
    }

    static sendEmail({ to, subject, text }) {
        const transporter = MailService.getTransporter();

        const mailOptions = {
            from: CONFIG.mail.EMAIL,
            to,
            subject,
            text,
        };

        return transporter.sendMail(mailOptions);
    }
}
