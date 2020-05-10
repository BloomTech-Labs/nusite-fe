import React from "react";
import GoogleLogin from "react-google-login";

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
   }

   const responseGoogle = (response: any) => {
      //console.log(response);
      let res = response.profileObj;
      //console.log(res);
      localStorage.setItem("username", res.familyName);
      localStorage.setItem("token", response.googleId);
      localStorage.setItem("user_id", response.googleId);
      //debugger;
      alert(
         "Please enter your profile info on the dashboard if you want to build a profile!"
      );
      signup(response);
      props.history.push("/homeg");
   };

   return (
      <>
         <div className="App">
            <div className="row">
               <div style={{ paddingTop: "20px" }} className="col-sm-12">
                  <div className="col-sm-4">
                     <GoogleLogin
                        clientId="403619985302-kcu2rduts2gj7oolnvjd89aj5lhgnkf5.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                     ></GoogleLogin>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default GoogleOAuth;
