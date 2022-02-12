import React, {Component} from 'react'
import Authentication from './Authentication.jsx'

class LoginComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            username:'hwManager',
            password:'',
            hasLoginFailed:false,
            showSuccess:false
        }
        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this) 
        this.handleChange=this.handleChange.bind(this)
        this.loginClicked=this.loginClicked.bind(this)
    
    }

    handleChange(event){
        console.log(event.target.name);
        this.setState({[event.target.name]:event.target.value})
    }

    
    // handleUsernameChange(event){
    //     console.log(event.target.name);
    //     this.setState({[event.target.name]:event.target.value})
    // }

    // handlePasswordChange(event){
    //     console.log(event.target.value);
    //     this.setState({password:event.target.value})
    // }
    loginClicked(){
        // if(this.state.username==='hwManager' && this.state.password==='dummy'){
        //     Authentication.registerSuccessfulLogin(this.state.username, this.state.password)
        //     this.props.navigate(`/welcome/${this.state.username}`)
        //     // this.setState({showSuccess:true})
        //     // this.setState({hasLoginFailed:false})
        // }    
        // else{
        //     console.log('failed')
        //     this.setState({showSuccess:false})
        //     this.setState({hasLoginFailed:true})
        // // console.log(this.state)
        // }
        // Authentication.executeBasicAuthenicationService(this.state.username, this.state.password)
        //     .then(
        //         ()=>{ Authentication.registerSuccessfulLogin(this.state.username, this.state.password)
        //         this.props.navigate(`/welcome/${this.state.username}`)}
        //     ).catch(
        //         ()=>{
        //             this.setState({showSuccess:false})
        //     this.setState({hasLoginFailed:true})
        //         }
        //     )
        Authentication.executeJwtAuthenicationService(this.state.username, this.state.password)
            .then(
                (response)=>{ Authentication.registerSuccessfulLoginForJwt(this.state.username, response.data.token)
                this.props.navigate(`/welcome/${this.state.username}`)}
            ).catch(
                ()=>{
                    this.setState({showSuccess:false})
                this.setState({hasLoginFailed:true})
                }
            )
}

    render(){
        return(
            <div>
                <h1>Login</h1>
                <div className="container"></div>
                {/*<ShowCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                {this.state.showSuccess && <div>Login Successfully</div>}
                {/*<SuccessMessage showSuccess={this.state.showSuccess}/>*/}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button  className="btn btn-success"onClick={this.loginClicked}>Login </button>
            </div>
            )
    }
}
export default LoginComponent