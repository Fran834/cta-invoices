import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import HomeIcon from '@mui/icons-material/Home'
import Button from '@mui/material/Button'
//import auth from './../auth/auth-helper'
import {Link, useNavigate} from 'react-router-dom'

const auth = {
    isAuthenticated: () => false
};

const Menu = (() => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" color="inherit">
        
      </Typography>
      <Link to="/">
        <IconButton aria-label="Home" style={{ color:'#FFFFFF' }}>
          <HomeIcon/>
        </IconButton>
      </Link>
      <Link to="/users">
        <Button style={{ color:'#FFFFFF' }}>Users</Button>
      </Link>
      <Link to="/invoices">
        <Button style={{ color:'#FFFFFF' }}>Invoices</Button>
      </Link>
      {/* {
        !auth.isAuthenticated() && (<span>
          <Link to="/signup">
            <Button>Sign up
            </Button>
          </Link>
          <Link to="/signin">
            <Button>Sign In
            </Button>
          </Link>
        </span>)
      } */}
      {/* {
        auth.isAuthenticated() && (<span>
          <Link to={"/user/" + auth.isAuthenticated().user._id}>
            <Button>My Profile</Button>
          </Link>
          <Button color="inherit" onClick={() => {
              auth.clearJWT(() => history.push('/'))
            }}>Sign out</Button>
        </span>)
      } */}
    </Toolbar>
  </AppBar>
))

export default Menu
