import React from "react";

export const OAuthButton = ({ provider }: any) => {
   const url: string = `http://partnerd-staging.herokuapp.com/api/auth/${provider}`;
   return (
      <>
         <button className={`${provider}-oAuth-button`}>
            <a href={url}>Log In With {provider}</a>
         </button>
      </>
   );
};
