import React from 'react'
import SCLogin from './Login.styled'
import { useForm } from "react-hook-form";
import AuthService from '../../../services/auth.service';
import SCCard from '../../Card';
import Text from '../../Text';
import Input from '../../Input/Input';
import { Link } from 'react-router-dom';
import RoundButton from '../../RoundButton/RoundButton';
import Arrow from '../../svgs/Arrow';
const EMAIL_PATTERN = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

export default function Login({ handleUser, history }) {
  const authService = new AuthService();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    authService.login(data)
      .then(response => {
        console.log(response.data);
        handleUser(response.data);
        history.push('/todos')
      })
      .catch(console.error)
  };

  return (
    <SCLogin>
      <div>
        <SCCard style={{ width: 394 }}>
          <Text weight="superDisplay" size="l" color="black">Login</Text>
          <form onSubmit={handleSubmit(onSubmit)}>

            <Input error={errors.email} label="Email:" placeholder="manu@eldelbombo.com" name="email" defaultValue="test@ironhack.com" registerRef={register({ required: true, pattern: EMAIL_PATTERN })} />

            <Input error={errors.password} label="Contraseña:" placeholder="Recuerda la contraseña. Es la de siempre" name="password" type="password" registerRef={register({ required: true, minLength: 3 })} />

            <div className="button-container">
              <RoundButton type="submit">
                <Arrow />
              </RoundButton>
            </div>
          </form>
          <Text className="link" color="black" size="m">No tengo cuenta, <Link to="/signup"><Text size="m" as="a">Regístrate</Text></Link></Text>
        </SCCard>
      </div>
    </SCLogin>
  )
}
