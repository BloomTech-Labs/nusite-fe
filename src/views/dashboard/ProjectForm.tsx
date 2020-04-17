import React from "react";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import { PROJECT } from "../../graphql-requests/mutations";
import { useMutation } from "@apollo/react-hooks";
//import {TextField}from "@material-ui/core/";

type FormData = {
   project_name: String;
   project_developer: String;
   project_description: String;
   completed: Boolean;
};

export const Project = (props: any) => {
   const { register, handleSubmit } = useForm<FormData>();
   const [project] = useMutation(PROJECT);
   const onSubmit = ({
      project_name,
      project_developer,
      project_description,
      completed,
   }: FormData) => {
      project({
         variables: {
            project_name: project_name,
            project_developer: project_developer,
            project_description: project_description,
            completed: completed,
         },
      })
         .then(res => {
            console.log(res.data);
            localStorage.setItem("project_name", res.data.project.project_name);
         })
         .then(data => {
            props.history.push("/home");
            console.log("Registered Project");
         })
         .catch(err => err.message);
   };

   return (
      <>
         <div className="box">
            <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
               <label>Project Name</label>
               <input
                  ref={register({ required: true })}
                  type="text"
                  name="project_name"
                  placeholder="project_name"
               />

               <label>Project</label>
               <input
                  ref={register({ required: true })}
                  type="text"
                  name="project_owner"
                  placeholder="project_owner"
               />

               <label>Project Owner</label>
               <input
                  ref={register({ required: true })}
                  type="text"
                  name="project_owner"
                  placeholder="project_owner"
               />

               <label>Project Description</label>
               <input
                  ref={register({ required: true })}
                  type="textfield"
                  name="project_description"
                  placeholder="project_description"
               />

               <label>Completed?</label>
               <input
                  ref={register({ required: true })}
                  //type={false}
                  name="completed"
                  placeholder="false"
               />

               <Button variant="contained" color="primary" type="submit">
                  Submit
               </Button>

               <br />
            </form>
            <br />
            <br />
         </div>
      </>
   );
};
