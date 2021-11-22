import React from 'react';
import './SendMail.css';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';

function SendMail() {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (formData) => {
        
    }

    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon className="sendMail__close" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                name="to" 
                placeholder="To" 
                ype="text" 
                />

                <input 
                name="subject" 
                placeholder="Subject" 
                type="text"  
                />

                <input 
                name="message" 
                className="sendMail__message" 
                placeholder="Message..." 
                type="text" 
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
