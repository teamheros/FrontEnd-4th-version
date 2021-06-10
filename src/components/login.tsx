import { TextField } from '@material-ui/core';
import { useState } from 'react';
import { selectForm, setAllUSer, setCurrentUser, setUserConversation } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route, Router, useHistory, Link } from 'react-router-dom';
import '../css/login.css';
import '../css/mainPage.css';
import { login, checkOtp, getAllUser, getUserConvo } from '../services/userServices';
import React from 'react';

const LoginForm = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const [validator, setValidator] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = (e: any) => {
    e.preventDefault();
    const data = {
      userId,
      password,
    };
    login(data).then((res: any) => {
      console.log('res.data  ', res.data)
      dispatch(setUserConversation(res.data.users.chatDetails))
      dispatch(setCurrentUser(res.data.users))
      if (res.data.message === 'Login SuccessFul') {
        localStorage.setItem('login', res.data.token);
        history.push('/otp')
      }
    });
  };


  return (
    <div>
      <div className='form'>
      <h4>LOGIN </h4>
        <form>
          <div className='form-outline mb-4'>
            <TextField
              className='textfield'
              label='Email, phone, or username'
              value={userId}
              error={validator && userId === ''}
              helperText={validator && userId === '' ? 'Required' : ''}
              onChange={(e: any) => {
                setUserId(e.target.value);
              }}
            />
          </div>
          <div className='form-outline mb-4'>
            <TextField
              className='textfield'
              type='password'
              label='Password'
              value={password}
              helperText={validator && password === '' ? 'Required' : ''}
              error={validator && password === ''}
              onChange={(e: any) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className='row mb-4'>
            <div className='col d-flex justify-content-center'>
              <div className='form-check'>
                <input className='form-check-input' type='checkbox' id='form2Example3' />
                <label className='form-check-label' htmlFor='form2Example3'>
                  Remember me
                </label>
              </div>
            </div>

            <div className='col'>
              <a className='link' href='#!'>
                Forgot password?
              </a>
            </div>
          </div>
          <button type='submit' className='btn btn-primary btn-block mb-4 submit-btn' onClick={(e) => handleLogin(e)}>
            Log In
          </button>{' '}
          <div className='text-center'>
            <p>
              Not a member?{' '}
              <a className='link' onClick={() => dispatch(selectForm('SIGN_UP'))}>
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
