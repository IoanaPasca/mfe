import React from 'react';
import { mount } from 'marketing/MarketingApp';

// mount function take a reference to html element is nopt a react component
import MarketingApp from './components/MarketingApp';

export default () => {
  return (
  <div>
    <h1>Hi there!</h1>
    <hr />
    <MarketingApp/>
  </div>
  )
}

