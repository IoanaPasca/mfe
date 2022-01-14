import React from "react";
import { SWitch, Route, Switch, Router} from 'react-router-dom';

import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
 import SingIn from "./components/Signin";
 import SingUp from "./components/Signup";

const generateClassName = createGenerateClassName({
  productionPrefix:'au'
})


export default ({ history, onSignIn }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin"> <SingIn onSignIn={onSignIn} /> </Route>
            <Route  path="/auth/signup"><SingUp onSignIn={onSignIn} /></Route>
          </Switch>
          </Router>
         </StylesProvider>
    </div>
  )
}