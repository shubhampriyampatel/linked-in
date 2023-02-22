import { Avatar } from '@mui/material'
import {React, useState} from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./css/post.css"
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import RepeatIcon from '@mui/icons-material/Repeat';
import SendIcon from '@mui/icons-material/Send';

function Post({name, description, message, photoURL}) {

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // 👇️ toggle
    setIsActive(current => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };

  return (
    <div className="posts">
        <div className="post_header">
            <div className="post_headerLeft">
              <Avatar src={photoURL}/>
              <div className="post_profile_detail">
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
            </div>
            <MoreVertIcon/>
        </div>
     
         <div className="post_body">
            <p>{message}</p>
         </div>

         <div className="post_footer">
            <div className="post_footer_option">
              <ThumbUpOffAltIcon style={{
          backgroundColor: isActive ? 'blue' : '',
          color: isActive ? 'white' : 'blue',
        }}
        onClick={handleClick}/>
              <span>Like</span>
            </div>

            <div className="post_footer_option">
              <CommentIcon/>
              <span>Comment</span>
            </div>

            <div className="post_footer_option">
              <RepeatIcon/>
              <span>Repost</span>
            </div>

            <div className="post_footer_option">
              <SendIcon/>
              <span>Send</span>
            </div>
         </div>

    </div>
  )
}

export default Post
