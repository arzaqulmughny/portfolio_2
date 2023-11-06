import H2 from '@/components/ui/typography/h2';
import P from '@/components/ui/typography/p';
import tCertificate from '@/types/tCertificate';
import certificates from '@/data/certificates';

interface ICertificateItemProps {
    data: tCertificate;
}

const CertificateItem = (props: ICertificateItemProps) => {
    const { data } = props;

    return (
        <div className='grid grid-cols-[auto_auto] grid-rows-[auto_auto] gap-x-4 items-center justify-start'>
            <div className='w-2 h-2 rounded-full dark:bg-neutral-800 bg-primary/80' />

            <div>
                <strong>{data.title}</strong>
            </div>

            <div className='flex flex-col col-start-2 gap-y-4'>
                <div>
                    <P>{data.provider}</P>
                    <P>{data.time}</P>
                </div>
                <hr />
                <div className='flex flex-col gap-y-4'>
                    <P className='text-primary/80'>{data.description}</P>

                    {data.links?.map((link, index) => (
                        <a
                            key={`${data.title}-links-${index}`}
                            href={link.url}
                            target='_blank'
                            className='underline underline-offset-4'
                        >
                            {link.name} ↗
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

interface ICertificateListProps {
    data: tCertificate[];
}

const CertificateList = (props: ICertificateListProps) => {
    const { data } = props;
    return (
        <ul className='flex flex-col gap-y-16'>
            {data.length > 0 &&
                data.map((certificate, index) => (
                    <li key={`certificate-${index}`}>
                        <CertificateItem data={certificate} />
                    </li>
                ))}
        </ul>
    );
};

const Certification = () => {
    return (
        <div className='flex flex-col gap-y-4'>
            <H2>Certification</H2>
            <CertificateList data={certificates} />
        </div>
    );
};

export default Certification;
