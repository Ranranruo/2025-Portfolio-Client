import styled from "@emotion/styled";
import { GAP } from "../../styles/Variable";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const StyledUtil = styled.div`
    display: flex;
    gap: ${GAP['small']};
    font-size: 20px;
`;
const Util = () => {
    return (
        <StyledUtil>
            <Link to="/"><Button>Sign In</Button></Link>
            <Link to="/"><Button>Sign Up</Button></Link>
        </StyledUtil>
    );
}
export default Util;