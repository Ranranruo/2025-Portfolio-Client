import { Link } from "react-router-dom";
import { styled } from "styled-components";

const StyledMenu = styled.ul`
    display: flex;
    a {
        /* color: #fff; */
        text-shadow: 0 4px 4px rgba(0, 0, 0, .25);
    }
`;

const Menu = () => {
    return (
        <StyledMenu>
            <li><Link to="#">홈</Link></li>
            <li><Link to="#">팀소개</Link></li>
            <li><Link to="#">팀원소개</Link></li>
            <li><Link to="#">프로젝트</Link></li>
        </StyledMenu>      
    );
}

export default Menu;