import styled from "styled-components";
import Logo from "../../components/Logo";
import Menu from "./Menu";
import { INNER, INNERPADDING } from "../../styles/Variable";

const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    .inner {
        width: 100%;
        display: flex;
        max-width: ${INNER};
        padding: 0 ${INNERPADDING};
    }
`;

const MainHeader = () => {
    return (
        <StyledHeader>
            <div className="inner">
                <Logo />
                <Menu />
            </div>
        </StyledHeader>
    );
};

export default MainHeader;