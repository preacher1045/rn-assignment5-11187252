import React, { useState, useEffect, createContext } from "react";
import { Appearance } from "react-native";

// Defining our theme colors
const themes = {
    light: {
        dark: false,
        colors: {
            background: '#fff',
            text: '#000',
            navBackground: '#ffffff', 
            imageBackground: '#8d8f99'
        }
        
    },
    dark: {
        dark: true,
        colors: {
            background: '#161e2b',
            text: '#fff',
            navBackground: '#0d1533', 
            imageBackground: '#545a73'
        }
    },
};

// Creating our ThemeContext function
const ThemeContext = createContext({
    // setting up our initial theme
    theme: themes.light,
    
    // setting up our placeholder function
    toggleTheme: () => {},
});

// Setting up our ThemeProvider
const ThemeProvider = ({ children }) => {
    // Getting the current system theme of our page
    const colorScheme = Appearance.getColorScheme();

    // Setting initial theme based on system preference
    const [theme, setTheme] = useState(colorScheme === 'dark' ? themes.dark : themes.light);

    // Listening for any system change and updating the theme accordingly
    useEffect(() => {
        const change = Appearance.addChangeListener(({ colorScheme }) => {
            setTheme(colorScheme === 'dark' ? themes.dark : themes.light);
        });
        // Cleaning up the listener on unmount
        return () => change.remove();
    }, []);

    // Toggle function
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === themes.dark ? themes.light : themes.dark));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };
