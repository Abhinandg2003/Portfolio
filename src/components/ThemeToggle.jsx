import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";


export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() =>{
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else{
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);

        }
    },[])

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);

        }
        else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return (
        <button onClick={toggleTheme}
            className={cn(
                "  rounded-full transition-colors duration-300",
                "focus:outline-hidden"
            )}>
            {isDarkMode ? (
                <Sun className="h-11 w-11 text-white bg-primary p-3 rounded-full" />
            ) : (
                <Moon className="h-11 w-11 text-white bg-primary p-3 rounded-full" />
            )}
        </button>
    );
}