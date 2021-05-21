import React, { useContext } from 'react';
import { ChangeNewsView } from '../../App';
import './Sidebar.scss';
import ProfilePage from './ProfilePage';

const Sidebar = ({ handleOpenFeedback }) => {
    const [changeViews, setChangeViews] = useContext(ChangeNewsView);

    
    const handleChangeList = () => {
        setChangeViews('list-layout');
    };

    const handleChangeGrid = () => {
        setChangeViews('grid-layout');
    };

    return (
        <div className="sidebar-container">
            <ProfilePage></ProfilePage>
            <div className="toggle mt-3">
                <h3>View Toggle</h3>
                <div className="buttons d-flex">
                    <button className="grid-button"
                        style={{ backgroundColor: changeViews === 'grid-layout' && 'cyan' }}
                        onClick={handleChangeGrid}> Grid </button>

                    <button className="list-button"
                        style={{ backgroundColor: changeViews === 'list-layout' && 'cyan' }}
                        onClick={handleChangeList}>
                        List </button>
                </div>
            </div>

            <div className="submit-feedback mt-3">
                <h3> Have a Feedback? </h3>
                <button onClick={handleOpenFeedback}> We're Listening</button>
            </div>
        </div>

    );
};

export default Sidebar;