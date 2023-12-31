import React, { useState } from 'react'
import "./style.css"
import axios from 'axios'
const Login = () => {

    const [values, setValues] = useState({
        email: "",
        password: "",
    })

const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('', values)
    .then(res => console.log(res))
    .catch(err => console.log(err));
}

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
      <div className='bg-white p-3 rounded w-25 border'>
<h1>Login</h1>
<form onSubmit={handleSubmit}>
<div className='mb-3'>
    <label htmlFor="email">
        <strong>Email</strong>
    </label>
    <input type="email" placeholder='Enter Email' name='email'
    onChange={e => setValues({...values, email: e.target.value})}
    className='form-control rounded-0'autoComplete='off'/>
</div>
<div className='mb-3'>
    <label htmlFor="password"><strong>Password</strong></label>
    <input type="password" placeholder='Enter Password' name='password' 
     onChange={e => setValues({...values, password: e.target.value})}
    className='form-control rounded-0'/>
</div>
<button type='submit' className='btn btn-success w-100 rounded-0'> Log in</button>
<p>Do you agree to the terms and conditions</p>
<button className='btn btn-secondary border w-100 rounded-5'>Create Account</button>
</form>
      </div>
    </div>
  )
}

export default Login
