import styled from "@emotion/styled";
import { GAP } from "../../styles/Variable";

const StyledUtil = styled.div`
    display: flex;
    gap: ${GAP['small']};
    font-size: 20px;
`;
const Util = () => {
    return (
        <StyledUtil>
            <button id="sign-in-button">Sign In</button>
            <button id="sign-up-button">Sign Up</button>
        </StyledUtil>
    );
}
export default Util;