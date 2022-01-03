import React from "react";
import { SWitch, Route, BrowserRouter, Switch, Router} from 'react-router-dom';

import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
 import SingIn from "./components/Signin";
 import SingUp from "./components/Signup";

const generateClassName = createGenerateClassName({
  productionPrefix:'au'
})


export default ({history, onSingIn}) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin"> <SingIn onSignIn={onSingIn} /> </Route>
             <Route  path="/auth/signup"><SingUp onSignIn={onSingIn} /></Route>
          </Switch>
          </Router>
         </StylesProvider>
    </div>
  )
}