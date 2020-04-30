import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import { SIGNUP } from "../../graphql-requests/mutations";
import { useMutation } from "@apollo/react-hooks";

class GoogleOAuth extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }
   signup(res) {
      const googleresponse = {
         username: res.profileObj.name,
         first_name: res.profileObj.name,
         last_name: res.profileObj.name,
         email: res.profileObj.email,
         token: res.googleId,
         Image: res.profileObj.imageUrl,
         ProviderId: "Google",
      };
      //debugger;

      let [signup] = useMutation(SIGNUP);

      const OAuthSubmit = props => ({
         email = localStorage.getItem("email"),
         password = localStorage.getItem("token"),
         username,
      }) => {
         signup({ variables: { email: email, password: password } })
            .then(res => {
               console.log(res.data);
               localStorage.setItem("username", res.data.login.user.username);
               localStorage.setItem("user_id", res.data.login.user.id);
               let responseJson = res;
               sessionStorage.setItem("userData", JSON.stringify(res));
            })
            .then(data => {
               props.history.push("/");
               console.log(`Welcome from skynet...`);
            })
            .catch(err => alert(err.message));
      };
   }

   render() {
      const responseGoogle = response => {
         console.log(response);
         var res = response.profileObj;
         console.log(res);
         debugger;
         this.signup(response);
      };

      return (
         <div className="App">
            <div className="row">
               <div className="col-sm-12 btn btn-info">Login With Google</div>
            </div>
            <div className="row">
               <div style={{ paddingTop: "20px" }} className="col-sm-12">
                  <div className="col-sm-4"></div>
                  <form className="col-sm-4">
                     <GoogleLogin
                        clientId="403619985302-kcu2rduts2gj7oolnvjd89aj5lhgnkf5.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                     ></GoogleLogin>
                  </form>
                  <div className="col-sm-4"></div>
               </div>
            </div>
         </div>
      );
   }
}

export default GoogleOAuth;
