import React from 'react';
import { useForm } from 'react-hook-form';
import '../../style/global.scss'

const FeedbackForm = () => {
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="feedbackForm">
        <h3>Thank you so much for taking the time!</h3>
        <span>Please provide the below details</span>
        
      </div>
    );
};

export default FeedbackForm;