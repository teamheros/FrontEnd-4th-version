import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { TextField } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FilePicker } from 'evergreen-ui';
import '../css/login.css';
import { selectForm } from '../redux/actions';
import { signUp } from '../services/userServices';

const SignUpForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [bioData, setBioData] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();

  const handleFileUpload = (e: any) => {
    console.log('Enter ', e.target.files);
    
    setProfileImage(e.target.files[0]);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log();
    const formData: any = new FormData();

    formData.append('firstName', firstName);

    formData.append('lastName', lastName);

    formData.append('email', email);

    formData.append('phoneNumber', phoneNumber);

    formData.append('gender', gender);

    formData.append('bioData', bioData);

    formData.append('password', password);

    formData.append('passwordConfirm', confirmPassword);

    formData.append('profileImage', profileImage);
    for (let val of formData.entries()) {
      console.log(val);
    }
    signUp(dispatch, formData);
  };

  return (
    <div className='main-page-signup'>
      <div className='form signup-form'>
      <h3>SIGN-UP</h3>
        <form>
          <div className='row mb-4'>
            <div className='col'>
              <div className='form-outline'>
                <TextField
                  className='textfield'
                  label='First Name'
                  value={firstName}
                  onChange={(e: any) => setFirstName(e.target.value)}
                />
              </div>
            </div>
            <div className='col'>
              <div className='form-outline'>
                <TextField
                  className='textfield'
                  label='Last Name'
                  value={lastName}
                  onChange={(e: any) => setLastName(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className='form-outline mb-4'>
            <TextField
              className='textfield'
              label='Email'
              value={email}
              onChange={(e: any) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className='form-outline mb-4'>
            <TextField
              className='textfield'
              label='Phone'
              value={phoneNumber}
              helperText=''
              error={false}
              onChange={(e: any) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </div>
          <div className='form-outline mb-4'>
            <TextField
              className='textfield'
              label='Username'
              value={username}
              onChange={(e: any) => {
                setUsername(e.target.value);
              }}
            />
          </div>

          <div className='form-outline mb-4'>
            <TextField
              className='textfield'
              label='Gender'
              value={gender}
              onChange={(e: any) => {
                setGender(e.target.value);
              }}
            />
          </div>
          <div className='form-outline mb-4'>
        <input type="file" onChange={(e:any) => handleFileUpload(e) }></input>
          </div>
          <div className='form-outline mb-4'>
            <TextField
              className='textfield'
              label='Bio'
              value={bioData}
              onChange={(e: any) => {
                setBioData(e.target.value);
              }}
            />
          </div>

          <div className='form-outline mb-4'></div>
          <div className='row mb-4'>
            <div className='col'>
              <div className='form-outline'>
                <TextField
                  className='textfield'
                  type='password'
                  label='Password'
                  value={password}
                  onChange={(e: any) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className='col'>
              <div className='form-outline'>
                <TextField
                  className='textfield'
                  type='password'
                  label='Password'
                  value={confirmPassword}
                  onChange={(e: any) => {
                    setConfirmPassword(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>

          <button type='submit' className='btn btn-primary btn-block mb-4 submit-btn' onClick={(e) => handleSubmit(e)}>
            Submit
          </button>

          <div className='text-center'>
            <p>
              Already registered?{' '}
              <a className='link' onClick={() => dispatch(selectForm('LOGIN_FORM'))}>
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
