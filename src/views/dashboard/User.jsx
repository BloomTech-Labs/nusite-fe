import React from "react";
import { Query } from "react-apollo";
import { GET_USERS } from "../../graphql-requests/queries";
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

const User = props => (
   <Query query={GET_USERS}>
      {({ loading, data }) => {
         if (loading) return <p>Loading...</p>;
         return (
            <>
               <div className="edit">
                  {data.users.map(user => (
                     <div key={user.id} value={user.username}>
                        {user.id === `${user_id}` ? (
                           <>
                              <div className="boxedit">
                                 <TextField
                                    label="username:"
                                    defaultValue={user.username}
                                    variant="filled"
                                 />
                                 <TextField
                                    label="email:"
                                    defaultValue={user.email}
                                    variant="filled"
                                 />
                                 <TextField
                                    label="first name"
                                    defaultValue={user.first_name}
                                    variant="filled"
                                 />
                                 <TextField
                                    label="last name"
                                    defaultValue={user.last_name}
                                    variant="filled"
                                 />
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
