import CopyButton from '@/components/CopyButton';
import { Button } from '@/components/ui/button';
import H2 from '@/components/ui/typography/h2';
import P from '@/components/ui/typography/p';
import copyToClipboard from '@/lib/copy-to-clipboard';
import { LinkedIn, Mail } from '@/shared/components/Icons';

type tContact = {
    name: string;
    value: string;
    icon: JSX.Element;
};

const contacts = [
    {
        name: 'Email Address',
        value: 'zaarza03@gmail.com',
        icon: <Mail />,
    },
    {
        name: 'LinkedIn',
        value: 'https://linkedin.com/in/arzaqul',
        icon: <LinkedIn />,
    },
];

interface IContactItemProps {
    data: {
        name: string;
        value: string;
        icon: JSX.Element;
    };
}

const ContactItem = (props: IContactItemProps) => {
    const { data } = props;

    return (
        <div className='flex items-center gap-x-4 group'>
            <div
                className='w-6 h-6 fill-primary'
                title={data.name}
            >
                {data.icon}
            </div>
            <P className='w-56 overflow-x-hidden text-primary/80 whitespace-nowrap text-ellipsis'>{data.value}</P>
            <CopyButton text={data.value} />
        </div>
    );
};

interface IContactListProps {
    data: tContact[];
}

const ContactList = (props: IContactListProps) => {
    const { data } = props;

    return (
        <ul className='flex flex-col gap-y-4'>
            {data.length > 0 &&
                data.map((contact, index) => (
                    <li key={`contact-${contact.name}`}>
                        <ContactItem data={contact} />
                    </li>
                ))}
        </ul>
    );
};

const Contact = () => {
    return (
        <div className='flex flex-col gap-y-4'>
            <H2>Contact</H2>
            <ContactList data={contacts} />
        </div>
    );
};

export default Contact;
