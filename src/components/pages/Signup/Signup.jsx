import React from 'react'
import SCSignup from './Signup.styled'
import { useForm } from "react-hook-form";
import AuthService from '../../../services/auth.service';
import SCCard from '../../Card';
import Text from '../../Text';
import Input from '../../Input/Input';
import { Link } from 'react-router-dom';
import RoundButton from '../../RoundButton/RoundButton';
import Arrow from '../../svgs/Arrow';
const EMAIL_PATTERN = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


export default function Signup({ handleUser, history }) {
  const authService = new AuthService();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    authService.signup(data)
      .then(response => {
        console.log(response.data);
        handleUser(response.data);
        history.push('/todos')
      })
      .catch(console.error)
  };

  return (
    <SCSignup>
      <SCCard style={{ width: 394 }}>
        <Text weight="superDisplay" size="l" color="black">Regístrate:</Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input error={errors.username} label="Nombre de usuario:" placeholder="ironhack" name="username" defaultValue="ironhack" registerRef={register({ required: true })} />

          <Input error={errors.email} label="Email:" placeholder="manu@eldelbombo.com" name="email" defaultValue="test@ironhack.com" registerRef={register({ required: true, pattern: EMAIL_PATTERN })} />

          <Input error={errors.password} label="Contraseña:" placeholder="Es secreta, de 3 letras min y tiene Mayus" name="password" type="password" registerRef={register({ required: true, minLength: 3 })} />

          <div className="button-container">
            <RoundButton type="submit">
              <Arrow />
            </RoundButton>
          </div>
        </form>
        <Text className="link" color="black" size="m">Si ya tienes cuenta, <Link to="/login"><Text size="m" as="a">Logeate</Text></Link></Text>
      </SCCard>
    </SCSignup>
  )
}
