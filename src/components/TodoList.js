import React, {useState} from 'react';
import Background from '../Background';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
  const[todos, setTodos] = useState([]);

  const addTodo = todo =>{
    if(!todo.text || /^\s*$/.test(todo.text)){
        return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  }

  //const - função para editar itens da lista
  const updateTodo = (todoId, newValue) => {
    if(!newValue.text || /^\s*$/.test(newValue.text)){
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
  }

  //const - função para remover itens da lista
  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removeArr);
  }

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id){
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }
  return (
    <div className='form-listing'>
        <h1>Quais as tarefas de hoje?</h1>
        <TodoForm onSubmit={addTodo}/>
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
    </div>
  );
}

export default TodoList;