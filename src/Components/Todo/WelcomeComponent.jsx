import React, {Component} from 'react'
import {BrowserRouter as Link} from 'react-router-dom'

class WelcomeComponent extends Component{
    render(){
        return( 
        <div>
            <h1>Welcome!</h1>
            <div className="container">
                Welcome!{this.props.params.name}. Manage your todos <Link to="/todos">click here</Link>
            </div>
        </div>
        )    
    }
} 

export default WelcomeComponent