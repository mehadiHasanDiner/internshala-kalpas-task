import React, { useContext } from 'react';
import { ChangeNewsView } from '../../App';
import './Sidebar.scss';
import ProfilePage from './ProfilePage';

const Sidebar = ({ handleOpenFeedback }) => {
    const [changeViews, setChangeViews] = useContext(ChangeNewsView);

    
    const handleChangeList = () => {
        setChangeViews('list');
    };

    const handleChangeGrid = () => {
        setChangeViews('grid');
    };

    return (
        <div className="sidebarDiv">
            <ProfilePage></ProfilePage>
            <div className="toggle mt-3">
                <h3>View Toggle</h3>
                <div className="buttons d-flex">
                    <button className="gridButton"
                        style={{ backgroundColor: changeViews === 'grid' && 'cyan' }}
                        onClick={handleChangeGrid}> Grid </button>

                    <button className="listButton"
                        style={{ backgroundColor: changeViews === 'list' && 'cyan' }}
                        onClick={handleChangeList}>
                        List </button>
                </div>
            </div>

            <div className="sendFeedback mt-3">
                <h3> Have a Feedback? </h3>
                <button onClick={handleOpenFeedback}> We're Listening</button>
            </div>
        </div>

    );
};

export default Sidebar;