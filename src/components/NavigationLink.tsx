import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface INavigationLinkProps {
    children: any;
    href: string;
    isActive: boolean;
}

const NavigationLink = (props: INavigationLinkProps) => {
    const { children, href, isActive } = props;

    return (
        <Button
            type='button'
            variant={'link'}
            className='w-full group'
        >
            <Link
                href={href}
                className={`text-base duration-300 ${
                    isActive ? 'text-primary font-medium' : 'text-primary/50 group-hover:text-primary font-normal'
                }`}
            >
                {children}
            </Link>
        </Button>
    );
};

export default NavigationLink;
