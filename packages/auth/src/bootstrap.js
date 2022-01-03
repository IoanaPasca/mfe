import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory} from "history";

import App from "./App";

//Mount function to start up the app
export const mount = (el, { onNavigate, defaultHistory, initialPath, onSignIn }) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries:[initialPath]
  });

  if (onNavigate) {
    history.listen(onNavigate)
  }

  ReactDOM.render(<App history={history} onSignIn={onSignIn} />, el)

  return  {
    onParentNavigate({pathname : nextPathname}) {
      const { pathname } = history.location
      if (pathname !== nextPathname) {
        history.push(nextPathname)
      }

    }
  }
}

// if we are ind development and in isolation call mount immediately

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_auth-dev-root')
  if (devRoot) {
    mount(devRoot,{ defaultHistory: createBrowserHistory()})
  }
}