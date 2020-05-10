import React from "react";
//import ReactDOM from 'react-dom';
import FacebookLogin from "react-facebook-login";

const responseFacebook = (response: any) => {
   console.log(response);
};

const FacebookOAuth = (props: any) => {
   return (
      <>
         <FacebookLogin
            appId="1088597931155576"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}
            cssClass=""
         />
      </>
   );
};

export default FacebookOAuth;
