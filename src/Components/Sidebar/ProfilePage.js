import React from 'react';
import Person from '../../images/Person.jpg'

const ProfilePage = () => {
    return (
        <div className="sidebar__profile d-flex ">
            <div className="img">
                <img src={Person} alt="profile" />
            </div>
            <div className="profile-desc">
                <h3> Md. Mehadi Hasan</h3>
                <span>React Web Developer</span>
            </div>
        </div>
    );
};

export default ProfilePage;