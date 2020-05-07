import React from "react";
import { Providers } from "../../types/OAuthTypes";

export const OAuthButton = ({ provider }: Providers) => {
   const url: string = `${process.env.REACT_APP_BASE_URL}/api/auth/${provider}`;
   return (
      <>
         <div data-testid={`${provider}-OAuth-button`}>
            <button
               className={`${provider}-OAuth-button loginBtn loginBtn--linkedin`}
            >
               <a href={url}>Log in with {provider}</a>
            </button>
         </div>
      </>
   );
};
