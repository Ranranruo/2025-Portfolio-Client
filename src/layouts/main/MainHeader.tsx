import styled from "styled-components";
import Logo from "../../components/Logo";
import Menu from "./Menu";

const StyledHeader = styled.header`
`;

const MainHeader = () => {
    return (
        <StyledHeader>
            <Logo />
            <Menu />
        </StyledHeader>
    );
};

export default MainHeader;