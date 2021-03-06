import React from 'react';
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';

import './ChatHeader.css';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';

const ChatHeader = ({channel}) => {
    return (
        <div className="chatHeader">
            <div className="chatHeader__left">
                <h3>
                    <span className="chatHeader__hash">#</span>
                    {channel}
                </h3>
            </div>

            <div className="chatHeader__right">
                <NotificationsIcon />
                <EditLocationRoundedIcon />
                <PeopleAltRoundedIcon />

                <div className="chatHeader__search">
                    <input type="text" placeholder="Search" />
                    <SearchRoundedIcon />
                </div>
                
                <SendRoundedIcon />
                <HelpRoundedIcon />
            </div>
            
        </div>
    );
}

export default ChatHeader
