import React from "react";
// import { Providers } from "../../types/OAuthTypes";
import { OAuthTag } from "./OAuth/OAuthStyled";
// import "../_shared/OAuth/OAuth.css";

export const OAuthButton = ({ provider }) => {
   // export const OAuthButton = ({ provider }: Providers) => {
   // const url: string = `${process.env.REACT_APP_BASE_URL}/api/auth/${provider}`;
   const url = `${process.env.REACT_APP_BASE_URL}/api/auth/${provider}`;
   return (
      <>
         <OAuthTag
            provider={provider}
            href={url}
            data-testid={`${provider} OAuth-button`}
            className={`${provider} OAuth-button`}
         >
            Log in with {provider}
         </OAuthTag>

         {/* <a
            href={url}
            data-testid={`${provider} OAuth-button`}
            className={`${provider} OAuth-button`}
         >
            Login with {provider}
         </a> */}
      </>
   );
};
