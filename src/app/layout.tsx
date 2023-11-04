import { ThemeProvider } from '@/components/theme-provider';
import './../css/global.css';
import NavigationBar from '@/components/NavigationBar';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <html
                lang='en'
                suppressHydrationWarning
                className={`${inter.variable} scroll-smooth`}
            >
                <head>
                    <link
                        rel='shortcut icon'
                        href='/assets/icons/favicon.ico'
                        type='image/x-icon'
                    />
                    <link
                        rel='icon'
                        href='/assets/icons/favicon.ico'
                        type='image/x-icon'
                    />
                </head>
                <body className='relative'>
                    <ThemeProvider
                        attribute='class'
                        defaultTheme='dark'
                        disableTransitionOnChange
                    >
                        <NavigationBar />
                        {children}
                        <Footer />
                    </ThemeProvider>
                </body>
            </html>
        </>
    );
}
