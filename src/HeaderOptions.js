import { Avatar } from '@mui/material'
import React from 'react'


function HeaderOptions({Icon, title, avatar}) {
  return (
    <div className="header_options">
        {
            Icon && <Icon></Icon>
        }
        {
            avatar && <Avatar src="https://media.licdn.com/dms/image/D4D03AQEs3KunoXMnwg/profile-displayphoto-shrink_400_400/0/1668701295243?e=1682553600&v=beta&t=vC1xxdn7td9kWOWYgvpR1rOidXwdIupYKhiKlj9ALew" name={avatar}/>
        }
      
      <span>{title}</span>
    </div>
  )
}

export default HeaderOptions
