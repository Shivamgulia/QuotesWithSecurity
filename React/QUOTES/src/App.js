import React, { useContext, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';
import AuthContext from './store/auth-context';

function App() {
  const QuoteDetails = React.lazy(() => import('./pages/QuoteDetails'));
  const NewQuote = React.lazy(() => import('./pages/NewQuote'));
  const AllQuotes = React.lazy(() => import('./pages/AllQuotes'));
  const NotFound = React.lazy(() => import('./pages/NotFound'));
  const AuthPage = React.lazy(() => import('./pages/AuthPage'));

  const authCtx = useContext(AuthContext);
  const loggedIn = authCtx.isLoggedIn;

  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          {!loggedIn && (
            <Route path="/auth">
              <AuthPage />
            </Route>
          )}
          <Route path="/" exact>
            {loggedIn && <Redirect to="/quotes" />}
            {!loggedIn && <Redirect to="/auth" />}
          </Route>
          <Route path="/quotes/:quoteId">
            {loggedIn && <QuoteDetails />}
            {!loggedIn && <Redirect to="/auth" />}
          </Route>
          <Route path="/quotes">
            {loggedIn && <AllQuotes />}
            {!loggedIn && <Redirect to="/auth" />}
          </Route>
          <Route path="/new-quote" exact>
            {loggedIn && <NewQuote />}
            {!loggedIn && <Redirect to="/auth" />}
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
