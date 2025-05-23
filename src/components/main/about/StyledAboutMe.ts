import styled from "@emotion/styled";
import { GRADIENT_TEXT, INNER, TITLE_SIZE } from "../../../styles/Variable";

const StyledAboutMe = styled.section`

    > .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 5em;
        ${INNER}
        > .image {
            height: 800px;
            display: flex;
            align-items: center;
            justify-content: center;
            > img {
                height: 100%;
            }
        }
        > .container {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            > .texts {
                display: flex;
                flex-direction: column;
                gap: 2em;
                > .title {
                    font-size: 3.5em;
                    ${GRADIENT_TEXT}
                }
                > .text {
                    word-break: keep-all;
                    > p {
                        word-wrap: break-word;
                        line-height: 1.5;
                        font-size: 2em;
                        > b {
                            font-size: 1em;
                        }
                    }
                }
            }
        }
    }
`;
export default StyledAboutMe;