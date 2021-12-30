import React from 'react';
import { mount } from 'marketing/MarketingApp';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';

// mount function take a reference to html element is nopt a react component
import MarketingApp from './components/MarketingApp';

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <MarketingApp/>
      </div>
    </BrowserRouter>
  )
}

