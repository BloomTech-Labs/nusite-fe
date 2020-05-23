import React from "react";
import { BASE_URL } from "../../clientConfig";
// import { Providers } from "../../types/OAuthTypes";
import { OAuthTag } from "./OAuth/OAuthStyled";

export const OAuthButton = ({ provider }) => {
   const url = `${BASE_URL}/api/auth/${provider}`;

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
