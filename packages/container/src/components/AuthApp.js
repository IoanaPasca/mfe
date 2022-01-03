import React, { useRef, useEffect } from "react";
import { mount } from 'auth/AuthApp';
import { useHistory } from "react-router-dom";

export default  ({onSignIn}) => {
  const ref = useRef(null)
  const history = useHistory()

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location // where we currently are
        if (pathname !== nextPathname) {
          history.push(nextPathname)
        }
      },
      onSignIn: onSignIn()
      
   })
    
    history.listen(onParentNavigate)
  },[])
  return <div ref={ref}/>
}