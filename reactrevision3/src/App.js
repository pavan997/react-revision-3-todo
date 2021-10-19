import logo from './logo.svg';
import './App.css';
import TodoApp from './Components/TodoApp';
import Login from './Components/Login';
import React from 'react';
import Signup from './Components/Signup';

function App() {
  const [switchPage, setSwitchPage] = React.useState(false);
  return (
    <div className="App">
      {/* <TodoApp /> */}
      {/* <Login /> */}
      {switchPage? <Login />:<Signup/>}
      <button onClick={()=>setSwitchPage((prev)=>!prev)}>{switchPage?'SignUp':'Login'}</button>
     
    </div>
  );
}

export default App;

