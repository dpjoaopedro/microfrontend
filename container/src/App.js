import React, { Fragment } from 'react';
import Header from '../components/Header';
import MarketingApp from '../components/MarketingApp';
import { BrowserRouter } from 'react-router-dom';

export default () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <MarketingApp />
      </Fragment>
    </BrowserRouter>
  );
};
