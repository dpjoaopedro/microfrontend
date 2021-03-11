import React, { Fragment } from 'react';
import Header from '../components/Header';
import MarketingApp from '../components/MarketingApp';
import { BrowserRouter } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Fragment>
          <Header />
          <MarketingApp />
        </Fragment>
      </StylesProvider>
    </BrowserRouter>
  );
};
