import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import {useDispatch} from 'react-redux';
import {logout} from './features/userSlice';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { auth } from './firebase';

function Header() {
    
const dispatch = useDispatch();
    const logoutOfApp = () => {
dispatch(logout())
auth.signOut();
    };
    return (
        <div className="header">

            <div className="header_left">
                <img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-linkedin-social-media-justicon-flat-justicon.png"
                    alt='' />
            </div>
            <div className="header_search">
                <SearchIcon />
                <input placeholder='Search' type="text" />
            </div>
            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notification" />
                <HeaderOption avatar={true} title='me' onClick={logoutOfApp}
                />
                
            </div>
        </div>
    );
}

export default Header;