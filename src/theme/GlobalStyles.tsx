import { withStyles } from "@material-ui/core";

const styles = (theme: any) => ({
   "@global": {
      ".main-container": {
         width: "100%",
         padding: "100px 20% 7.5% 20%",
         [theme.breakpoints.down("lg")]: {
            padding: "7.5% 10% 7.5% 10%",
         },
         [theme.breakpoints.down("md")]: {
            padding: "5% 5% 5% 5%",
         },
      },
      ".item-container": {
         width: "100%",
         padding: "0 0 125px 0",
         [theme.breakpoints.down("lg")]: {
            padding: "0 0 100px 0",
         },
         [theme.breakpoints.down("md")]: {
            padding: "0 0 75px 0",
         },
      },
      ".form-border": {
         backgroundColor: theme.palette.common.white,
         width: "500px",
         border: "1px",
         color: theme.palette.primary.light,
         borderStyle: "solid",
         borderRadius: "25px",
         [theme.breakpoints.down("md")]: {
            maxWidth: "100%",
         },
      },
      ".form-container": {
         padding: "50px",
      },
      ".text-field": {
         marginBottom: "3em",
         [theme.breakpoints.down("md")]: {
            width: "100%",
         },
      },
   },
});

function globalStyles() {
   return null;
}

export default withStyles(styles, { withTheme: true })(globalStyles);
