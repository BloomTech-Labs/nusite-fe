import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { Query, QueryResult } from "react-apollo";
import { GET_USER } from "../../graphql-requests/queries";
import { getUserId } from "../util/useLocalStorage";
//import { Redirect } from "react-router-dom";
import "../../App.css";
//import TextField from "@material-ui/core/TextField";
//import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles(theme => ({
//    container: {
//       display: "flex",
//       flexFlow: "column",
//       flexWrap: "wrap",
//       width: "100%",
//       justifyContent: "center",
//       alignItems: "center",
//       fontSize: "1.2rem",
//       padding: "2rem",
//    },
//    textField: {
//       marginLeft: theme.spacing(1),
//       marginRight: theme.spacing(1),
//       width: 250,
//       alignItems: "left",
//       textAlign: "center",
//    },
//    button: {
//       margin: theme.spacing(1),
//    },
// }));

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

   const [name, setName] = useState("");

   useEffect(() => {
      let username = localStorage.getItem("username");
      if (username) {
         setName(username);
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
               if (loading) return <p>Loading...</p>;

               if (error)
                  return (
                     <p>
                        Error:{" "}
                        {error.message ||
                           "There was a problem Querying the database"}
                     </p>
                  );

               console.log(data);
               //const userdata = { data };
               return (
                  <>
                     <h2>Your Profile</h2>
                     <div className="boxedit">
                        <label>username: </label>
                        <p>{data.user.username}</p>
                        <label>email: </label>
                        <p>{data.user.email}</p>
                        <label>first name: </label>
                        <p>{data.user.first_name}</p>
                        <label>last name: </label>
                        <p>{data.user.last_name}</p>
                        <label>company: </label>
                        <p>{data.user.company}</p>
                        <label>years experience: </label>
                        <p>{data.user.dev_experience}</p>
                        <label>years education: </label>
                        <p>{data.user.dev_education}</p>
                     </div>
                  </>
               );
            }}
         </Query>
      </>
   );
};

export default User;
