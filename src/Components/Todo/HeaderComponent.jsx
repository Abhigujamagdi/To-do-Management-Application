import React, {Component} from 'react'
import {BrowserRouter as Link} from 'react-router-dom'
import Authentication from './Authentication.jsx';

class HeaderComponent extends Component{
    render(){
        const isUserLoggedIn = Authentication.isUserLoggedIn()

        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://www.hwmanager.com" className="navbar-brand"> hwManager </a></div>
                    <ul className="navbar-nav " >
                        {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/hwmanager">Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todos">todos</Link></li>}

                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end"> 
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login" >Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout"onClick={Authentication.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        // <header>
        //     <nav className="navbar ">
        //         <div><a>HWManager</a></div>
        //         <ul className="navbar-nav" >
        //             <li className="nav-link" >Home</li>
        //             <li className="nav-link" >todos</li>

        //         </ul>
        //         <ul className="navbar-nav "> 
        //             <li className="nav-link" >Login</li>
        //            <li className="nav-link" >Logout</li>
        //         </ul>
        //     </nav>
        // </header>
        
        )
    }
}


export default HeaderComponent