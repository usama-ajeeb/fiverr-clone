import React from 'react'
import { Invite } from './Invite'
import Profile from './Profile'
import Learn from './Learn'
import Info from './Info'
const Sidebar = () => {
  return (
    <div>
      {/* Invite */}
      <Invite />
      {/* Profile */}
      <Profile />
      {/* Learn */}
      <Learn />
      {/* info */}
      <Info />
    </div>
  )
}

export default Sidebar
