import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import "./OAuthCustom.css";

const OAuthLogin: React.FC = (props: any) => {
   const responseFacebook = (response: any) => {
      console.log(response);
   };

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
         props.history.push("/");
      }
      DashRedir(props);
   };

   return (
      <>
         <div style={{ display: "flex", flexWrap: "wrap" }}>
            <FacebookLogin
               appId="2279221172374748"
               autoLoad={false}
               fields="name,email,picture"
               callback={responseFacebook}
               cssClass="btnFacebook"
               icon={
                  <i className="fa fa-facebook" style={{ marginLeft: "5px" }} />
               }
               textButton="&nbsp;&nbsp;Sign In with Facebook"
            />
            <GoogleLogin
               clientId="403619985302-kcu2rduts2gj7oolnvjd89aj5lhgnkf5.apps.googleusercontent.com"
               onSuccess={responseGoogle}
               onFailure={responseGoogle}
               className="btnGoogle"
            >
               <span>&nbsp;&nbsp;Sign In with Google</span>
            </GoogleLogin>
         </div>
      </>
   );
};

export default withRouter(OAuthLogin);
