import styled from "styled-components";

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
   background-image: ${props =>
      `url("../../../images/OAuth-Images/${props.provider}-Default.png")`};
   &:hover {
      background-image: ${props =>
         `url("../../../images/OAuth-Images/${props.provider}-Hover.png")`};
   }
   &:active {
      background-image: ${props =>
         `url("../../../images/OAuth-Images/${props.provider}-Active.png")`};
   }
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
