import React from 'react'
import { NavLink } from 'react-router-dom'
import {Menu} from 'semantic-ui-react'

const Navbar = () => {
  return (
    <div>
       <Menu secondary>
       <NavLink to="/"><Menu.Item as='a'>CRUD APP</Menu.Item></NavLink>
            <Menu.Item as='a'>Home</Menu.Item>
            <Menu.Item as='a'>Profile</Menu.Item>
      </Menu>
    </div>
  )
}

export default Navbar
