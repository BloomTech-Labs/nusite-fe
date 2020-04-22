import React, { useEffect } from "react";
import { Query } from "react-apollo";
import { GET_USER } from "../../graphql-requests/queries";
import "../home/Home.css";
import TextField from "@material-ui/core/TextField";
//import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles(theme => ({
//    root: {
//       "& > *": {
//          margin: theme.spacing(1),
//          width: "35ch",
//       },
//    },
// }));

const user_id = localStorage.getItem("user_id");

const User = props => {
   useEffect(() => {
      console.log(GET_USER);
   }, []);

   return (
      <Query query={GET_USER} variables={{ user_id }} displayName="GET_USER">
         {({ error, data, loading }) => {
            if (error) {
               // console.error(error);
               console.error(error.response);
               return <p>Something went wrong!</p>;
            }

            if (loading) return <p>Loading...</p>;
            return (
               <>
                  <div className="boxedit">
                     <TextField
                        label="username:"
                        defaultValue={data.user.username}
                        variant="filled"
                     />
                     <TextField
                        label="email:"
                        defaultValue={data.user.email}
                        variant="filled"
                     />
                     <TextField
                        label="first name"
                        defaultValue={data.user.first_name}
                        variant="filled"
                     />
                     <TextField
                        label="last name"
                        defaultValue={data.user.last_name}
                        variant="filled"
                     />
                  </div>
               </>
            );
         }}
      </Query>
   );
};

export default User;
