import React from 'react'
import { useSource } from '../context/SourceContext'
import './Profile.scss'
import Container from 'react-bootstrap/Container'

const Profile = () => {
    const { sources } = useSource()

    return (
        <Container>
            <div id="profile">
                <h4>Profile</h4>
                <div className="profile-container">
                    <div className="profile-img"><img src={sources.profile.avatarImage} /></div>
                    <div className="profile-data-wrapper">
                        <div className="profile-data-container">
                            <div className="profile-title">First name</div>
                            <div className="profile-value">{sources.profile.firstName}</div>
                        </div>
                        <div className="profile-data-container">
                            <div className="profile-title">Last name</div>
                            <div className="profile-value">{sources.profile.lastName}</div>
                        </div>
                        <div className="profile-data-container">
                            <div className="profile-title">Phone</div>
                            <div className="profile-value">{sources.profile.phone}</div>
                        </div>
                        <div className="profile-data-container">
                            <div className="profile-title">Email</div>
                            <div className="profile-value">{sources.profile.email}</div>
                        </div>
                        <div className="profile-data-container">
                            <div className="profile-title">Bio</div>
                            <div className="profile-value">{sources.profile.bio}</div>
                        </div>
                    </div>
                </div> 
            </div>
        </Container>
    )
}

export default Profile