import React from 'react';
import Person from '../../images/Person.jpg'

const ProfilePage = () => {
    return (
        <div className="sidebar__profile d-flex ">
            <div className="img">
                <img src={Person} alt="profile" />
            </div>
            <div className="profile-desc">
                <h3> Hi Reader, </h3>
                <span>Here's Your News</span>
            </div>
        </div>
    );
};

export default ProfilePage;