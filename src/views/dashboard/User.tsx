import React, { useState, useEffect } from "react";
import { Query, QueryResult } from "react-apollo";
import { GET_USER } from "../../graphql-requests/queries";
import "../home/Home.css";
import TextField from "@material-ui/core/TextField";
//import { makeStyles } from "@material-ui/core/styles";
let user_id = localStorage.getItem("user_id");

const User: React.FC = (props: any) => {
   const [usersid, setUser] = useState("");
   useEffect(() => {
      if (user_id) {
         setUser(usersid);
      }
   }, [usersid]);

   return (
      <Query query={GET_USER} variables={{ user_id }} displayName="GET_USER">
         {({ error, data, loading }: QueryResult) => {
            if (error) {
               console.log(error);
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
