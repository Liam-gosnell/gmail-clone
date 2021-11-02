import { Button } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SidebarOption from './SidebarOption';


function Sidebar() {
    return (
        <div className="sidebar">
            <Button startIcon={<AddIcon fontSize="large"/>}
            className="sidebar__compose"
            >
                Compose
            </Button>

            <SidebarOption Icon={InboxIcon} title="inbox" number={65} selected={true}/>
            <SidebarOption Icon={StarIcon} title="Starred" number={65}/>
            <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={65}/>
            <SidebarOption Icon={LabelImportantIcon} title="Important" number={65}/>
            <SidebarOption Icon={NearMeIcon} title="Sent" number={65}/>
            <SidebarOption Icon={NoteIcon} title="Drafts" number={65}/>
            <SidebarOption Icon={ExpandMoreIcon} title="More" number={65}/>
        </div>
    )
}

export default Sidebar
