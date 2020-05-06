import React from "react";
import { Providers } from "../../types/OAuthTypes";

export const OAuthButton = ({ provider }: Providers) => {
   const url: string = `http://partnerd-staging.herokuapp.com/api/auth/${provider}`;
   return (
      <>
         <button className={`${provider}-oAuth-button`}>
            <a href={url}>Log In With {provider}</a>
         </button>
      </>
   );
};
