import React from 'react'
import { Redirect, Route, useHistory } from 'react-router-dom';

const ProtectedRoutes = ({component: Component, ...rest}) =>
{
    const isAuthenticated  = sessionStorage.getItem('authenticated')
    console.log(isAuthenticated)
    const auth = sessionStorage.getItem('auth-keys')
    const history = useHistory()
    return (
        <Route {...rest} render={props => (
        isAuthenticated == 'true' ? (
          < Component  {...props} />
          ) : (
                history.push('/login') 
              )
          )} 
        />
      )
}

export default ProtectedRoutes
