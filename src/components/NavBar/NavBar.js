import React from 'react'

import classes from './NavBar.module.css';


function NavBar() {
  return (
    <div className={classes.navbar}>
        <img  className={classes.logo} src="https://forums.launchbox-app.com/uploads/monthly_2017_12/5a21888991aff_MovieLOGO.png.5ce5fc22119ac4f6d6f4014620badbb6.png" alt="e-movies logo" />
        <img  className={classes.avatar} src="https://cdn.iconscout.com/icon/free/png-512/avatar-367-456319.png" alt="Avatar" />
    </div>
  )
}

export default NavBar