import React from "react";
// import { LOGIN } from "../../graphql-requests/mutations";
// import { useMutation } from "@apollo/react-hooks";

// export class GoogleLogin extends React.Component {
//    componentDidMount() {
//       this.googleSDK();
//       //this._outhSubmit();
//       console.log("googleSDK");
//    }

//    prepareLoginButton = () => {
//       console.log(this.refs.googleLoginBtn);

//       this.auth2.attachClickHandler(
//          this.refs.googleLoginBtn,
//          {},
//          googleUser => {
//             let profile = googleUser.getBasicProfile();
//             console.log("Token || " + googleUser.getAuthResponse().id_token);
//             localStorage.setItem(
//                "token",
//                googleUser.getAuthResponse().id_token
//             );
//             console.log("ID: " + profile.getId());
//             console.log("Name: " + profile.getName());
//             //localStorage.setItem(("first_name", profile.getName());
//             //localStorage.setItem("last_name", profile.getName());
//             console.log("Image URL: " + profile.getImageUrl());
//             console.log("Email: " + profile.getEmail());
//             localStorage.setItem("email", profile.getEmail());
//          },
//          error => {
//             alert(JSON.stringify(error, undefined, 2));
//          }
//       );
//    };

//    googleSDK = () => {
//       window["googleSDKLoaded"] = () => {
//          window["gapi"].load("auth2", () => {
//             this.auth2 = window["gapi"].auth2.init({
//                client_id:
//                   "403619985302-kcu2rduts2gj7oolnvjd89aj5lhgnkf5.apps.googleusercontent.com",
//                //cookiepolicy: "single_host_origin",
//                scope: "profile email",
//             });
//             this.prepareLoginButton();
//          });
//       };

//       (function(d, s, id) {
//          var js,
//             fjs = d.getElementsByTagName(s)[0];
//          if (d.getElementById(id)) {
//             return;
//          }
//          js = d.createElement(s);
//          js.id = id;
//          js.src =
//             "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
//          fjs.parentNode.insertBefore(js, fjs);
//       })(document, "script", "google-jssdk");
//       ({ outhSubmit = props => ({
//          email = localStorage.getItem("email"),
//          password = localStorage.getItem("token"),
//       }) => {
//          let [login] = useMutation(LOGIN);
//          login({ variables: { email: email, password: password } })
//             .then(res => {
//                console.log(res.data);
//                localStorage.setItem("username", res.data.login.user.username);
//                localStorage.setItem("user_id", res.data.login.user.id);
//             })
//             .then(data => {
//                props.history.push("/home");
//                console.log(`Welcome from skynet...`);
//             })
//             .catch(err => alert(err.message));
//       }});
//    };

//    render() {
//       return (
//          <div className="row mt-5">
//             <div className="col-md-12">
//                <br />
//                <div className="card mt-3">
//                   <div className="card-body">
//                      <div className="row mt-5 mb-5">
//                         <div className="col-md-4 mt-2 m-auto ">
//                            <button
//                               className="loginBtn loginBtn--google"
//                               ref="googleLoginBtn"
//                            >
//                               Login with Google
//                            </button>
//                         </div>
//                      </div>
//                   </div>
//                </div>
//             </div>
//          </div>
//       );
//    }
// }

// export default GoogleLogin;
