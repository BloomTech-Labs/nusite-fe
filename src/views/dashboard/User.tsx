import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { Query, QueryResult } from "react-apollo";
import { GET_USER } from "../../graphql-requests/queries";
import { getUserId } from "../util/useLocalStorage";
import "../../App.css";
//import { Redirect } from "react-router-dom";

const User: React.FC = (props: any) => {
   const [user_id, setUser]: [
      number,
      Dispatch<SetStateAction<number>>
   ] = useState(0);

   useEffect(() => {
      const user_id = getUserId();
      if (user_id) {
         setUser(user_id);
      }
   }, []);

   return (
      <>
         <Query query={GET_USER} variables={{ user_id }}>
            {({ error, data, loading }: QueryResult) => {
               if (error)
                  return (
                     <p>
                        Error:{" "}
                        {error.message ||
                           "There was a problem Querying the database"}
                     </p>
                  );

               if (loading) return <p>Loading...</p>;
               console.log(error);
               const userdata = { data };
               console.log(userdata);
               // localStorage.setItem("username", data.user.username);
               // localStorage.setItem("first_name", data.user.first_name);
               // localStorage.setItem("last_name", data.user.last_name);
               // localStorage.setItem("email", data.user.email);
               return (
                  <>
                     <div className="boxedit">
                        <h2>Your Profile</h2>
                        <br />
                        <label>username: </label>
                        <p>{data.user.username}</p>
                        <label>email: </label>
                        <p>{data.user.email}</p>
                        <label>first name: </label>
                        <p>{data.user.first_name}</p>
                        <label>last name: </label>
                        <p>{data.user.last_name}</p>
                        <label>company: </label>
                        <p>{data.user.company}</p>
                        <label>years experience: </label>
                        <p>{data.user.dev_experience}</p>
                        <label>years education: </label>
                        <p>{data.user.dev_education}</p>
                     </div>
                  </>
               );
            }}
         </Query>
      </>
   );
};

export default User;
