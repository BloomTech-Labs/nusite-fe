import { createMuiTheme } from "@material-ui/core/styles";
import { deepOrange } from "@material-ui/core/colors";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

//A helper fucntion to turn pixel font size into rem
function pxToRem(value: number) {
   return `${value / 16}rem`;
}
const primaryColor = "#25274d";
const secondaryColor = "#22C4D6";
const secondaryColorDark = "rgb(23, 137, 149)";
const white = "#f5f5f5";
const black = "#111";

const breakpoints = createBreakpoints({});

const theme = createMuiTheme({
   breakpoints: {
      values: {
         xs: 0,
         sm: 576,
         md: 768,
         lg: 992,
         xl: 1200,
      },
   },
   mixins: {
      toolbar: {
         minHeight: 78,
      },
   },
   overrides: {
      MuiTypography: {
         h1: {
            fontWeight: 700,
            color: `${secondaryColorDark}`,
            lineHeight: "2",
            [breakpoints.up("xs")]: {
               fontSize: "2.0rem",
            },
            [breakpoints.up("sm")]: {
               fontSize: pxToRem(36),
            },
            [breakpoints.up("md")]: {
               fontSize: pxToRem(40),
            },
            [breakpoints.up("lg")]: {
               fontSize: pxToRem(44),
            },
            [breakpoints.up("xl")]: {
               fontSize: pxToRem(48),
            },
         },
         h3: {
            fontWeight: 700,
            lineHeight: "1.25",
            color: `${secondaryColorDark}`,
            [breakpoints.up("lg")]: {
               fontSize: "2.188rem",
            },
            [breakpoints.up("md")]: {
               fontSize: "2.0rem",
            },
            [breakpoints.up("sm")]: {
               fontSize: "1.563rem",
            },
            [breakpoints.up("xs")]: {
               fontSize: "1.125rem",
            },
         },

         body1: {
            [breakpoints.up("xs")]: {
               fontSize: "1.0rem",
            },
            [breakpoints.up("sm")]: {
               fontSize: pxToRem(18),
            },
            [breakpoints.up("md")]: {
               fontSize: pxToRem(20),
            },
            [breakpoints.up("lg")]: {
               fontSize: pxToRem(22),
            },
            [breakpoints.up("xl")]: {
               fontSize: pxToRem(24),
            },
         },
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
         color: `${secondaryColorDark}`,
         lineHeight: "1.25",
      },
      body1: {
         fontWeight: 450,
      },

      tab: {
         textTransform: "none",
         fontWeight: 700,
         fontSize: "1rem",
      },
   },
});

export default theme;
