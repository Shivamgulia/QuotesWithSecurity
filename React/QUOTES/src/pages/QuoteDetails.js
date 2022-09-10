import { Fragment, useEffect, useState, useCallback, useContext } from 'react';
import {
  useParams,
  Route,
  NavLink,
  useRouteMatch,
  useHistory,
} from 'react-router-dom';

import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import DeleteQuote from '../components/quotes/DeleteQuote';
import useHttp from '../components/hooks/use-http';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import { getSingleQuote } from '../components/lib/api';
import AuthContext from '../store/auth-context';

const QuoteDetails = (props) => {
  const authCtx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();
  const match = useRouteMatch();
  const params = useParams();
  const { quoteId } = params;
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  const addedCommentsHandler = useCallback(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  useEffect(() => {
    sendRequest({ id: quoteId, token: authCtx.token });
  }, [sendRequest, quoteId, authCtx, authCtx.token]);

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  // console.log(loadedQuote);

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuote) {
    return <p>No Quote Found</p>;
  }

  const deletionHandler = () => {
    // console.log('delete ' + loadedQuote.id);
    setIsLoading(true);
    DeleteQuote({ id: loadedQuote.id, token: authCtx.token });
    setIsLoading(false);
    history.push('/new-quote');
  };

  // console.log(props.quotes);

  return (
    <Fragment>
      {isLoading && <LoadingSpinner />}
      <HighlightedQuote
        text={loadedQuote.quote}
        author={loadedQuote.author}
        id={loadedQuote.id}
        deletionHandler={deletionHandler}
      />
      <div className="centered">
        <Route path={match.path} exact>
          <NavLink className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </NavLink>
        </Route>
      </div>
      <Route path={`${match.path}/comments/`}>
        <Comments quote={loadedQuote} onAddComment={addedCommentsHandler} />
        <div className="centered">
          <NavLink className="btn--flat" to={`${match.url}`}>
            Hide Comments
          </NavLink>
        </div>
      </Route>
    </Fragment>
  );
};

export default QuoteDetails;
