import React, { useContext } from "react";
import { ThemeContext } from "../../context/contexts";
import Checkbox from "@material-ui/core/Checkbox";

function DarkMode() {
   const theme: any = useContext(ThemeContext);

   return (
      <>
         <span className="darkMode">Click for Night Mode</span>
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
