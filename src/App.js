import React, { useRef } from 'react'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm()
  console.log(watch('email'))
  const password = useRef()

  return (
    <div className="App">
      <form
      //  onSubmit={handleSubmit(onSubmit)}
      >
        <label>Email</label>
        <input
          name="email"
          type="email"
          {...register('email', { required: true, patter: /^\S+@\S+$/i })}
        />

        {errors.email && <p>This email field is required</p>}
        <label>name</label>
        <input
          name="name"
          {...register('name', { required: true, maxLength: 10 })}
        />
        {errors.name?.type === 'required' && 'This name field is required'}
        {errors.name?.type === 'maxLength' &&
          'Your input exceed maximum lenght'}

        <label>Password</label>
        <input
          name="password"
          type="password"
          {...register('password', { required: true, minLength: 6 })}
        />
        {errors.password?.type === 'required' && <p>This field is required</p>}
        {errors.password?.type === 'minLength' && (
          <p>Password must have at least 6 chracters</p>
        )}

        <label>Password Confirm</label>
        <input
          name="password_confirm"
          type="password"
          {...register('password', {
            required: true,
            validate: (value) => value === password.current,
          })}
        />
        <input type="submit" />
      </form>
    </div>
  )
}

export default App
