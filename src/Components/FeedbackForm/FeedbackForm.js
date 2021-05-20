import React from 'react';
import { useForm } from 'react-hook-form';
import '../../style/MainStyle.scss'

const FeedbackForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);

    }

    return (
        <div className="feedbackForm">
            <h3>Thank you so much for taking the time!</h3>
            <span>Please provide the below details</span>
            <div className="formDiv">

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-group">
                        <label for="exampleInputName1">First Name: </label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="First name" id="exampleInputName1"
                            name="firstName" {...register("First name", { required: true, maxLength: 80 })} />
                        {errors.firstName && (<span style={{ color: 'red' }}>Required field</span>)}
                    </div>

                    <div className="form-group">
                        <label for="exampleInputName1">Last Name: </label>
                        <input
                            className="form-control"
                            type="text" placeholder="Last name"
                            id="exampleInputName1"
                            name="lastName" {...register("Last name", { required: true, maxLength: 100 })} />
                        {errors.lastName && (<span style={{ color: 'red' }}>Required field</span>)}
                    </div>

                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Address: </label>
                        <textarea
                            placeholder="Enter Your Full Postal address"
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            name="address"
                            rows="5"  {...register("Address", {required: true})} />
                        {errors.address && (<span style={{ color: 'red' }}>Required field</span>)}
                    </div>

                    <div className="form-group">
                        <label for="exampleInputCountry1">Country: </label>
                        <input
                            type="search"
                            placeholder="Country"
                            className="form-control"
                            name="country1`"
                            id="exampleInputCountry1" {...register("Country", {required: true})} />
                        {errors.country && (<span style={{ color: 'red' }}>Required field</span>)}
                    </div>

                    <div className="form-group">
                        <label for="exampleInputEmail1">Email Id: </label>
                        <input type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            name="email"
                            placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                        {errors.email && (<span style={{ color: 'red' }}>Required field</span>)}
                    </div>

                    <div className="form-group">
                        <label for="exampleInputPhone1">Phone Number: </label>
                        <input
                            type="tel"
                            className="form-control"
                            name="phone"
                            id="exampleInputPhone1"
                            placeholder="Mobile number" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} />
                        {errors.phone && (<span style={{ color: 'red' }}>Required field</span>)}
                    </div>

                    <button type="submit" className="btn btn-success">
                        Submit Feedback
                    </button>
                </form>

            </div>

        </div>
    );
};

export default FeedbackForm;