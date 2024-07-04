'use client';

import {createContext, useContext, ReactNode, useState} from 'react';

type Theme = {
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
};

const defaultTheme: Theme = {
    isLoggedIn: false,
    setIsLoggedIn: () => {},
};

const ThemeContext = createContext<Theme>(defaultTheme);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return <ThemeContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
    return useContext(ThemeContext);
}