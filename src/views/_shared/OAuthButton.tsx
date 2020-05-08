import React from "react";
import { Providers } from "../../types/OAuthTypes";
import "../_shared/OAuth/OAuth.css";

export const OAuthButton = ({ provider }: Providers) => {
   const url: string = `${process.env.REACT_APP_BASE_URL}/api/auth/${provider}`;
   return (
      <>
         <div className="OAuth-button-container">
            <div className={`${provider}OAuth-icon-container`}></div>
            <a
               href={url}
               data-testid={`${provider} OAuth-button`}
               className={`${provider} OAuth-button`}
            >
               Login with {provider}
            </a>
         </div>
      </>
   );
};
