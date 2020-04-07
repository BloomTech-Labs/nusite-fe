import { createMuiTheme } from "@material-ui/core/styles";

const primaryColor = "#25274d";
const secondaryColor = "#66fcf1";
const white = "#f5f5f5";
const black = "#111";

export default createMuiTheme({
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
   },
   typography: {
      fontSize: 14,
   },
});
