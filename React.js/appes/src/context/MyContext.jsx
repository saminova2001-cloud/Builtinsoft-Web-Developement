import { createContext, useState } from "react";
// create context
export const MyContext = createContext("")

// Provider
export default function MyContextProvider({ children }){
    const[name, setName] = useState("Awais Hameed")

    return(
        <MyContext value = {{name}}>
            {children}
        </MyContext>
    )
}