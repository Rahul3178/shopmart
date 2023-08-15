import { createContext } from 'react'
import { DarkTheme } from '../themes/DarkTheme';
export const InitialTheme=DarkTheme



export const ThemeContext= createContext(InitialTheme);
