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
               {console.log(data)}
               <div>
                  {data.users.map(user => (
                     <div key={user.id} value={user.username}>
                        {user.id === `${user_id}` ? (
                           <>
                              <div>
                                 <p>username:{user.username}</p>
                                 <p>email:{user.email}</p>
                                 <p>first_name:{user.first_name}</p>
                                 <p>last_name:{user.last_name}</p>
                              </div>
                           </>
                        ) : (
                           console.log("user not found")
                        )}
                     </div>
                  ))}
               </div>
            </>
         );
      }}
   </Query>
);

export default User;
