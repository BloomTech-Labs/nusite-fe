import * as createTypography from "@material-ui/core/styles/createTypography";
//This module extends the material-ui Typography to add the custum properties bellow
declare module "@material-ui/core/styles/createTypography" {
   //a tab typography property is added the defualt material-ui theme to style our tabs. 
   interface TypographyOptions {
      tab?: CSSProperties;
   }
   interface Typography {
      tab?: TypographyOptions;
   }
}
