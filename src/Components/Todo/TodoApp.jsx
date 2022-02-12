import React, {Component} from 'react'
import {BrowserRouter as Router,Link, Route, Routes} from 'react-router-dom'
import withNavigation from './WithNavigation.jsx'
import withParams from './WithParams.jsx';
import Authentication from './Authentication.jsx';
import AuthenticatedRoute from './AuthenticatedRoute.jsx';
import LoginComponent from './LoginComponent.jsx';
import ListTodosComponent from './ListTodosComponent.jsx';
//import HeaderComponent from "./HeaderComponent.jsx";
//import WelcomeComponent from "./WelcomeComponent.jsx";
import FooterComponent from "./FooterComponent.jsx";
import LogoutComponent from "./LogoutComponent.jsx";
import ErrorComponent from "./ErrorComponent.jsx"
import HelloWorldService from '../../api/todo/HelloWorldService.js';
import TodoComponent from './TodoComponent.jsx';
class TodoApp extends Component{
    render() {
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
        const ListTodosComponentwithNavigation = withNavigation(ListTodosComponent);
        const TodoComponentWithParamsAndNavigation = withParams(withNavigation(TodoComponent));
        return(
            <div className="TodoApp">
                <Router>
                    <HeaderComponentWithNavigation/>
                    <Routes>
                        <Route path="/" element={<LoginComponentWithNavigation/>}/>
                        <Route path="/login" element={<LoginComponentWithNavigation/>}/>
                        <Route path="/logout" element={<AuthenticatedRoute><LogoutComponent/></AuthenticatedRoute>}/>
                        <Route path="/Welcome/:name" element={<AuthenticatedRoute><WelcomeComponentWithParams/></AuthenticatedRoute>}/>  
                        <Route path="/todos/:id" element={<AuthenticatedRoute><TodoComponentWithParamsAndNavigation/></AuthenticatedRoute>}/>
                        <Route path="/todos" element={<AuthenticatedRoute><ListTodosComponentwithNavigation/></AuthenticatedRoute>}/>                   
                        <Route path="*" element={<ErrorComponent/>}/>
                    </Routes>
                    <FooterComponent/>            
                </Router>
                {/* <LoginComponent/> */}

            </div>
        )
    }
}
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

        )
    }
}

class WelcomeComponent extends Component{
    constructor(props){
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this) 
        this.state = {
            welcomeMessage:""
        }
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.handleErrorResponse = this.handleErrorResponse.bind(this)
     }
        render(){
        return( 
        <div>
            <h1>Welcome!</h1>
            <div className="container">
                Welcome!{this.props.params.name}. Manage your todos <Link to="/todos">click here</Link>
            </div>
            <div className="container">
                Click here to get a customized welcome message
                <button onClick={this.retrieveWelcomeMessage} className="btn btn-success"> Get welcome Message </button>  

            </div>
            <div className="container">
                {
                    this.state.welcomeMessage
                }
            </div>

        </div>
        )    
    }
    retrieveWelcomeMessage(){
        // HelloWorldService.executeHelloWorldService()
        // .then(response => this.handleSuccessfulResponse(response))
        // HelloWorldService.executeHelloWorldBeanService()
        // .then(response => this.handleSuccessfulResponse(response))

        HelloWorldService.executeHelloWorldPathVariableService(this.props.params.name)
        .then(response => this.handleSuccessfulResponse(response))
        .catch(error=>this.handleErrorResponse(error))
    }
    handleSuccessfulResponse(response){
        this.setState({welcomeMessage: response.data.message})
    }
    handleErrorResponse(error){
        let errorMessage='';
        if(error.message)
            errorMessage += error.message
        
        if(error.response && error.response.data){
            errorMessage +=error.response.data.message
        } 

        this.setState({welcomeMessage: errorMessage})
    }
} 



export default TodoApp;