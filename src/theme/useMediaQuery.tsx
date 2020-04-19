import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function SimpleMediaQuery() {
   const matches = useMediaQuery("(min-width:768px)");

   return <span>{`(min-width:768px) matches: ${matches}`}</span>;
}
