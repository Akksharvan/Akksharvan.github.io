"use client";

import React from "react";

type Theme = "light" | "dark"

type ThemeContextProviderProps = {
    children: React.ReactNode
}

type ThemeContextType = {
    theme: Theme
    toggleTheme: () => void
}

const ThemeContext = React.createContext<ThemeContextType | null>(null);

export function useTheme() {
    const context = React.useContext(ThemeContext);
    if (context === null) throw new Error();

    return context;
}

export default function ThemeContextProvider({ children }: ThemeContextProviderProps) {
    const [theme, setTheme] = React.useState<Theme>("light");

    const toggleTheme = () => {
        if (theme === "light") setTheme("dark"), window.localStorage.setItem("theme", "dark"), document.documentElement.classList.add("dark");

        if (theme === "dark") setTheme("light"), window.localStorage.setItem("theme", "light"), document.documentElement.classList.remove("dark");
    };

    React.useEffect(() => {
        const localTheme = window.localStorage.getItem("theme") as Theme | null;
        if (localTheme === "dark") setTheme(localTheme), document.documentElement.classList.add("dark");
        else if (window.matchMedia("(prefers-color-scheme: dark)").matches) setTheme("dark"), document.documentElement.classList.add("dark");
    }, []);

    return (
        <ThemeContext.Provider value = {{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}