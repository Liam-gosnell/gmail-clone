import React from 'react';
import './SendMail.css';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from "./features/mailSlice";

function SendMail() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        
    }

    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon onClick={() => dispatch(closeSendMessage())} className="sendMail__close" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <input
                name="to" 
                placeholder="To" 
                type="text"
                {...register("to", { required: "This is required." })} 
                />
                
                <ErrorMessage
                    errors={errors}
                    name="to"
                    render={({ message }) => <p className="sendMail__error">{message}</p>}
                />

                <input 
                    name="subject" 
                    placeholder="Subject" 
                    type="text"
                    {...register("subject", { required: "This is required." })}
                />

                <ErrorMessage
                    errors={errors}
                    name="subject"
                    render={({ message }) => <p className="sendMail__error">{message}</p>}
                />

                <input 
                    name="message" 
                    placeholder="Message" 
                    type="text"
                    {...register("message", { required: "This is required." })}
                />

                <ErrorMessage
                    errors={errors}
                    name="message"
                    render={({ message }) => <p className="sendMail__error">{message}</p>}
                />
                
                
                <div className="sendMail__options">
                    <Button 
                    className="sendMail__send"
                    varient="contained"
                    color="primary"
                    type="submit"
                    >Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
