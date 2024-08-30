import { render } from '@react-email/render';

const MailClient = async () => {

    return await render(<div>
        <h3>The Spark by Esnaad</h3>
        <p>Here is your attachment brochure.</p>
    </div>, {
        plainText: true
    })
};

export default MailClient;