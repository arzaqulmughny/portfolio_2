import H2 from '@/components/ui/typography/h2';
import P from '@/components/ui/typography/p';
import experiences from '@/data/experiences';
import tExperience from '@/types/tExperience';
import { ArrowUpRight } from 'lucide-react';

interface IExperienceItemProps {
    data: tExperience;
}

const ExperienceItem = (props: IExperienceItemProps) => {
    const { data } = props;

    return (
        <div className='grid grid-cols-[auto_auto] grid-rows-[auto_auto] gap-x-4 items-center'>
            <div className='w-2 h-2 rounded-full dark:bg-neutral-800 bg-primary/80' />

            <div>
                <strong>{data.position}</strong> - {data.company}
            </div>

            <div className='flex flex-col col-start-2 gap-y-4'>
                <div>
                    <P>{data.title || ''}</P>
                    <P>
                        {data.time} - {data.duration}
                    </P>
                </div>
                <hr />
                <div className='flex flex-col gap-y-4'>
                    <P className='text-primary/80'>{data.description}</P>

                    {data.links &&
                        data.links.length > 0 &&
                        data.links.map((link, index) => (
                            <a
                                key={`${data.title}-link-${index}`}
                                href={link.url}
                                target='_blank'
                                className='flex items-center underline underline-offset-4 gap-x-2'
                            >
                                {link.name} <ArrowUpRight className='w-4 aspect-square' />
                            </a>
                        ))}
                </div>
            </div>
        </div>
    );
};

interface IExperienceList {
    data: tExperience[];
}
const ExperienceList = (props: IExperienceList) => {
    const { data } = props;

    return (
        <ul>
            {data.map((experienceData, index) => (
                <li key={`experience-${index}`}>
                    <ExperienceItem data={experienceData} />
                </li>
            ))}
        </ul>
    );
};

const Experience = () => {
    return (
        <div className='flex flex-col gap-y-4'>
            <H2>Experience</H2>
            <ExperienceList data={experiences} />
        </div>
    );
};

export default Experience;
