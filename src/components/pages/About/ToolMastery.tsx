import H2 from '@/components/ui/typography/h2';
import P from '@/components/ui/typography/p';
import toolsMastery from '@/data/toolsMastery';
import tToolMastery from '@/types/tToolMastery';

interface IToolMasteryItem {
    data: tToolMastery;
}

const ToolMasteryItem = (props: IToolMasteryItem) => {
    const { data } = props;

    return (
        <div className='grid grid-cols-[auto_auto] grid-rows-[auto_auto]  gap-x-4 items-center justify-start'>
            <div className='w-2 h-2 col-start-1 rounded-full dark:bg-neutral-800 bg-primary/80' />
            <P className='underline underline-offset-4'>{data.name}</P>

            <div className='flex flex-col col-start-2'>
                {data.list.length > 0 &&
                    data.list.map((listItem, index) => (
                        <P
                            className='text-primary/80'
                            key={`${data.name}-list-${index}`}
                        >
                            {listItem.name} : {listItem.value}
                        </P>
                    ))}
            </div>
        </div>
    );
};

interface IToolMasteryListProps {
    data: tToolMastery[];
}
const ToolMasteryList = (props: IToolMasteryListProps) => {
    const { data } = props;

    return (
        <ul className='flex flex-col gap-y-4'>
            {data.map((dataItem, index) => (
                <li key={`tool-${index}`}>
                    <ToolMasteryItem data={dataItem} />
                </li>
            ))}
        </ul>
    );
};

const ToolMastery = () => {
    return (
        <div className='flex flex-col gap-y-4'>
            <H2>Tools Mastery</H2>
            <ToolMasteryList data={toolsMastery} />
        </div>
    );
};

export default ToolMastery;
