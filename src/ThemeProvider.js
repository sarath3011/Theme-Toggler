import React,{useState} from 'react'
export const ThemeContext = React.createContext(false);
function ThemeProvider({Children}) {
    const {toggle, SetToggle}= useState(false);
    const toggleFunction =()=>{
        SetToggle(!toggle)
    }
  return (
<ThemeContext.Provider value={{toggle, toggleFunction}}> {Children} </ThemeContext.Provider> 
  )
}

export default ThemeProvider;