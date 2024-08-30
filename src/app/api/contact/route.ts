import transporter from '@/utils/mailer';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod'
import validator from "validator";
import MailTemplate from '@/components/Mail';
import MailClient from '@/components/MailClient';

const schema = z.object({
    email: z.string({
        invalid_type_error: 'Invalid Email',
    }).min(3).email({
        message: 'Invalid Email'
    }),
    name: z.string().min(1).max(200),
    number: z.string().refine(validator.isMobilePhone)
})

export async function POST(req: NextRequest, res: NextResponse) {
    const data = await req.formData();
    const {
        name,
        email,
        number,
        recaptcha
    } = {
        name: data.get('name')?.toString() ?? "",
        email: data.get('email')?.toString() ?? "",
        number: data.get('number')?.toString() ?? "",
        recaptcha: data.get('recaptcha')?.toString() ?? "",
    };

    const validated = schema.safeParse({
        name,
        email,
        number
    });

    if (validated.error) {
        return Response.json({ status: "error", message: validated.error.message });
    }

    const captchaResponse = await (await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        body: new URLSearchParams({
            secret: process.env.GOOGLE_RECAPTCHA_SECRET_KEY ?? "",
            response: recaptcha
        })
    })).json();

    if (captchaResponse.status === false || captchaResponse.score < 0.6) {
        return Response.json({ status: "error", message: "Failed recaptcha", score: captchaResponse.score });
    }

    const message = `
    Email: ${email}
    Name: ${name}
    Number: ${number}
    `

    transporter.sendMail({
        from: process.env.MAIL_FROM_ADDRESS, // sender address
        to: process.env.MAIL_RECEIVERS, // list of receivers
        subject: process.env.MAIL_SUBJECT, // Subject line
        text: message, // plain text body
        html: await MailTemplate({
            name,
            email,
            number
        }),
    });

    transporter.sendMail({
        from: process.env.MAIL_FROM_ADDRESS,
        to: email,
        subject: "The Spark By Esnaad Brochure",
        text: `Find the attachment brochure down below.`,
        html: await MailClient(),
        attachments: [{
            filename: 'The Spark By Esnaad Brochure.pdf',
            path: "../../../../assets/docs/brochure.pdf"
        }]
    });

    return Response.json({
        status: "success",
    });
}