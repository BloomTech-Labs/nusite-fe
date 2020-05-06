// import { Providers } from "../../types/OAuthTypes";

// class OAuthProvider {
//    constructor({ base_url, secret, client_id, scope, redirect_uri, state }) {
//       (this.base_url = base_url),
//          (this.secret = secret),
//          (this.client_id = client_id),
//          (this.scope = scope),
//          (this.redirect_uri = redirect_uri),
//          (this.state = state);
//    }
// }

export const Providers = {
   LinkedIn: [
      `${process.env.REACT_APP_LI_BASE_URL}`,
      `${process.env.REACT_APP_LI_CLIENT_ID}`,
      // `${process.env.REACT_APP_LI_REDIRECT_URI}`,
      // `${process.env.REACT_APP_LI_STATE}`,
      // `${process.env.REACT_APP_LI_SCOPE}`,
   ].join("&"),

   Facebook: [
      `${process.env.REACT_APP_FB_BASE_URL}`,
      `${process.env.REACT_APP_FB_CLIENT_ID}`,
      `${process.env.REACT_APP_FB_REDIRECT_URI}`,
      `${process.env.REACT_APP_FB_STATE}`,
      `${process.env.REACT_APP_FB_SCOPE}`,
   ].join("&"),

   //    new OAuthProvider(
   //    process.env.REACT_APP_LI_BASE_URL,
   //    process.env.REACT_APP_LI_SECRET,
   //    process.env.REACT_APP_LI_CLIENT_ID,
   //    process.env.REACT_APP_LI_SCOPE,
   //    process.env.REACT_APP_LI_REDIRECT_URI,
   //    process.env.REACT_APP_LI_STATE
   // )
   // ,
   // Facebook: new OAuthProvider(
   //    process.env.REACT_APP_FB_BASE_URL,
   //    process.env.REACT_APP_FB_SECRET,
   //    process.env.REACT_APP_FB_CLIENT_ID,
   //    process.env.REACT_APP_FB_SCOPE,
   //    process.env.REACT_APP_FB_REDIRECT_URI,
   //    process.env.REACT_APP_FB_STATE
   // ),
};
