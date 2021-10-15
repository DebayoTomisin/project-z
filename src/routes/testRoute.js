import React, {lazy, Suspense, } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { PageLoader } from "../components/loaders/loaders";
import AuthRoute from "./AuthRoute";
import PrivateRoute from "./PrivateRoute";

const Login = lazy(() => import('../components/login/login'))
const Dashboard = lazy(() => import('../entry'))
const AddCategories = lazy(() => import ('../components/addCategories'))
const AddItems = lazy(() => import('../components/addItems'))

const TestRoutes = () =>
{
    const isAuthenticated  = sessionStorage.getItem('authenticated')
    console.log(isAuthenticated)
    const auth = sessionStorage.getItem('auth-keys')
    return(
        <>
            <Router>
                <Suspense fallback={<PageLoader />}>
                    <Switch>
                        <AuthRoute exact path='/login' component={Login} isAuthenticated={isAuthenticated} />
                        <Route exact path='/' component={Dashboard} />
                        <PrivateRoute exact path= '/addcategories' component={AddCategories} isAuthenticated={isAuthenticated} />
                        <PrivateRoute exact path='/additems' component={AddItems} isAuthenticated={isAuthenticated} />
                        <Route render={()=>(<h1>404 Not Found</h1>)} />
                    </Switch>
                </Suspense>
            </Router>
        </>
    )
}

export default TestRoutes
