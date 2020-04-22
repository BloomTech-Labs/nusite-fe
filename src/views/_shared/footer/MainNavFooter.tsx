import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { useRoutes } from "../../util/routes";
const useStyles = makeStyles(theme => ({
   mainContainer: {
      padding: "0 0 20px 0",
   },
   text: {
      fontFamily: "Arial",
      fontWeight: "bold",
      fontSize: "1rem",
      color: theme.palette.common.white,
      paddingBottom: "16px",
   },
   link: {
      fontFamily: "Arial",
      //   fontWeight: "bold",
      fontSize: "1rem",
      color: theme.palette.common.white,
      textDecoration: "none",
      marginBottom: "8px",
   },
}));

const MainNavFooter = (props: any) => {
   const classes = useStyles();
   const routes = useRoutes();
   useEffect(() => {}, [routes]);

   return (
      <Grid
         container
         lg={4}
         xs={6}
         className={classes.mainContainer}
         justify="flex-start"
         alignItems="flex-start"
         direction="column"
      >
         <Grid item className={classes.text}>
            Main Navigation
         </Grid>
         {routes.map((route: any) => (
            <Grid
               item
               className={classes.link}
               component={Link}
               to={route.link}
            >
               {route.name}
            </Grid>
         ))}
      </Grid>
   );
};

export default MainNavFooter;
