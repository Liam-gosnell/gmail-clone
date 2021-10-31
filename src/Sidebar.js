import { Button } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
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
        </div>
    )
}

export default Sidebar
