import React from 'react'
import NavBar from './components/nav'

const Layout = ({children}) => {
    return(
        <div>
            <NavBar />
            {children}
        </div>
    )
}

export default Layout