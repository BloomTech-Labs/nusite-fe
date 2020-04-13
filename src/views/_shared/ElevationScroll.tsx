import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import React from "react"
//This component makes the navagation bar flat when at the very top
//of the page but hovers the navagation bar when scrolling down.
function ElevationScroll(props: any) {
    const { children } = props;
    const trigger = useScrollTrigger({
       disableHysteresis: true,
       threshold: 0,
    });
 
    return React.cloneElement(children, {
       elevation: trigger ? 4 : 0,
    });
 }
 export default ElevationScroll
 
 