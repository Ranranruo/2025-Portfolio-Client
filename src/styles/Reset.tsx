import { createGlobalStyle } from "styled-components";

const Reset = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    color: inherit;
  }
`;

export default Reset;