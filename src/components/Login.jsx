import React from 'react';

function Login() {
  return (
    <div className='Login'>
      <div className='container'>
        <div className='logoHome'>
          <i className='fas fa-cat fa-2x'></i>
        </div>

        <form method='POST' action='http://google.com'>
          <div className='div-2'>
            <div className='sub-div-2'>
              <h3>Log in to Fwitter</h3>
            </div>
          </div>
          <div className='div-3'>
            <div className='sub-div-3'>
              <input type='email' placeholder='Your email (fi, user@something.co)' />
            </div>
          </div>
          <div className='div-4'>
            <div className='sub-div-4'>
              <input type='password' placeholder='Your Password' />
            </div>
          </div>
          <div className='div-5'>
            <div className='sub-div-5'>
              <button type='submit'>Log in</button>
            </div>
          </div>
        </form>
        <div className='div-6'>
          <div className='sub-div-6'>
            <a href='#'>Forgot password? .&nbsp;</a>
          </div>
        </div>
        <div className='div-7'>
          <div className='sub-div-7'>
            <h3>Sign up with Gmail or Facebook</h3>
            <a href='#loginFacebook'>
              <i className='fab fa-facebook-square fa-2x'></i>
            </a>
            <a href='#loginFacebook'>
              <i className='fab fa-google fa-2x'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
