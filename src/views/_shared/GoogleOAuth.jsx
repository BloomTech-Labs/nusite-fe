import React, { Component } from "react";
import GoogleLogin from "react-google-login";
// import { LOGIN } from "../../graphql-requests/mutations";
// import { useMutation } from "@apollo/react-hooks";
import { Route, withRouter } from "react-router-dom";

class GoogleOAuth extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }
   signup(res) {
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

      //   let [login] = useMutation(LOGIN);

      //   const OAuthSubmit = props => ({
      //      email = localStorage.getItem("email"),
      //      password = localStorage.getItem("token"),
      //   }) => {
      //      login({ variables: { email: email, password: password } })
      //         .then(res => {
      //            console.log(res.data);
      //            localStorage.setItem("username", res.data.login.user.username);
      //            localStorage.setItem("user_id", res.data.login.user.id);
      //            let responseJson = res;
      //            sessionStorage.setItem("userData", JSON.stringify(res));
      //         })
      //         .then(data => {
      //            props.history.push("/home");
      //            console.log(`Welcome from skynet...`);
      //         })
      //         .catch(err => alert(err.message));
      //   };
   }

   render() {
      const responseGoogle = response => {
         console.log(response);
         var res = response.profileObj;
         console.log(res);
         localStorage.setItem("username", res.familyName);
         localStorage.setItem("first_name", res.familyName);
         localStorage.setItem("last_name", res.familyName);
         localStorage.setItem("email", res.email);
         localStorage.setItem("token", response.googleId);
         localStorage.setItem("user_id", response.googleId);
         this.props.history.push("/homeg");
         //debugger;
         alert(
            "please enter your profile info on the dashboard for future access to your profile!"
         );
         this.signup(response);
      };

      return (
         <div className="App">
            <div className="row">
               <div className="col-sm-12 btn btn-info"></div>
            </div>
            <div className="row">
               <div style={{ paddingTop: "20px" }} className="col-sm-12">
                  <div className="col-sm-4"></div>
                  <div className="col-sm-4">
                     <GoogleLogin
                        clientId="403619985302-kcu2rduts2gj7oolnvjd89aj5lhgnkf5.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                     ></GoogleLogin>
                  </div>
                  <div className="col-sm-4"></div>
               </div>
            </div>
         </div>
      );
   }
}

export default withRouter(GoogleOAuth);
