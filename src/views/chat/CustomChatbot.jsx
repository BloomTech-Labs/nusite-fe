import React, { Component } from "react";
import PropTypes from "prop-types";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import "../dashboard/Dashboard.css";

const theme = {
   //    background: '#25274d"',
   fontFamily: "Roboto",
   //    headerBgColor: "#25274d",
   //    headerFontColor: "#fff",
   //    headerFontSize: "15px",
   //    botBubbleColor: '#25274d"',
   //    botFontColor: "#fff",
   //    userBubbleColor: "#fff",
   //    userFontColor: "#4a4a4a",
   height: "190px",
   display: "flex",
   justifyContent: "center",
   alignItems: "center",
};

class Review extends Component {
   constructor(props) {
      super(props);

      this.state = {
         name: "",
         role: "",
         experience: "",
      };
   }

   componentWillMount() {
      const { steps } = this.props;
      const { name, role, experience } = steps;

      this.setState({ name, role, experience });
   }

   render() {
      const { name, role, experience } = this.state;
      return (
         <>
            <div style={{ width: "50%" }}>
               <h3>Summary</h3>
               <table>
                  <tbody>
                     <tr>
                        <td>Name</td>
                        <td>{name.value}</td>
                     </tr>
                     <tr>
                        <td>Role</td>
                        <td>{role}</td>
                     </tr>
                     <tr>
                        <td>Years Experience</td>
                        <td>{experience.value}</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </>
      );
   }
}

Review.propTypes = {
   steps: PropTypes.object,
};

Review.defaultProps = {
   steps: undefined,
};

const steps = [
   {
      id: "1",
      message:
         "Hi, in order to asist you better, what do you want to name your request (briefly)?",
      trigger: "name",
   },
   {
      id: "name",
      user: true,
      trigger: "3",
   },
   {
      id: "3",
      message:
         "For request {previousValue}, What is your role, project owner or developer?",
      trigger: "gender",
   },
   {
      id: "gender",
      options: [
         {
            value: "developer",
            label: "developer",
            trigger: "5",
         },
         { value: "client", label: "client", trigger: "5" },
      ],
   },
   {
      id: "5",
      message: "How many years of web dev experience do you have?",
      trigger: "experience",
   },
   {
      id: "experience",
      user: true,
      trigger: "7",
      validator: value => {
         if (isNaN(value)) {
            return "value must be a number";
         } else if (value < 0) {
            return "value must be positive";
         } else if (value > 120) {
            return `${value}? Come on!`;
         }

         return true;
      },
   },
   {
      id: "7",
      message: "Great! Check out your summary",
      trigger: "review",
   },
   {
      id: "review",
      component: <Review />,
      asMessage: true,
      trigger: "update",
   },
   {
      id: "update",
      message: "Would you like to update some field?",
      trigger: "update-question",
   },
   {
      id: "update-question",
      options: [
         { value: "yes", label: "Yes", trigger: "update-yes" },
         { value: "no", label: "No", trigger: "end-message" },
      ],
   },
   {
      id: "update-yes",
      message: "What field would you like to update?",
      trigger: "update-fields",
   },
   {
      id: "update-fields",
      options: [
         {
            value: "name",
            label: "Name",
            trigger: "update-name",
         },
         {
            value: "role",
            label: "role",
            trigger: "update-role",
         },
         {
            value: "experience",
            label: "experience",
            trigger: "update-experience",
         },
      ],
   },
   {
      id: "update-name",
      update: "name",
      trigger: "7",
   },
   {
      id: "update-role",
      update: "role",
      trigger: "7",
   },
   {
      id: "update-experience",
      update: "experience",
      trigger: "7",
   },
   {
      id: "end-message",
      message: "Thanks! Your data was submitted successfully!",
      end: true,
   },
];

const CustomChatbot = props => (
   <ThemeProvider theme={theme}>
      <ChatBot steps={steps} />
   </ThemeProvider>
);
export default CustomChatbot;
