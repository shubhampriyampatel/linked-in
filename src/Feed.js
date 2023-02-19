import React from 'react'
import { Avatar } from '@mui/material'
function Feed() {
  return (
    <div className="feed">
      <div className="feed_input">
        <Avatar/>
        <form>
            <input type="text" placeholder="Start a Post"/>
            <input type="submit"/>        
        </form>
      </div>
    </div>
  )
}

export default Feed
