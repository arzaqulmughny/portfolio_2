'use client';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import toggleTheme from '@/lib/toggle-theme';
import { Menu, Moon, X, Sun } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Logo from '@/components/icons/Logo';

interface INavigationLinkProps extends React.RefAttributes<HTMLAnchorElement> {
    children: any;
    href: string;
    isActive: boolean;
}

const NavigationLink = (props: INavigationLinkProps) => {
    const { children, href, isActive } = props;

    return (
        <Link
            href={href}
            className='group'
        >
            <Button
                type='button'
                variant={'link'}
                className={`text-base duration-300 w-full ${
                    isActive ? 'text-primary font-medium' : 'text-primary/50 group-hover:text-primary font-normal'
                }`}
            >
                {children}
            </Button>
        </Link>
    );
};

const links = [
    {
        href: '/',
        name: 'Home',
    },
    {
        href: '/projects',
        name: 'Projects',
    },
    {
        href: '/about',
        name: 'About Me',
    },
];

const NavigationBar = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const { theme = 'dark', setTheme } = useTheme();
    const pathname = usePathname();

    return (
        <nav className='sticky top-0 z-30 w-full'>
            <div className='flex items-center justify-between px-3 py-2 border-b bg-background/60 dark:border-b-neutral-800 border-b-neutral-100 backdrop-blur'>
                <Link href='/'>
                    <Button variant={'ghost'}>
                        <Logo className='fill-primary' />
                    </Button>
                </Link>

                <div className='flex gap-x-4'>
                    <Button
                        variant='ghost'
                        onClick={() => toggleTheme(theme, setTheme)}
                        className='stroke-primary md:order-2'
                    >
                        {theme === 'dark' ? <Moon /> : <Sun />}
                    </Button>
                    <Button
                        onClick={() => setShowMenu(!showMenu)}
                        variant='ghost'
                        className='stroke-primary md:hidden'
                    >
                        {showMenu ? <X /> : <Menu />}
                    </Button>
                    <ul
                        className={`absolute md:static md:backdrop-blur-0 md:flex-row md:bg-transparent -z-10 md:border-b-0 md:order-1 md:-z-0 md:p-0 md:w-fit ${
                            showMenu ? 'top-full' : '-top-[200px]'
                        } left-0 w-full py-5 flex flex-col duration-300 gap-y-5 border-b dark:border-b-neutral-800 border-b-neutral-100 bg-background/60 backdrop-blur`}
                    >
                        {links.map((link, index) => (
                            <li
                                key={`${link.name}-${index}`}
                                onClick={() => setShowMenu(false)}
                            >
                                <NavigationLink
                                    href={link.href}
                                    isActive={pathname === link.href}
                                >
                                    {link.name}
                                </NavigationLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;
