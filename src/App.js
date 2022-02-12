import logo from './logo.svg';
import './App.css';
import FirstComponent from './Components/learning-ex/FirstComponent';
import SecondComponent from './Components/learning-ex/SecondComponent';
import ThirdComponent from './Components/learning-ex/ThirdComponent';
import Counter from './Components/Counter/Counter';
import TodoApp from './Components/Todo/TodoApp';

function App() {
  return (
    <div className="App">
      <TodoApp/>
      {/*<Counter/>*/}
    </div>
    
  );
}
function LearningComponents(){
  return (
    <div className="LearningComponents">
      My Hello World
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
    </div>
  );
} 


export default App;
