import React, { useState, useEffect } from "react";
import { Query } from "react-apollo";
import { GET_USER } from "../../graphql-requests/queries";
import "../home/Home.css";
import TextField from "@material-ui/core/TextField";
//import { makeStyles } from "@material-ui/core/styles";

const User = props => {
   const [user_id, setUser] = useState("");
   useEffect(() => {
      let user_id = localStorage.getItem("user_id");
      if (user_id) {
         setUser(user_id);
      }
   }, []);

   return (
      <Query query={GET_USER} variables={{ user_id }} displayName="GET_USER">
         {({ error, data, loading }) => {
            if (error) {
               // console.error(error);
               console.error(error.response);
               return console.log(error);
            }

            if (loading) return <p>Loading...</p>;
            return (
               <>
                  <div className="boxedit">
                     <TextField
                        label="username:"
                        defaultValue={data.user.username}
                        variant="filled"
                     />
                     <TextField
                        label="email:"
                        defaultValue={data.user.email}
                        variant="filled"
                     />
                     <TextField
                        label="first name"
                        defaultValue={data.user.first_name}
                        variant="filled"
                     />
                     <TextField
                        label="last name"
                        defaultValue={data.user.last_name}
                        variant="filled"
                     />
                  </div>
               </>
            );
         }}
      </Query>
   );
};

export default User;
