import React from 'react'
import { useContextDva } from './ContextDva';
import { useContextTheme } from './ContextThemeProvider'

const NavBar = () => {

    const {anaMjenjaTemu, isLight, light, dark, rijec } = useContextTheme();
    const { rijec2 } = useContextDva();

    const tema = isLight ? light : dark;
    console.log(rijec);
    return (
        <div style={{fontWeight:tema.stil, color: tema.slova, backgroundColor: tema.bg}}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>{rijec2}</li>
            </ul>
            <button onClick={anaMjenjaTemu}>Promijeni temu</button>
        </div>
    )
}

export default NavBar
