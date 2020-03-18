import React, { useContext } from "react";
import { ThemeContext } from "./contexts";
import Checkbox from "@material-ui/core/Checkbox";

function DarkMode() {
   const theme = useContext(ThemeContext);

   return (
      <>
         <span className="darkMode">Click for Dark Mode</span>
         <br />
         <Checkbox
            className="darkMode"
            value={theme.darkMode}
            // we can use the darkMode setter provided through the context
            onChange={e => theme.setDarkMode(e.target.checked)}
         />
      </>
   );
}

export default DarkMode;
