import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const logoutHandler = () => {
    authCtx.logout();
  };
  const loggedin = authCtx.isLoggedIn;
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quote</div>
      <nav className={classes.nav}>
        <ul>
          {loggedin && (
            <li>
              <NavLink to="/quotes" activeClassName={classes.active}>
                All Quotes
              </NavLink>
            </li>
          )}
          {loggedin && (
            <li>
              <NavLink to="/new-quote" activeClassName={classes.active}>
                Add Quote
              </NavLink>
            </li>
          )}
          {loggedin && (
            <li>
              <NavLink
                to="/new-quote"
                activeClassName={classes.active}
                onClick={logoutHandler}
              >
                Logout
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
