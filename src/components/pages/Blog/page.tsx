import H2 from '@/components/ui/typography/h2';
import P from '@/components/ui/typography/p';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Blog = () => {
    return (
        <>
            <div className='flex flex-col gap-y-3 w-screen justify-center items-center h-[90vh]'>
                <H2 className='text-xl text-center'>Coming Soon!</H2>
                <P className='text-center'>This page is currently under development.</P>
                <Link href='/'>
                    <Button
                        variant={'outline'}
                        className='flex items-center w-fit'
                    >
                        Back to Home
                    </Button>
                </Link>
            </div>
        </>
    );
};

export default Blog;
