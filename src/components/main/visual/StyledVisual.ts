import styled from "@emotion/styled";
import { BORDER_GRADIENT, COLOR, CONTENT_SIZE, GRADIENT, INNER } from "../../../styles/Variable";

const StyledVisual = styled.section`
    display: flex;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
    background: radial-gradient(
        circle at 0% 0%, 
        ${COLOR['backDrop01']} 0%, 
        #fff 25%
    );
        /* ${COLOR['background01']} 40% */
    > .container {
        ${INNER}
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap-reverse;
        justify-content: space-between;
        .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 100px;            
            > .texts {
                width: 100%;
                display: flex;
                gap: 30px;
                flex-direction: column;
                justify-content: center;
                div:nth-of-type(1) {
                    span {
                        font-size: 5em;
                        font-weight: 900;
                    }
                }
                div:nth-of-type(2) {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px 0;
                    > p {
                        > span {
                            font-size: 4em;
                            font-weight: 400;
                        }
                    }
                    > :nth-of-type(2) {
                        > span {
                            ${GRADIENT}
                            background-clip: text;
                            -webkit-text-fill-color: transparent;
                        }
                        // color: ${COLOR['main01']};
                    }
                }
                h2 > p, h1 > p {
                    display: flex;
                    flex-wrap: wrap;
                }
                > .container {
                    display: flex;
                    flex-direction: column;
                }
            }
            > .buttons {
                display: flex;
                gap: 30px;
                > a {
                    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, .2);
                    display: inline-block;
                    border-radius: 10px;
                    font-size: ${CONTENT_SIZE['large']};
                    > span {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 1em 2em;
                        font-size: ${CONTENT_SIZE['large']};
                    }
                }
                > a:nth-of-type(1) {
                    ${GRADIENT}
                    color: ${COLOR['white01']};
                }
                > a:nth-of-type(2) {
                    position: relative;
                    /* ${GRADIENT}
                    background-clip: text;
                    -webkit-text-fill-color: transparent; */
                    background-color: #fff;
                    ${BORDER_GRADIENT}
                    border: 2px solid transparent;
                    color: transparent;
                    padding: 0em;
                    > span {
                        ${GRADIENT}
                        background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }

                }
                /* > a:nth-of-type(2)::after {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    content: 'Contact';
                    color: black;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                } */
        }
    }
    > .content {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 100px;
        width: 600px;
        > .back-drop {
            position: absolute;
            background: radial-gradient(
                circle at 50% 55%,
                ${COLOR['backDrop02']} 0%, 
                transparent 65%
            );
            width: 900px;
            height: 900px;
        }
        > ul {
            width: 600px;
            aspect-ratio: 1/1;
            position: relative;
            > li {
                right: 0;
                top: 0;
                position: absolute;
                width: 100%;
                height: 100%;
            }
        }
    }
}

`;

export default StyledVisual;