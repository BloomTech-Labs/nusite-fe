import React, { useState, useEffect } from "react";
import { Query, QueryResult } from "react-apollo";
import { GET_USER } from "../../graphql-requests/queries";
import { Redirect } from "react-router-dom";
import "../../App.css";
//import { makeStyles } from "@material-ui/core/styles";

//let user_id = localStorage.getItem("user_id");

const User: React.FC = (props: any) => {
   const [user_id, setUser] = useState("");

   useEffect(() => {
      let user_id = localStorage.getItem("user_id");
      if (user_id) {
         setUser(user_id);
      }
   }, []);

   return (
      <>
         <Query query={GET_USER} variables={{ user_id }}>
            {({ error, data, loading }: QueryResult) => {
               if (error) {
                  console.log(error);
                  return <Redirect to="/homeprof" />;
               }

               if (loading) return <p>Loading...</p>;

               return (
                  <>
                     <p>Your Profile</p>
                     <div className="boxedit">
                        <label>username: </label>
                        <p>{data.user.username}</p>
                        <label>email: </label>
                        <p>{data.user.email}</p>
                        <label>first name: </label>
                        <p>{data.user.first_name}</p>
                        <label>last name: </label>
                        <p>{data.user.last_name}</p>
                     </div>
                  </>
               );
            }}
         </Query>
      </>
   );
};

export default User;
