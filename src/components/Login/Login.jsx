import React from 'react'
import { Background, Card, FormRow } from './styled'

const Login = () => {
  return (
    <Background>
      <Card>
        <form>

          <FormRow type="text">
            <label htmlFor="user">Usuario:</label>
            <input id="user" type="text" placeholder="Usuario@mail.com" />
          </FormRow>

          <FormRow type="text">
            <label htmlFor="password">Contraseña</label>
            <input  id="password" type="password" />
          </FormRow>

          <FormRow type="checkbox">
            <input id="remember_data" type="checkbox" />
            <label htmlFor="remember_data">Recordar datos</label>
          </FormRow>

          <FormRow type="button">
            <button type="submit" >Entrar</button>
          </FormRow>

        </form>
      </Card>
    </Background>
  )
}

export default Login
