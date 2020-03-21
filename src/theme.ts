import { createMuiTheme } from "@material-ui/core/styles"
import { whitesmoke } from "color-name";

const primaryColor = "#25274d"
const secondaryColor = "#45a29e"
const white = "whitesmoke"
export default createMuiTheme({
    palette: {
        common: {
            white: `${white}`
        },
        primary: {
            main: `${primaryColor}`
        },
        secondary: {
            main: `${secondaryColor}`
        }
    },
    typography: {
        fontSize: 14
    }
})