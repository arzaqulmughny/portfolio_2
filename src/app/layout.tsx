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
                        rel='apple-touch-icon'
                        sizes='180x180'
                        href='/assets/icons/favicon/apple-touch-icon.png'
                    />
                    <link
                        rel='icon'
                        type='image/png'
                        sizes='32x32'
                        href='/assets/icons/favicon/favicon-32x32.png'
                    />
                    <link
                        rel='icon'
                        type='image/png'
                        sizes='16x16'
                        href='/assets/icons/favicon/favicon-16x16.png'
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
