import styled from "styled-components";
import Logo from "../../components/Logo";

const StyledHeader = styled.header`
`;

const MainHeader = () => {
    return (
        <StyledHeader>
            <Logo />
        </StyledHeader>
    );
};

export default MainHeader;