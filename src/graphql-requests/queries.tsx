import gql from "graphql-tag";

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
