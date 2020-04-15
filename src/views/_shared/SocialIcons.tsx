import React from "react";

const SocialIcons = (props: any) => {
   return (
      <section className="center">
         <div id="social-test">
            <div className="social">
               <div>
                  <li>
                     <i className="fa fa-facebook" aria-hidden="true"></i>
                  </li>
                  <li>
                     <i className="fa fa-twitter" aria-hidden="true"></i>
                  </li>
                  <li>
                     <i className="fa fa-github" aria-hidden="true"></i>
                  </li>
                  <li>
                     <i
                        className="fa fa-linkedin-square"
                        aria-hidden="true"
                     ></i>
                  </li>
               </div>
            </div>
         </div>
      </section>
   );
};

export default SocialIcons;
