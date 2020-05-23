import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../clientConfig";
//import AddIcon from "@material-ui/icons/Add";
//import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import "./Upload.css";

const Uploader = () => {
   const [upload, setUpload] = useState({ user_avatar: "" });

   const onFileChange = (e: { target: { files: any } }) => {
      setUpload({ user_avatar: e.target.files[0] });
   };

   const onSubmit = (e: { preventDefault: () => void }) => {
      e.preventDefault();
      //formdata is built in which helps sets a key/value in form fields
      const formData = new FormData();
      // the key value is picture, which is the key from multer on the back end
      formData.append("picture", upload.user_avatar);
      // updating the 'project_avatar' with the link from cloudinary
      axios
         .put(`${process.env.REACT_APP_BASE_URL}/upload/:id/`, formData, {})
         .then(res => {
            console.log(res.data);
            console.log(res.data.url);
            let pict = res.data.url;
            console.log(pict);
         })
         .catch(err => {
            console.log(err);
         });
   };

   return (
      <form onSubmit={onSubmit} className="uploadform">
         {/* Input type file to allow the browse option on a computer */}
         <Button type="submit">Click to Upload Images</Button>
         <div>
            <input
               type="file"
               className="uploadinput"
               onChange={onFileChange}
            />
         </div>
      </form>
   );
};

export default Uploader;
