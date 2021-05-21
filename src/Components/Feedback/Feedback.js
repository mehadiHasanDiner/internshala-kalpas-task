import React from 'react';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import ProfilePage from '../Sidebar/ProfilePage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


const Feedback = ({ trigger, handleCloseFeedback }) => {
    return (
        <div>
            {trigger ?
                <div className = "feedback">
                    <div className="feedback-container">
                        <div className="close-button">
                            <button onClick = {handleCloseFeedback}> <FontAwesomeIcon icon={faArrowLeft} /> Back</button>
                        </div>
                        <div className = "row p-5">
                            <div className = "col-lg-4">
                                <ProfilePage></ProfilePage>
                                <div className = "submit-feedback mt-3">
                                    <h3>Have a Feedback</h3>
                                    <button style ={{backgroundColor:"honeydew"}}> We're Listening</button>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <FeedbackForm></FeedbackForm>
                            </div>
                        </div>
                    </div>
                </div> : null}
        </div>
    );
};

export default Feedback;