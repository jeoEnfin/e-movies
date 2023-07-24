import React from 'react'

import { useDispatch} from 'react-redux';
import { authActions } from '../store/auth';
import { useNavigate } from 'react-router-dom';

function Profile() {
 const dispatch = useDispatch();
 const navigate = useNavigate();


 const handleLogOut = () => {
    dispatch(authActions.logout());
    navigate('/');
 }

  return (
    <div>
        <main>
            <button onClick={handleLogOut}>LogOut</button>
        </main>
    </div>
  )
}

export default Profile