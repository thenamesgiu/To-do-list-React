import React from 'react';
import './App.css';

import TodoList from './components/TodoList';

function App() {
  return (  
    <div id='main-content' className='todo-app'>
      
      <TodoList/> 
    </div>
  );
}

export default App;
