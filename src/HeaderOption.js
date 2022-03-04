
import React from 'react';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './HeaderOption.css';

function HeaderOption({ avatar, Icon, title, onClick }) {
    const user = useSelector(selectUser);
    return (
        <div onClick={onClick} className="HeaderOption">
            {Icon && <Icon className='headerOption_icon' />}
            {avatar && (
                <Avatar className="headerOption_icon" >{user?.email[0]}
                </Avatar>
            )}
            <h3 className="headerOption_title">{title}</h3>
        </div>
    );
}

export default HeaderOption