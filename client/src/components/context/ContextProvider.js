import React, { createContext,useState } from 'react'


export const LoginContext = createContext(null);
const ContextProvider = ({Children}) => {
  const[account,setaccount] =useState("");
  return (
    <>
    <LoginContext.Provider value={{account,setaccount}}>
      {Children}
    </LoginContext.Provider>
    </>
  )
}

export default ContextProvider;
