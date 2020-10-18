import React from 'react'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import './header.styles.scss'

const Header = () => {
  const currentUser = useSelector(state => state.user.currentUser)
  const dispatch = useDispatch()

  return (
    <div className='header'>
      <div className="logo-container">
        <Link className="logo" to="/">Stop &amp; Shop</Link>
      </div>
      <div className="options">
        <Link className="option" to='/shop'>Shop</Link>
        {
          currentUser
            ? (<Link className="option" onClick={() => dispatch({
              type: 'SET_CURRENT_USER',
              payload: null
            })} to='/sign-out'>Sign Out</Link>)
            : (<Link className="option" to='/sign-in'>Sign In</Link>)
        }
      </div>

    </div>
  )
}

export default Header
