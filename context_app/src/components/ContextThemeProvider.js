import React, {useState} from 'react'

const ContextTheme = React.createContext({});

const ContextThemeProvider = (props) => {

    const [theme, setTheme] = useState({
        isLight: true,
        light: { slova: '#555', stil: "normal", bg: "#eee" },
        dark: {slova: '#ddd', stil:"bold", bg:"#555"}
    })

    const promijeni = () => {
        let check = theme.isLight ? false : true;
        setTheme({
            isLight: check,
            light: { slova: '#555', stil: "normal", bg: "#eee" },
            dark: { slova: '#ddd', stil: "bold", bg: "#555" }
        });
    }

    return (
        <ContextTheme.Provider value={{...theme, anaMjenjaTemu: promijeni, rijec: "Bla bla"}}>
            {props.children}
        </ContextTheme.Provider>
    )
}


export const useContextTheme = () => React.useContext(ContextTheme);
export default ContextThemeProvider
