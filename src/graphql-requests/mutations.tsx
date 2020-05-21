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

export const UPDATE_USER = gql`
   mutation updateUser(
      $user_id: ID!
      $username: String
      $email: String
      $first_name: String
      $last_name: String
      $company: String
      $dev_experience: String
      $dev_education: String
   ) {
      updateUser(
         id: $user_id
         username: $username
         email: $email
         first_name: $first_name
         last_name: $last_name
         company: $company
         dev_experience: $dev_experience
         dev_education: $dev_education
      ) {
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

export const DELETE_USER = gql`
   mutation updateUser($user_id: ID!) {
      updateUser(id: $user_id) {
         id
      }
   }
`;

//setting up a mutation for the application when ready to store projects
export const ADD_PROJECT = gql`
   mutation addProject($project_name: String, $project_owner: Int) {
      project
   }
`;

export const PROJECT = gql`
   mutation project(
      $project_id: ID!
      $project_name: String!
      $project_developer: String!
      $project_description: String!
      $completed: Boolean!
      $marketplace: Boolean!
      $showcase: Boolean!
   ) {
      project(
         id: $project_id
         project_name: $project_name
         project_developer: $user
         project_description: $project_description
         completed: $completed
         marketplace: $marketplace
         showcase: $showcase
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
