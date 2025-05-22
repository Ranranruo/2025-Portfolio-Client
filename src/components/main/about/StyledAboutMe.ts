import styled from "@emotion/styled";
import { INNER, TITLE_SIZE } from "../../../styles/Variable";

const StyledAboutMe = styled.section`

    > .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        ${INNER()}
        > .image {
            height: 900px;
            display: flex;
            align-items: center;
            justify-content: center;
            > img {
                height: 90%;
            }
        }
        > .container {
            > .texts {
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                > .title {
                    font-size: 4em;
                }
            }
        }
    }
`;
export default StyledAboutMe;