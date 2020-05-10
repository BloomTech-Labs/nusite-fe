import React from "react";
// import { Providers } from "../../types/OAuthTypes";
import { OAuthTag } from "./OAuth/OAuthStyled";

export const OAuthButton = ({ provider }) => {
   const url = `${process.env.REACT_APP_BASE_URL}/api/auth/${provider}`;

   // export const OAuthButton = ({ provider }: Providers) => {
   //    const url: string = `${process.env.REACT_APP_BASE_URL}/api/auth/${provider}`;
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
      </>
   );
};
