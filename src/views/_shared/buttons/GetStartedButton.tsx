import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core/";
import { Link } from "react-router-dom";
const useStyles = makeStyles(theme => ({
   button: {
      ...theme.overrides?.MuiTypography?.body1,
      borderRadius: "50px",
      height: "54px",
      margin: "54px",
   },
   buttonText: {
      color: theme.palette.secondary.main,
   },
}));

const GetStartedButton = (props: any) => {
   const classes = useStyles();
   return (
      <Button
         variant="contained"
         color="primary"
         className={classes.button}
         component={Link}
         to="/register"
      >
         <div className={classes.buttonText}>Get Started</div>
      </Button>
   );
};

export default GetStartedButton;
