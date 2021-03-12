import React, { Fragment, lazy, Suspense, useState, useEffect } from 'react';
import Header from '../components/Header';
import Progress from '../components/Progress';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const MarketingLazy = lazy(() => import('../components/MarketingApp'));
const AuthLazy = lazy(() => import('../components/AuthApp'));

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Fragment>
          <Header
            onSignOut={() => setIsSignedIn(false)}
            signedIn={isSignedIn}
          />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </Fragment>
      </StylesProvider>
    </BrowserRouter>
  );
};
