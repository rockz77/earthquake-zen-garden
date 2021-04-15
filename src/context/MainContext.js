import React, { createContext, useContext, useState, useMemo } from 'react'

export const MainContext = createContext()

export const useMain = () => {
    return useContext(MainContext)
}

export const MainProvider = ({ children }) => {
    const [isMain, setIsMain] = useState(true)

    const checkMain = useMemo(() => ({ isMain, setIsMain }), [isMain, setIsMain]);
    
    return (
        <MainContext.Provider value={checkMain}>
            {children}
        </MainContext.Provider>
    )
}
