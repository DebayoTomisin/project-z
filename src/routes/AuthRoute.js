import React from 'react'
import { Redirect, Route } from 'react-router-dom';

const AuthRoute = ({ Component, location, isAuthenticated,exact,  ...rest}) => 
{
    const isLogin = location.pathname === '/login'
    console.log(isLogin)
        
    return(
      <Route
        exact={exact}
        {...rest}
        render={(props) => {
          //if user is authenticated, redirect to dashboard page
          if(isAuthenticated){
            return <Redirect to='/dashboard' />
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
