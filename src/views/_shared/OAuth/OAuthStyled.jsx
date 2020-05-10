import styled from "styled-components";
import { LinkedIn, Google } from "../OAuth/OAuthProviders";

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
   background-image: url(${LinkedIn.getDefault()});

   &:hover {
      background-image: url(${LinkedIn.getHover()});
   }
   &:active {
      background-image: url(${LinkedIn.getActive()});
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
