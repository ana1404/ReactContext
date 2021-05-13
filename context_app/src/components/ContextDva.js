import React, {useState} from 'react'

const ConDva = React.createContext({});

const ContextDva = (props) => {

    const [rijec2, setRijec2] = useState("Ana je najlijepša")

    return (
        <ConDva.Provider value={{ rijec2: rijec2 }}>
            {props.children}
        </ConDva.Provider>
    )
}


export const useContextDva = () => React.useContext(ConDva);
export default ContextDva