import Logo from '@/components/icons/Logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Github, Instagram, LinkedIn } from '@/shared/components/Icons';

const Footer = () => {
    return (
        <footer className='flex justify-between max-w-3xl px-3 py-2 mx-auto border-t bg-background dark:border-t-neutral-800 border-t-neutral-100'>
            <Link href='/'>
                <Button variant={'ghost'}>
                    <Logo className='fill-primary' />
                </Button>
            </Link>

            <div className='flex gap-x-4'>
                <a
                    href='https://instagram.com/zaarza03'
                    target='_blank'
                >
                    <Button
                        variant={'ghost'}
                        className='stroke-1'
                    >
                        <div className='w-6 aspect-square fill-primary'>
                            <Instagram />
                        </div>
                    </Button>
                </a>
                <a
                    href='https://github.com/zaarza'
                    target='_blank'
                >
                    <Button variant={'ghost'}>
                        <div className='w-6 aspect-square fill-primary'>
                            <Github />
                        </div>
                    </Button>
                </a>

                <a
                    href='http://linkedin.com/in/arzaqul'
                    target='_blank'
                >
                    <Button variant={'ghost'}>
                        <div className='w-6 aspect-square fill-primary'>
                            <LinkedIn />
                        </div>
                    </Button>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
