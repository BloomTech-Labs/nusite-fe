import React from "react";
import GoogleLogin from "react-google-login";
import { Redirect, withRouter } from "react-router-dom";

const GoogleOAuth: React.FC = (props: any) => {
   function signup(res: any) {
      const googleresponse = {
         username: res.profileObj.name,
         first_name: res.profileObj.name,
         last_name: res.profileObj.familyName,
         email: res.profileObj.email,
         token: res.googleId,
         Image: res.profileObj.imageUrl,
         ProviderId: "Google",
      };
      //debugger;
      return <Redirect to="/homeprof" />;
   }

   const responseGoogle = (response: any) => {
      //console.log(response);
      let res = response.profileObj;
      console.log(res);
      localStorage.setItem("username", res.familyName);
      localStorage.setItem("token", response.googleId);
      localStorage.setItem("user_id", response.googleId);
      //debugger;
      alert(
         "Please enter your profile info on the dashboard to build a user profile."
      );
      signup(response);
      function DashRedir(props: any) {
         props.history.push("/homeprof");
      }
      DashRedir(props);
   };

   return (
      <>
         <GoogleLogin
            clientId="403619985302-kcu2rduts2gj7oolnvjd89aj5lhgnkf5.apps.googleusercontent.com"
            buttonText=""
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
         ></GoogleLogin>
      </>
   );
};

export default withRouter(GoogleOAuth);
