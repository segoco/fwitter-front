import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Login() {
  return (
    <div className='Login'>
      <div class='container'>
        <div class='div-1'>
          <div class='sub-div-1'>
          {/* <FontAwesomeIcon icon="fa-duotone fa-cat" /> */}
          </div>
        </div>
        <form method='POST' action='http://google.com'>
          <div class='div-2'>
            <div class='sub-div-2'>
              <h3>Log in to Fwitter</h3>
            </div>
          </div>
          <div class='div-3'>
            <div class='sub-div-3'>
              <br />
              <input type='email' placeholder='email' />
            </div>
          </div>
          <div class='div-4'>
            <div class='sub-div-4'>
              <label>Password</label>
              <br />
              <input type='password' />
            </div>
          </div>
          <div class='div-5'>
            <div class='sub-div-5'>
              <button type='submit'>Log in</button>
            </div>
          </div>
        </form>
        <div class='div-6'>
          <div class='sub-div-6'>
            <a href='#'>Forgot password? .&nbsp;</a>
            <a href='#'>Sign up for Twitter</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
