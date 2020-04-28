import { gql } from "apollo-boost";

export const SIGNUP = gql`
   mutation signup(
      $username: String!
      $password: String!
      $first_name: String!
      $last_name: String!
      $email: String!
   ) {
      signup(
         username: $username
         password: $password
         first_name: $first_name
         last_name: $last_name
         email: $email
      ) {
         token
         user {
            id
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
            id
            username
         }
      }
   }
`;

//setting up a mutation for the API when ready to store projects
export const PROJECT = gql`
   mutation project(
      $project_name: String!
      $project_developer: User
      $project_description: String!
      $completed: Boolean!
   ) {
      project(
         project_name: $project_name
         project_developer: $user
         project_description: $project_description
         completed: $completed
      ) {
         project_name
      }
   }
`;

export const INITIATE_RESET = gql`
   mutation initiateReset($email: String!) {
      initiateReset(email: $email) {
         token
         message
      }
   }
`;

export const FINALIZE_RESET = gql`
   mutation resetPassword($email: String!, $password: String!) {
      resetPassword(email: $email, password: $password)
   }
`;
