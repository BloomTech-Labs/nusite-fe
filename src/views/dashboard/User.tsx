import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { Query, QueryResult } from "react-apollo";
import { GET_USER } from "../../graphql-requests/queries";
import { getUserId } from "../util/useLocalStorage";
//import { Redirect } from "react-router-dom";
import "../../App.css";
//import { makeStyles } from "@material-ui/core/styles";

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
               // if (error) {
               //    console.error(error);
               //    //return <Redirect to="/homeprof" />;
               // }

               if (error)
                  return (
                     <p>
                        Error:{" "}
                        {error.message ||
                           "There was a problem Querying the database"}
                     </p>
                  );
               if (loading) return <p>Loading...</p>;

               console.log(data);
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
