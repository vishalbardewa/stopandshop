import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = ({component: Component, ...otherProps}) => {

  const isLoggedIn = useSelector(state => state.user.currentUser)
  return (
    <Route 
    {...otherProps}
    render={props => isLoggedIn 
      ? (<Component {...props}/>)
      :(<Redirect to='/sign-in' />)
    }
    />
  )
}

export default PrivateRoute
