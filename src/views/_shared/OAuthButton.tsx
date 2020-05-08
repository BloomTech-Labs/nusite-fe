import React from "react";
import { Providers } from "../../types/OAuthTypes";
import "../_shared/OAuth/OAuth.css";

export const OAuthButton = ({ provider }: Providers) => {
   const url: string = `${process.env.REACT_APP_BASE_URL}/api/auth/${provider}`;
   return (
      <>
         <div className="large-button" data-testid={`${provider}-OAuth-button`}>
            <a href={url} className={`${provider}-OAuth-button`}>
               Login with {provider}
            </a>
         </div>
      </>
   );
};
