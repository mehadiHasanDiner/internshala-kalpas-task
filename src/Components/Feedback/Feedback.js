import React from 'react';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import ProfilePage from '../Sidebar/ProfilePage';

const Feedback = ({ trigger, handleCloseFeedback }) => {
    return (
        <div>
            {trigger ?
                <div className = "feedback">
                    <div className="feedbackDiv">
                        <div className="closeButton">
                            <button onClick = {handleCloseFeedback}> Close</button>
                        </div>
                        <div className = "row p-5">
                            <div className = "col-lg-4">
                                <ProfilePage></ProfilePage>
                                <div className = "sendFeedback mt-3">
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