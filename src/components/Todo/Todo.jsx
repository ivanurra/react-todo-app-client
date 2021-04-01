import React from 'react'
import TodoService from '../../services/todo.service'
import Flag from '../svgs/Flag';
import Text from '../Text';
import SCTodo from './Todo.styled'

export default function Todo({ id, name, description, done, dueDate, user, priority, refresh }) {
  const todoService = new TodoService();
  const handleDone = () => {
    todoService.updateOne(id, { done: true })
      .then(() => {
        refresh()
      })
  }

  const handlePriority = () => {
    todoService.updateOne(id, { priority: !priority })
      .then(() => {
        refresh()
      })
  }
  const formatDate = (date) => {
    const d = new Date(date);
    const year = new Intl.DateTimeFormat('es', { year: 'numeric' }).format(d);
    const month = new Intl.DateTimeFormat('es', { month: 'short' }).format(d);
    const day = new Intl.DateTimeFormat('es', { day: '2-digit' }).format(d);
    return (`${day}/${month}/${year}`);
  }
  return (
    <SCTodo priority={priority}>
      <div className="first-div">
        <button onClick={() => handleDone()}></button>
        <Text weight="gelion" size="m" color="black">{name}</Text>
      </div>
      <Flag color={ priority ? '#FDD262' : '#2B2F30'} onClick={() => handlePriority()} />
    </SCTodo>
  )
}
