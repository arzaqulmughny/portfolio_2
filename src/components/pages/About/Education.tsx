import H2 from '@/components/ui/typography/h2';
import P from '@/components/ui/typography/p';

const Education = () => {
    return (
        <div className='flex flex-col gap-y-4'>
            <H2>Education</H2>
            <div className='grid grid-cols-[auto_auto] grid-rows-[auto_auto] items-center justify-start gap-x-4'>
                <div className='w-2 h-2 col-start-1 rounded-full dark:bg-neutral-800 bg-primary/80' />
                <P className='col-start-2'>SMKN 1 Pasuruan</P>
                <P className='col-start-2 row-start-2 text-primary/80'>
                    Computer & Network Engineer <br /> 2019 - 2022
                </P>
            </div>
        </div>
    );
};

export default Education;
