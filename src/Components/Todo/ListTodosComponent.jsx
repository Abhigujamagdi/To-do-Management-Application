import React, {Component} from 'react'
import TodoDataService from '../../api/todo/TodoDataService'
import Authentication from './Authentication.jsx'
import moment from 'moment'
class ListTodosComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            todos:[],
            message:null,
        }
        this.deleteTodoClicked =this.deleteTodoClicked.bind(this)
        this.updateTodoClicked =this.updateTodoClicked.bind(this)
        this.addTodoClicked =this.addTodoClicked.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this);
    }
    componentDidMount(){
        this.refreshTodos();
        
    }
    
    refreshTodos(){
        let username =Authentication.getLoggedInUserName()
        TodoDataService.retrieveAllTodos(username)
        .then(response=>{
            this.setState({todos:response.data})
        })

    }

    deleteTodoClicked(id){
        
        let username =Authentication.getLoggedInUserName()
        TodoDataService.deleteTodo(username,id)
        .then(response=>{
            this.setState({message:`Delete of todo ${id} successfull`});
            this.refreshTodos();
        })
    }
    updateTodoClicked(id){
        this.props.navigate(`/todos/${id}`);
        // let username =Authentication.getLoggedInUserName()
        // TodoDataService.updateTodo(username,id)
        // .then(response=>{
        //     this.setState({message:`Delete of todo ${id} successfull`});
        //     this.refreshTodos();

    }
    addTodoClicked(){
        this.props.navigate(`/todos/-1`);
        // let username =Authentication.getLoggedInUserName()
        // TodoDataService.updateTodo(username,id)
        // .then(response=>{
        //     this.setState({message:`Delete of todo ${id} successfull`});
        //     this.refreshTodos();

    }
    render(){
        return <div>
            <h1>List Todos</h1>
            {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>description</th>
                            <th>Is Completed?</th>
                            <th>Target Date</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo=>   
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{moment(todo.targetDate).format()}</td>
                                    <td><button className="btn btn-success" onClick={()=>this.updateTodoClicked(todo.id)}>Update</button></td>
                                    <td><button className="btn btn-warning" onClick={()=>this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <div className="row">
                    <button className="btn btn-success" onClick={this.addTodoClicked}>Add</button>

                </div>
                </div>
            </div>
    }
} 
export default ListTodosComponent