import { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import Recaptcha from 'react-recaptcha';

import AuthContext from '../../store/auth-context';
import classes from './AuthForm.module.css';

const AuthForm = () => {
  const history = useHistory();

  const [showPassword, setShowPassword] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const fnameRef = useRef();
  const lnameRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const toggleShowPassword = () => {
    if (showPassword) setShowPassword(false);
    if (!showPassword) setShowPassword(true);
  };

  const verifyCallback = () => {
    setIsVerified(true);
  };
  const load = () => {
    setIsVerified(false);
  };

  async function submitionHandler(event) {
    event.preventDefault();
    if (isVerified) {
      const enteredEmail = emailInputRef.current.value;
      const enteredPassword = passwordInputRef.current.value;
      let url;
      if (!isLogin) {
        const enteredFName = fnameRef.current.value;
        const enteredLName = lnameRef.current.value;
        const hashPassword = bcrypt.hashSync(enteredPassword, 10);

        url =
          'http://ec2-13-233-232-148.ap-south-1.compute.amazonaws.com:8080/v1/signup';
        const user = {
          firstName: enteredFName,
          lastName: enteredLName,
          userName: enteredEmail,
          password: hashPassword,
          roles: [5],
        };
        // console.log(user);
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(user),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        // console.log(response);

        if (!response.ok) {
          throw new Error(data.message || 'Could not add comment.');
        }
      }

      setIsLoading(true);

      url =
        'http://ec2-13-233-232-148.ap-south-1.compute.amazonaws.com:8080/api/v1/auth/login'; //login send req url
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          userName: enteredEmail,
          password: enteredPassword,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          setIsLoading(false);
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMessage = 'Authentication Failed';
              if (data && data.error && data.error.message) {
                errorMessage = data.error.message;
              }
              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          const experationTime = new Date(new Date().getTime() + +36000000);
          authCtx.login(data.token, experationTime.toISOString());
          history.replace('/');
        })
        .catch((err) => {
          alert(err.message);
        });
    } else {
      alert('Verify that you are not a robot');
    }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>

      <form onSubmit={submitionHandler}>
        {!isLogin && (
          <div className={classes.control}>
            <label htmlFor="firstName">Your First Name</label>
            <input type="firstName" id="firstName" required ref={fnameRef} />
          </div>
        )}
        {!isLogin && (
          <div className={classes.control}>
            <label htmlFor="lastName">Your Last Name</label>
            <input type="name" id="LastName" required ref={lnameRef} />
          </div>
        )}
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="userName" id="userName" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <input type="checkbox" onClick={toggleShowPassword} /> Show Password
        <div className={classes.actions}>
          <div>
            <Recaptcha
              sitekey="6Lc-ulQiAAAAABhKNCmKmoGU_KlxbzPT0FXWxSBx"
              render="explicit"
              verifyCallback={verifyCallback}
              onloadCallback={load}
            />
          </div>
          <br />
          {!isLoading && (
            <button>{isLogin ? 'Login' : 'Create Account'}</button>
          )}
          {isLoading && <p>Sending Request....</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
