import { withStyles } from "@material-ui/core";

const styles = (theme: any) => ({
   "@global": {
      ".main-container": {
         width: "100%",
         padding: "0 20% 2.5% 20%",
         [theme.breakpoints.down("md")]: {
            padding: "0 15% 2.5% 15%",
         },
         [theme.breakpoints.down("sm")]: {
            padding: "0 5% 2.5% 5%",
         },
         [theme.breakpoints.down("xs")]: {
            padding: "0 2.5% 2.5% 2.5%",
         },
      },
   },
});

function globalStyles() {
   return null;
}

export default withStyles(styles, { withTheme: true })(globalStyles);
