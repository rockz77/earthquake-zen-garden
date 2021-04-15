import React, { createContext, useContext, useState, useEffect } from 'react'
import { getSourceDataLocal } from '../utils/async'

export const SourceContext = createContext()

export const useSource = () => {
    return useContext(SourceContext)
}

export const SourceProvider = ({ children }) => {
    const [sources, setSources] = useState()
    const [loaded, setLoaded] = useState(false)

    const getSourceData = async() => {
        let getSrcData = await getSourceDataLocal()
        let sourceData = JSON.parse(getSrcData)
        setSources(sourceData)
        setLoaded(true)
    }

    useEffect(() => {
        getSourceData()
    }, [])
    
    if (!loaded) {
        return 'Loading...';
    }
    
    return (
        <SourceContext.Provider value={{ sources }}>
            {children}
        </SourceContext.Provider>
    )
}
