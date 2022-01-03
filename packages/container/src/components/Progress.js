import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = ((theme) => {
  return createStyles({
    bar: {
      width: "100%",
      '$> * + *': {
        marginTop: "20px"
      }
  }

  })
})

export default () => {
  const classes = useStyles()
  return (
    <div className={classes.bar}>
       <LinearProgress/>
    </div>
  )
}