import styled from "styled-components";
// import L_Default from "../../../images/OAuth-Images/Linkedin-Default.png";
// import L_Hover from "../../../images/OAuth-Images/Linkedin-Hover.png";
// import L_Active from "../../../images/OAuth-Images/Linkedin-Active.png";
import path from "path";

// class Provider {
//    constructor(...images) {
//       this.default = images[0];
//       this.hover = images[1];
//       this.active = images[2];
//    }
//    getDefault() {
//       return this.default;
//    }
//    getHover() {
//       return this.hover;
//    }
//    getActive() {
//       return this.active;
//    }
// }

// const LinkedIn = new Provider(L_Default, L_Hover, L_Active);

console.log("observe path module: ", path.dirname("/src/images/OAuth-Images/"));

// const base = path.dirname("src/images/../images/OAuth-Images/");

const background = (provider, state) => {
   console.log("background source: ", provider, ": ", state);
   return `url("../../../images/OAuth-Images/${provider}-${state}.png")`;
};

export const OAuthContainer = styled.div`
   width: 20rem;
   display: flex;
   flex-direction: column;
   margin: 0 auto;
   margin-bottom: 1rem;
   padding: 0.5rem;
   justify-content: center;
   align-items: center;
`;

export const OAuthTag = styled.a`
   background-image: ${props => background(props.provider, "Default")};
   &:hover {
      background-image: ${props => background(props.provider, "Hover")};
   }
   &:active {
      background-image: ${props => background(props.provider, "Active")};
   }

   display: flex;
   width: 12.5rem;
   height: 2.5rem;
   color: white;
   margin: 0.5rem;
   padding: 1rem;
   padding-top: 1.25rem;
   padding-right: 0.55rem;
   border-radius: 0.2rem;
   text-decoration: none;
   font-size: 1rem;
   justify-content: flex-end;
   align-items: center;
   background-repeat: no-repeat;
   background-size: auto;
   cursor: pointer;
`;

// export const OAuthTag = styled.a`
//    ${props =>
//       props.provider &&
//       css`
//       background-image: url("../../../images/OAuth-Images/${props.provider}-Default.png");
//          :hover {
//             background-image: url("../../../images/OAuth-Images/${props.provider}-Hover.png");
//          }
//          :active {
//             background-image: url("../../../images/OAuth-Images/${props.provider}-Active.png");
//          }
//       `}}
// `;
