import React from 'react'
import { NavLink ,useNavigate} from 'react-router-dom';

import classes from './NavBar.module.css';

function NavBar() {
  const navigate = useNavigate();

  const profileHandler = () => {
    navigate('/profile');
  }

 

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
      <div >
      <button className={classes.avatar} onClick={profileHandler}>J</button>
      </div>
      
    </div>
  )
}

export default NavBar