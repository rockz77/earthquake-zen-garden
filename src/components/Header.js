import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { useSource } from '../context/SourceContext'
import { useMain } from '../context/MainContext'
import { useProfile } from '../context/ProfileContext'
import { useDetail } from '../context/DetailContext'
import './Header.scss'
import Container from 'react-bootstrap/Container'

const Header = () => {
    const { sources } = useSource()
    const { setIsMain } = useMain()
    const { isProfile, setIsProfile } = useProfile()
    const { setIsDetail } = useDetail()

    const handleProfile = (e) => {
        e.preventDefault()
        setIsProfile(true)
        setIsMain(false)
        setIsDetail(false)
    }

    const handleMain = (e) => {
        e.preventDefault()
        setIsProfile(false)
        setIsMain(true)
        setIsDetail(false)
    }

    return (
        <Container>
            <Router>
                <div id="header">
                    <div className="logo-container">
                        <div className="logo">
                            <Link to="/" onClick={handleMain}><img src={sources.site.logoImage} /></Link>
                        </div>
                    </div>
                    <div className="title-container">
                        <h1>{sources.site.title}</h1>
                    </div>
                    <div className="user-container">
                        <Link to="/profile" onClick={handleProfile}>Welcome {sources.profile.firstName}</Link>
                    </div> 
                </div>
            </Router>
        </Container>
    )
}

export default Header