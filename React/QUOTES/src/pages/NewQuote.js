import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../components/hooks/use-http';
import { addQuote } from '../components/lib/api';
import AuthContext from '../store/auth-context';

const NewQuote = () => {
  const authCtx = useContext(AuthContext);
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === 'completed') {
      history.push('/quotes');
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    sendRequest({ quoteData, token: authCtx.token });
    // console.log(quoteData);
  };
  return (
    <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
  );
};

export default NewQuote;
