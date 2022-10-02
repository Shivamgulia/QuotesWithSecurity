import { useHistory } from 'react-router-dom';
import classes from './NotFound.module.css';
const NotFound = () => {
  const history = useHistory();
  const back = () => {
    history.push('/');
  };
  return (
    <div>
      <div className="centered">
        <p>Page Not Found!</p>
      </div>
      <div className="centered">
        <button className={classes.button} onClick={back}>
          Main Page
        </button>
      </div>
    </div>
  );
};

export default NotFound;
