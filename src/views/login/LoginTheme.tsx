import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
   container: {
      height: "1000px",
      backgroundImage: `url(${require("../../images/register.jpeg")})`,
      backgroundSize: "cover",
      backgroundPosition: "right",
      [theme.breakpoints.down("md")]: {
         height: "700px",
         backgroundPosition: "top right",
      },
   },
   loginContainer: {
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
   formContainer: {
      padding: "50px",
      flexDirection: "column",
      display: "flex",
      alignItems: "center",
      justify: "center",
      alignContent: "center",
   },
   textField: {
      marginBottom: "3em",
      [theme.breakpoints.down("md")]: {
         width: "100%",
      },
   },
}));
