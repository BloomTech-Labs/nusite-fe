import { gql } from "apollo-boost";

export const GET_USER = gql`
   query user($user_id: ID!) {
      user(id: $user_id) {
         id
         username
         email
         first_name
         last_name
         company
         dev_experience
         dev_education
      }
   }
`;

export const GET_USERS = gql`
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
