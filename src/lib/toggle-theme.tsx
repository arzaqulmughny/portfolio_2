type TtoggleTheme = (currentTheme: string, setter: (theme: string) => void) => void;

const toggleTheme: TtoggleTheme = (currentTheme, setter) => {
    setter(currentTheme === 'dark' ? 'light' : 'dark');
};

export default toggleTheme;
