import React, { useEffect } from 'react'
import { Redirect, Route, useHistory } from 'react-router-dom';

const AuthRoute = ({ Component, location, isAuthenticated,exact,  ...rest}) => 
{
    const isLogin = location.pathname === '/login'
    console.log(isLogin)
    const history = useHistory()
            
    return(
      <Route
        exact={exact}
        {...rest}
        render={(props) => {
          //if user is authenticated, redirect to dashboard page
          if(isAuthenticated){
            history.push('/')
          }
          else
          {
            return (
              <main>
                <Component {...props}/>
              </main>
            )
          }
        }}
      />
  
    )
};

export default AuthRoute
