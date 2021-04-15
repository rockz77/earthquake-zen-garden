import React, { createContext, useContext, useState, useMemo } from 'react'

export const ProfileContext = createContext()

export const useProfile = () => {
    return useContext(ProfileContext)
}

export const ProfileProvider = ({ children }) => {
    const [isProfile, setIsProfile] = useState(false)

    const checkProfile = useMemo(() => ({ isProfile, setIsProfile }), [isProfile, setIsProfile]);
    
    return (
        <ProfileContext.Provider value={checkProfile}>
            {children}
        </ProfileContext.Provider>
    )
}
