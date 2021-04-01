import React, { useEffect, useState } from 'react'
import TodoService from '../../../services/todo.service';
import SCTodoList from './TodoList.styled';
import Todo from '../../Todo/Todo';
import CreateTodo from '../../CreateTodo/CreateTodo';
import SCCard from '../../Card';
import Text from '../../Text';
import AuthService from '../../../services/auth.service';

export default function TodoList({ handleUser }) {
  const authService = new AuthService();
  const todoService = new TodoService();
  const [todos, setTodos] = useState([]);

  const refresh = () => todoService.get({ done: false })
    .then((response) => {
      setTodos(response.data)
    })

  useEffect(() => {
    refresh()
  }, [])

  const displayTodos = () => todos.map((todo, index) => <Todo key={index} {...todo} refresh={refresh} />);
  const handleLogout = () => {
    authService.logout()
    .then(() => {
      handleUser(null);
    })
  }

  return (
    <SCTodoList>
      <Text className="close-session" weight="gelion" size="m" color="black" onClick={() => handleLogout()}>Cerrar sesión</Text>
      <SCCard style={{ width: 688 }}>
        <Text weight="superDisplay" size="l" color="black">{todos.length === 0 ? 'Ups, no tienes ningún todo' : todos.length === 1 ? 'Estas más cerca de no dejarte nada, todo' : 'Perfecto, sigue añadiendo todo'}</Text>
        <div className="todo-wrapper">
          {displayTodos()}
        </div>
        <CreateTodo refresh={refresh} />
      </SCCard>
    </SCTodoList>
  )
}
