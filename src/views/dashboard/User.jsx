import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
//import { useQuery } from "react-apollo";
//import { USER_QUERY } from "../../graphql-requests/queries";

const user_id = localStorage.getItem("user_id");
console.log(user_id);

const GET_USERS = gql`
   {
      users {
         id
         username
         email
         first_name
         last_name
      }
   }
`;

const User = props => (
   <Query query={GET_USERS}>
      {({ loading, data }) => {
         if (loading) return <p>Loading...</p>;
         return (
            <>
               {console.log(data.username)}
               <div>
                  {data.users.map(user => (
                     <div key={user.id} value={user.username}>
                        {user.username}
                     </div>
                  ))}
               </div>
            </>
         );
      }}
   </Query>
);

export default User;
