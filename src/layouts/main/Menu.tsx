import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const StyledMenu = styled.ul`
    display: flex;
    a {
        /* color: #fff; */
        /* text-shadow: 0 4px 4px rgba(0, 0, 0, .25); */
    }
`;

const Menu = () => {
    return (
        <StyledMenu>
            <li><Link to="#">About Me</Link></li>
            <li><Link to="#">Service</Link></li>
            <li><Link to="#">Project</Link></li>
            <li><Link to="#">Skills</Link></li>
        </StyledMenu>      
    );
}

export default Menu;