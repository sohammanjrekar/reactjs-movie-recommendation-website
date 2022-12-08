import React from 'react'

const AppContext = React.createContext();

//Provider
const AppProvider=({children})=>{
return <AppContext.Provider  value="soham">{children}</AppContext.Provider>
};
export {AppContext, AppProvider };