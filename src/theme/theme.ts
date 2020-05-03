import { createMuiTheme } from "@material-ui/core/styles";
import { deepOrange } from "@material-ui/core/colors";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const primaryColor = "#25274d";
const secondaryColor = "#22C4D6";
const white = "#f5f5f5";
const black = "#111";

export default createMuiTheme({
   breakpoints: {
      values: {
         xs: 0,
         sm: 576,
         md: 768,
         lg: 992,
         xl: 1200,
      },
   },
   overrides: {},
   mixins: {
      toolbar: {
         minHeight: 78,
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
      },
      background: {
         paper: `${white}`,
      },
      success: {
         main: `${secondaryColor}`,
      },
      warning: {
         main: deepOrange[400],
      },
   },

   typography: {
      htmlFontSize: 16,
      h1: {
         fontWeight: 700,
         fontSize: "1.5rem",
         lineHeight: "1.25",
      },
      tab: {
         //fontFamily: "",
         textTransform: "none",
         fontWeight: 700,
         fontSize: "1rem",
      },
   },
});
