import { useForm, FormProvider } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '../../core/atoms/FormControls/Input';
import props from '../../data/contactUs.json';

export type FormControlValue = string | number | boolean | null;
export interface energySavingProps {
    totalEnergySavings: string;
    totalEnergySavingsInCAD: string;
    totalRebate: string;
    totalGreenHouseGasSavings: string;
    totalEquivalentCarsAndTrucks: string;
    totalEquivalentLitresOfGasoline: string;
    totalEquivalentPeopleInAYear: string;
    totalEquivalentAcresOfForest: string;
    totalEquivalentTonnesOfWaste: string;
}
export interface SendEmailProps {
    type?: string;
    to: string;
    subject?: string;
    params?: { [key: string]: string | number } | energySavingProps;
    files?: Array<File | null>;
}
export enum MAIL_TYPE {
    SUBSCRIBE = 'SUBSCRIBE',
    ENERGY_CALCULATOR = 'ENERGY_CALCULATOR',
    CONTACT_US_FORM = 'CONTACT_US_FORM',
    MORE_INFO_FORM = 'MORE_INFO_FORM',
    PERSONA_CTA_FORM = 'PERSONA_CTA_FORM',
    SERVICE_PERSONA_FORM = 'SERVICE_PERSONA_FORM',
    DEFAULT = 'DEFAULT',
}
type EmailResponse = {
    success: boolean;
    message: string;
};
const validationSchema = yup.object({
    Service: yup.string(),
    FirstName: yup.string().required('This Field is Required'),
    LastName: yup.string().required('This Field is Required'),
});
const getBase64 = async (file: File | null) => {
    return new Promise((resolve) => {
        const reader = new FileReader();
        if (file) {
            reader.onload = () => {
                const dataUrlPrefix = `data:${file.type};base64,`;
                resolve(String(reader.result).replace(dataUrlPrefix, ''));
            };
            reader.readAsDataURL(file);
        } else resolve(null);
    });
};
const sendEmail = async ({
    type,
    to,
    subject,
    params,
    files,
}: SendEmailProps): Promise<EmailResponse> => {
    try {
        const attachments = [];

        for (const file of files || []) {
            const content = await getBase64(file);
            attachments.push({
                filename: file?.name,
                type: file?.type,
                disposition: 'attachment',
                content: content,
            });
        }

        const config = {
            to,
            subject: subject || 'AFL',
            params,
            type,
            attachments: attachments,
        };

        console.log('Message', config);
        // Send the email to the API route for email
        const response = await fetch('/api/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(config),
        });
        if (response.status === 200) {
            return { success: true, message: 'Email sent successfully' };
        } else {
            return { success: false, message: 'Error sending email' };
        }
    } catch (error) {
        return { success: false, message: 'Error sending email' };
    }
};
const ContactUs = () => {
    const formMethods = useForm({
        resolver: yupResolver(validationSchema),
    });
    const onSubmit = async (data: { [key: string]: FormControlValue }) => {
        const contactUsEmailConfig: SendEmailProps = {
            type: MAIL_TYPE.CONTACT_US_FORM,
            to: data.EmailAddress as string,
            params: data as { [key: string]: string | number },
        };
        const contactEmail = await sendEmail(contactUsEmailConfig);
        if (contactEmail.success) {
            console.log('form submitted');
        } else {
            console.log('error', contactEmail.message);
        }
    };
    return (
        <FormProvider {...formMethods}>
            <form noValidate>
                <div>
                    <h3 className="text-center">Contact Us Form</h3>;
                </div>

                <div className="row">
                    <Input
                        name="FirstName"
                        label={props.fields.FirstName}
                        required
                        max={25}
                        className="col-md-6 mb-5"
                    />
                    <Input
                        name="LastName"
                        label={props.fields.LastName}
                        required
                        max={25}
                        className="col-md-6 mb-5"
                    />
                </div>
                <div className="row">
                    <button type="submit" className="" onClick={formMethods.handleSubmit(onSubmit)}>Submit</button>
                </div>
            </form>
        </FormProvider >
    )
}
export default ContactUs