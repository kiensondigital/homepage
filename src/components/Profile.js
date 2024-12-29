import { Person } from "@mui/icons-material";
import { FaLinkedin } from "react-icons/fa";
import React from "react";
import '../styles/Profile.css'

const Card = ({ name, role, descr, linkedIn }) => {
    return (
        <div  className="profile-card">
            <div className="profile-info-box">
                <div className="profile-circle-container"> <div className="profile-circle"><Person className="person-icon"/></div></div>
                <span className="profile-name"> {name} </span>
                <div class="profile-details">
                    <span className="profile-role"> {role} </span>
                    <span> {descr} </span>
                    <span> <FaLinkedin class="linkedIn-logo"/> </span>
                </div>
            </div>
            <div className="profile-picture-container"> <img alt="profile-picture"/></div>
        </div>
    );
};

const Profile = () => {
    const profile_info = [
        {
            "name": "Leo Robinson",
            "role": "Developer",
            "descr": "Bla bla bla ...",
            "linkedIn": "link"
        },
        {
            "name": "Jan Kienberger",
            "role": "Buisness Manager",
            "descr": "Bla bla bla ...",
            "linkedIn": "link"
        }
    ]
    return (
        <div className="profile-section">
            <div className="profile-box">
                {profile_info.map((person) => (
                    <Card name={person.name} role={person.role} descr={person.descr} linkedIn={person.linkedIn} />
                ))}
            </div>
        </div>
    );
}

export default Profile