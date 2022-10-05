import { Fragment, useContext, useEffect, useCallback } from 'react';

import QuoteList from '../components/quotes/QuoteList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import useHttp from '../components/hooks/use-http';
import { getAllQuotes } from '../components/lib/api';
import AuthContext from '../store/auth-context';

const AllQuotes = () => {
  const authCtx = useContext(AuthContext);
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest(authCtx.token);
  }, [sendRequest, authCtx.token]);

  useCallback(() => {
    sendRequest(authCtx.token);
  }, [sendRequest, authCtx.token]);

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />;
  }

  return (
    <Fragment>
      <QuoteList quotes={loadedQuotes} />
    </Fragment>
  );
};

export default AllQuotes;
