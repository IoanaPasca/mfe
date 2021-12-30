import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

// mount function take a reference to html element is nopt a react component
import MarketingApp from './components/MarketingApp';

const generateClassName= createGenerateClassName({productionPrefix: "co"})

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
      <div>
        <Header/>
        <MarketingApp/>
        </div>
      </StylesProvider>
    </BrowserRouter>
  )
}

