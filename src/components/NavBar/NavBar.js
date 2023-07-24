import React from 'react'
import { NavLink } from 'react-router-dom';

import classes from './NavBar.module.css';


function NavBar() {
  return (
    <div className={classes.navbar}>
      <img className={classes.logo} src="https://forums.launchbox-app.com/uploads/monthly_2017_12/5a21888991aff_MovieLOGO.png.5ce5fc22119ac4f6d6f4014620badbb6.png" alt="e-movies logo" />
      <div className={classes.list}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? classes.active : undefined
          }
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            isActive ? classes.active : undefined
          }
          end
        >
          Movies
        </NavLink>
        <NavLink
          to="/series"
          className={({ isActive }) =>
            isActive ? classes.active : undefined
          }
          end
        >
          Series
        </NavLink>
      </div>
      <img className={classes.avatar} src="https://cdn.iconscout.com/icon/free/png-512/avatar-367-456319.png" alt="Avatar" />
    </div>
  )
}

export default NavBar