import styled from "@emotion/styled";
import { COLOR, INNER } from "../../styles/Variable";
import { motion, optimizedAppearDataAttribute } from "motion/react";
import { useEffect, useState } from "react";
import { filter } from "framer-motion/client";

const step1 = `
    z-index: 1;
    opacity: 0;
    scale: .3;
    top: -300px;
    right: -500px;
    filter: blur(10px);
`;
const step2 = `
    z-index: 1;
    opacity: .3;
    scale: .5;
    top: -200px;
    right: -350px;
    filter: blur(10px);
`;

const step3 = `
    z-index: 2;
    opacity: 1;
    top: 0;
    right: 0;
    filter: blur(0px);
    scale: 1;
`

const step4=`
    z-index: 1;
    opacity: 0;
    top: 100px;
    scale: 1;
    right: 200px;
`

const StyledVisual = styled.section`
    height: 100vh;
    overflow: hidden;
    background: radial-gradient(
        circle at 0% 0%, 
        ${()=>COLOR['backDrop01']} 0%, 
        ${()=>COLOR['background01']} 40%
    );
    > div {
        ${()=>INNER()}
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-content: center;
        > .text {
            
        }
        > .content {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 150px;
            > .back-drop {
                position: absolute;
                background: radial-gradient(
                    circle at 50% 55%,
                    ${()=>COLOR['backDrop02']} 0%, 
                    ${()=>COLOR['background01']} 65%
                );
                width: 800px;
                height: 800px;
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
                    background-size: cover;
                    background-position: center;
                }
                > li:nth-of-type(1) {
                    animation: slide1 30s infinite;
                    background: url('images/main/database.png');
                    background-size: cover;
                    background-position: center;
                }
                > li:nth-of-type(2) {
                    animation: slide2 30s infinite;
                    background: url('images/main/server.png');
                    background-size: cover;
                    background-position: center;
                }
                > li:nth-of-type(3) {
                    background: url('images/main/frontend.png');
                    background-size: cover;
                    background-position: center;
                    animation: slide3 30s infinite .9s;
                    z-index: 1;
                    opacity: 0;
                    scale: .3;
                    top: -300px;
                    right: -500px;
                    filter: blur(10px);    
                }
            }
        }
    }

    @keyframes slide1 {
        0% { 
            ${()=>step1}
        }
        3% {
            ${()=>step2}
        }
        33% {
            ${()=>step2}
        }
        36% {
            ${()=>step3}
        }
        66% {
            ${()=>step3}
        }
        69% {
            ${()=>step4}
        }
        100% {
            ${()=>step4}      
        }
    }
     @keyframes slide2 {
        0% {
            z-index: 1;
            opacity: .3;
            scale: .5;
            top: -200px;
            right: -350px;
            filter: blur(10px);
        }
        3% {
            z-index: 2;
            opacity: 1;
            top: 0;
            right: 0;
            filter: blur(0px);
            scale: 1;
        }
        33% {
            z-index: 2;
            opacity: 1;
            top: 0;
            right: 0;
            filter: blur(0px);
            scale: 1;
        }
        36% {
            z-index: 1;
            opacity: 0;
            top: 100px;
            right: 200px;
            scale: 1;
        }
        66% {
            z-index: 1;
            opacity: 0;
            scale: .3;
            top: -300px;
            right: -500px;
            filter: blur(10px);           
        }
        69% { 
            z-index: 1;
            opacity: .3;
            scale: .5;
            top: -200px;
            right: -350px;
            filter: blur(10px);
        }
        100% { 
            z-index: 1;
            opacity: .3;
            scale: .5;
            top: -200px;
            right: -350px;
            filter: blur(10px);
        }
    }

    @keyframes slide3 {
        0% {
            z-index: 1;
            opacity: 0;
            scale: .3;
            top: -300px;
            right: -500px;
            filter: blur(10px);    
        }
        30% {
            z-index: 1;
            opacity: 0;
            scale: .3;
            top: -300px;
            right: -500px;
            filter: blur(10px);
        }
        33% {
            z-index: 1;
            opacity: .3;
            scale: .5;
            top: -200px;
            right: -350px;
            filter: blur(10px);
        }
        63% {
            z-index: 1;
            opacity: .3;
            scale: .5;
            top: -200px;
            right: -350px;
            filter: blur(10px);
        }
        66% {
            z-index: 2;
            opacity: 1;
            top: 0;
            right: 0;
            filter: blur(0px);
            scale: 1;
        }
        96% {
            z-index: 2;
            opacity: 1;
            top: 0;
            right: 0;
            filter: blur(0px);
            scale: 1;
        }
        100% {
            z-index: 1;
            opacity: 0;
            top: 100px;
            right: 200px; 
            scale: 1;
        }
    }
`;


const Visual = () => {

    return (
        <StyledVisual>
            <div>
                <div className="text">
                </div>
                <div className="content">
                    <div className="back-drop"></div>
                    <ul>
                        <motion.li />
                        <motion.li />
                        <motion.li />
                    </ul>
                </div>
            </div>
        </StyledVisual>
    );
}

export default Visual;