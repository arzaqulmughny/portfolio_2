import H2 from '@/components/ui/typography/h2';
import P from '@/components/ui/typography/p';
import skills from '@/data/skills';

interface ISkillItem {
    name: string;
}

const SkillItem = (props: ISkillItem) => {
    const { name } = props;

    return (
        <div className='flex items-center gap-x-4'>
            <div className='w-2 h-2 rounded-full dark:bg-neutral-800 bg-primary/80' />
            <P className='text-primary/80'>{name}</P>
        </div>
    );
};

interface ISkillListProps {
    data: string[];
}

const SkillList = (props: ISkillListProps) => {
    const { data } = props;

    return (
        <ul className='flex flex-col text-start'>
            {data.length > 0 &&
                data.map((skill, index) => (
                    <li key={`skill-${index}`}>
                        <SkillItem name={skill} />
                    </li>
                ))}
        </ul>
    );
};

const Skills = () => {
    return (
        <div className='flex flex-col gap-y-4'>
            <H2>Skills</H2>
            <SkillList data={skills} />
        </div>
    );
};

export default Skills;
