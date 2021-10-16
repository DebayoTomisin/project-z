import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ Component, exact,  isAuthenticated, ...rest}) => 
{
    return (
      <Route
        {...rest}
        exact={exact}
        render={(props) => {
          if (isAuthenticated){
            return (
                <Component {...props} />
            );
          }
          else {
            return <Redirect exact to="/login" />;
          }
          
        }}
    />);
};

export default PrivateRoute
