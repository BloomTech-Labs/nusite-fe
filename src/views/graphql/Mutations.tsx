import { gql } from "apollo-boost";

export const SIGNUP = gql`
   mutation(
      $username: String!
      $first_name: String!
      $last_name: String!
      $email: String!
      $password: String!
   ) {
      signup(
         username: $username
         first_name: $first_name
         last_name: $last_name
         email: $email
         password: $password
      ) {
         token
         user {
            username
            email
         }
      }
   }
`;

export const LOGIN = gql`
   mutation login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
         token
         user {
            email
         }
      }
   }
`;
