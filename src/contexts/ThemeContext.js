import { createContext } from 'react'

export const InitialTheme={
    themeName:'dark',
    background:'bg-dark',
    textColor:'text-white',
    btnIcon:'bi bi-brightness-alt-high-fill text-white ',
    banner:'bg-light text-black'
}


export const ThemeContext= createContext(InitialTheme);
