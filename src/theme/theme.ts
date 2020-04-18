import { createMuiTheme } from "@material-ui/core/styles";
import { deepOrange, green } from "@material-ui/core/colors";

const primaryColor = "#25274d";
const secondaryColor = "#66fcf1";
const secondaryColorDark = "#45a29e";
const white = "#f5f5f5";
const black = "#111";

export default createMuiTheme({
   mixins: {
      toolbar: {
         minHeight: 48,
      },
   },
   palette: {
      common: {
         white: `${white}`,
         black: `${black}`,
      },
      primary: {
         main: `${primaryColor}`,
      },
      secondary: {
         main: `${secondaryColor}`,
         dark: `${secondaryColorDark}`,
      },
      background: {
         paper: `${white}`,
      },
      success: {
         main: green[500],
      },
      warning: {
         main: deepOrange[500],
      },
   },

   typography: {
      fontSize: 14,
      tab: {
         //fontFamily: "",
         textTransform: "none",
         fontWeight: 700,
         fontSize: "1rem",
      },
   },
});
