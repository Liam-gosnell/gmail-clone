import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorIcon from '@material-ui/icons/Error'
import DeleteIcon from '@material-ui/icons/Delete'
import EmailIcon from '@material-ui/icons/Email'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore'
import React from 'react';
import { IconButton } from '@material-ui/core';
import './Mail.css';

import { useNavigate } from "react-router-dom";

function Mail() {

    const navigate = useNavigate();

    return (
        <div className="mail">
            <div className="mail__tools">
                <div className="mail__toolsLeft">
                    <IconButton onClick={() => navigate("/")}>
                        <ArrowBackIcon/>
                    </IconButton>

                    <IconButton>
                        <MoveToInboxIcon/>
                    </IconButton>

                    <IconButton>
                        <ErrorIcon/>
                    </IconButton>

                    <IconButton>
                        <DeleteIcon/>
                    </IconButton>

                    <IconButton>
                        <EmailIcon/>
                    </IconButton>

                    <IconButton>
                        <WatchLaterIcon/>
                    </IconButton>

                    <IconButton>
                        <CheckCircleIcon/>
                    </IconButton>

                    <IconButton>
                        <LabelImportantIcon/>
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
                <div className="mail_toolsRight">
                    <IconButton>
                        <UnfoldMoreIcon/>
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <h1>...</h1>
        </div>
    )
}

export default Mail
