'use client';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import toggleTheme from '@/lib/toggle-theme';
import { Menu, Moon, X, Sun } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Logo from '@/components/icons/Logo';
import NavigationLink from '@/components/NavigationLink';

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
        <nav className='sticky top-0 w-full'>
            <div className='flex items-center justify-between px-3 py-2 border-b bg-background/60 dark:border-b-neutral-800 border-b-neutral-100 backdrop-blur'>
                <Button variant={'ghost'}>
                    <Link href='/'>
                        <Logo className='fill-primary' />
                    </Link>
                </Button>
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
                            <li key={`${link.name}-${index}`}>
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
