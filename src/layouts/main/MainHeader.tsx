import Logo from "../../components/Logo";
import Menu from "./Menu";
import { GAP, INNER, INNERPADDING } from "../../styles/Variable";
import styled from "@emotion/styled";
import Util from "./Util";

const StyledHeader = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    padding: 1em 0;
    .inner {
        width: 100%;
        display: flex;
        justify-content: space-between;
        max-width: ${INNER};
        padding: 0 ${INNERPADDING};
        > .left {

        }
        > .right {
            display: flex;
            gap: ${GAP['medium']};
        }
    }
`;

const MainHeader = () => {
    return (
        <StyledHeader>
            <div className="inner">
                <div className="left">
                    <Logo />
                </div>
                <div className="right">
                    <Menu />
                    <Util />
                </div>
            </div>
        </StyledHeader>
    );
};

export default MainHeader;