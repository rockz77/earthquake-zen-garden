import React, { createContext, useContext, useState, useMemo } from 'react'

export const DetailContext = createContext()

export const useDetail = () => {
    return useContext(DetailContext)
}

export const DetailProvider = ({ children }) => {
    const [isDetail, setIsDetail] = useState(false)

    const checkDetail = useMemo(() => ({ isDetail, setIsDetail }), [isDetail, setIsDetail]);
    
    return (
        <DetailContext.Provider value={checkDetail}>
            {children}
        </DetailContext.Provider>
    )
}
