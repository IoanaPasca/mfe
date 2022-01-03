import React, {lazy, Suspense, useState} from 'react';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import Header from './components/Header';
import Progress from "./components/Progress"
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

// mount function take a reference to html element is nopt a react component

const MarketingLazy = lazy(() => import('./components/MarketingApp'))
const AuthLazy = lazy(() => import('./components/AuthApp'))
// import this component only when we show it on the screen 

const generateClassName= createGenerateClassName({productionPrefix: "co"})

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  console.log("ssss", isSignedIn)

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header onSignOut={()=> setIsSignedIn(false)} isSignedIn={isSignedIn} />
          <Suspense fallback={<Progress/>}>
          <Switch>
            <Route path="/auth"> <AuthLazy onSignIn = {() => setIsSignedIn(true)}/> </Route>
            <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  )
}

