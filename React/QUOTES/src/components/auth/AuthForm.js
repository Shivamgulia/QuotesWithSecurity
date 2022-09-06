import { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import AuthContext from '../../store/auth-context';
import classes from './AuthForm.module.css';

const AuthForm = () => {
  const history = useHistory();

  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  // const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // const switchAuthModeHandler = () => {
  //   setIsLogin((prevState) => !prevState);
  // };
  const submitionHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);

    let url;

    // if (isLogin) {
    //   url =
    //     'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBzllPQgDfwwi_Q0dkj-5Luvef0kNOfy9M';
    // } else {
    //   url =
    //     'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBzllPQgDfwwi_Q0dkj-5Luvef0kNOfy9M';
    // }
    url = 'http://localhost:8080/api/v1/auth/login'; //login send req url
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
        const experationTime = new Date(new Date().getTime() + +36000);
        authCtx.login(data.token, experationTime.toISOString());
        history.replace('/');
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section className={classes.auth}>
      {/* <h1>{isLogin ? "Login" : "Sign Up"}</h1> */}
      <h1>Login</h1>
      <form onSubmit={submitionHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="userName" id="userName" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            // <button>{isLogin ? 'Login' : 'Create Account'}</button>
            <button>Login</button>
          )}
          {isLoading && <p>Sending Request....</p>}
          {/* <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button> */}
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
