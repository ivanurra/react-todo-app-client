import React from 'react'
import { useForm } from 'react-hook-form';
import TodoService from '../../services/todo.service';
import Input from '../Input/Input';
import RoundButton from '../RoundButton/RoundButton';
import Arrow from '../svgs/Arrow';
import SCCreateTodo from './CreateTodo.styled'

export default function CreateTodo({ refresh }) {
  const todoService = new TodoService();
  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = data => {
    todoService.create(data)
      .then(() => {
        refresh();
        reset();
      })
      .catch(console.error)
  };

  return (
    <SCCreateTodo>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input className="input" error={errors.name} label="Escribe tu primer todo:" placeholder="Modelos base de datos" name="name" registerRef={register({ required: true })} />

        <RoundButton type="submit">
          <Arrow />
        </RoundButton>
      </form>
    </SCCreateTodo>
  )
}
