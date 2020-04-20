import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { useRoutes } from "../../util/routes";
const useStyles = makeStyles(theme => ({
   footer: {
      background: theme.palette.primary.main,
      width: "100%",
      height: "200px",
      justifyContent: "center",
      justifyItems: "center",
      display: "flex",
      alignContent: "center",
   },
   link: {
      fontFamily: "Arial",
      fontWeight: "bold",
      fontSize: "1rem",
      color: theme.palette.secondary.main,
      textDecoration: "none",
   },
   footerText: {
      fontFamily: "Arial",
      fontSize: "1rem",
      color: theme.palette.common.white,
   },
}));

const Footer = (props: any) => {
   const classes = useStyles();
   const routes = useRoutes();
   useEffect(() => {}, [routes]);

   return (
      <footer className={classes.footer}>
         <Grid container justify="center">
            <Grid
               container
               justify="center"
               alignContent="center"
               direction="column"
            >
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
            <Grid className={classes.footerText} item>
               A web development marketplace
            </Grid>
            <Grid className={classes.footerText} item>
               © PartNerd 2020
            </Grid>
         </Grid>
      </footer>
   );
};

export default Footer;
