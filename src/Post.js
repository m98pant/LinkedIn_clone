import { Avatar } from '@mui/material';
import React, { forwardRef } from 'react'
import './Post.css'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import InputOption from './InputOption';

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
    return (
        <div ref={ref} className="post">
            <div className="post_header">
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="post_info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post_body">
                <p>{message}</p>
            </div>

            <div className="post_buttons">
                <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like"
                    color="gray" />
                <InputOption Icon={CommentOutlinedIcon} title="Comment"
                    color="gray" />
                <InputOption Icon={ShareOutlinedIcon} title="Share"
                    color="gray" />
                <InputOption Icon={SendOutlinedIcon} title="Send"
                    color="gray" />
            </div>
        </div>
    );
})

export default Post;