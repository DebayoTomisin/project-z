import React, {lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { PageLoader } from "../components/loaders/loaders";

const Login = lazy(() => import('../components/login/login'))
const Dashboard = lazy(() => import('../entry'))
const AddCategories = lazy(() => import ('../components/addCategories'))

const Routes = () =>
{
    const isAuthenticated = sessionStorage.getItem('authenticated')
    const auth = sessionStorage.getItem('auth-keys')
    const isLogin = window.location.pathname === '/' || window.location.pathname === '/login'
    
    return(
        <>
            <Router>
                <Suspense fallback={<PageLoader />}>
                    <Switch>
                        {
                            isAuthenticated && isLogin ?
                            <Route exact component={Dashboard} path='/dashboard' /> :
                            <Route exact path='/login' component={Login} />
                        }
                        {
                            isAuthenticated ?
                            <>
                                <Route exact path='/dashboard' component={Dashboard} />
                                <Route exact path= '/addcategories' component={AddCategories} />
                            </> : <Redirect to='/' />
                            
                        }
                    </Switch>
                </Suspense>
            </Router>
        </>
    )
}

export default Routes
