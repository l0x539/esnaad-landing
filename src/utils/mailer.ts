import {createTransport} from "nodemailer";

const transporter = createTransport({
    host: process.env.MAIL_SERVER,
    port: parseInt(process.env.MAIL_PORT??""),
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
    pool: true
});

export default transporter;