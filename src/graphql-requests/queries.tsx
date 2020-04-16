import gql from "graphql-tag";
//import { useQuery } from "@apollo/react-hooks";

export const GET_USER = gql`
   {
      user(id: id) {
         id
         username
         email
         first_name
         last_name
      }
   }
`;
