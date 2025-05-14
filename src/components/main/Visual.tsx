import styled from "@emotion/styled";
import { COLOR } from "../../styles/Variable";

const StyledVisual = styled.section`
    height: 100vh;
    background: radial-gradient(
        circle at 0% 0%, 
        ${()=>COLOR['backDrop01']} 0%, 
        ${()=>COLOR['background01']} 60%
    );
`;

const Visual = () => {
    return (
        <StyledVisual>
            
        </StyledVisual>
    );
}

export default Visual;