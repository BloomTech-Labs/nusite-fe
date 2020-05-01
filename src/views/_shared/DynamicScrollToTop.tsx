import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

//This component scrolls to the top of the page when a link is clicked
//unless it is a hash link
const DynamicScrollToTop = (props: any) => {
   useEffect(() => {
      //Disable while running unit tests
      if (process.env.NODE_ENV === "test") {
         return;
      }

      // Keep default behavior of restoring scroll position when user:
      // - clicked back button
      // - clicked on a link that programmatically calls `history.goBack()`
      // - manually changed the URL in the address bar (here we might want
      // to scroll to top, but we can't differentiate it from the others)
      if (props.history.action === "POP") {
         return;
      }
      // In all other cases, check fragment/scroll to top
      let hash = props.location.hash;
      if (hash) {
         let element = document.querySelector(hash);
         if (element) {
            element.scrollIntoView({ block: "start", behavior: "smooth" });
         }
      } else {
         window.scrollTo(0, 0);
      }
   });

   return <div />;
};

export default withRouter(DynamicScrollToTop);
