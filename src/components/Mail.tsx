import { render } from '@react-email/render';

const MailTemplate = async ({
    name,
    email,
    number
}: {
    name: string;
    email: string;
    number: string;
}) => {

    return await render(<div>
        <h3>Email:</h3>
        <p>{email}</p>
        <h3>Name:</h3>
        <p>{name}</p>
        <h3>Number:</h3>
        <p>{number}</p>
    </div>, {
        plainText: true
    })
};

export default MailTemplate;