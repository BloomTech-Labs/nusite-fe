import { gql } from "apollo-boost";
import { Query } from "react-apollo";

export const USER_QUERY = gql`
   query UserQuery {
      user(id: id) {
         username
         email
         first_name
         last_name
      }
   }
`;
