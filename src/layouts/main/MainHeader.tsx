import Logo from "../../components/Logo";
import Menu from "./Menu";
import { GAP, INNER, INNER_PADDING } from "../../styles/Variable";
import styled from "@emotion/styled";
import Util from "./Util";
import { RefObject, useEffect, useRef } from "react";
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
        padding: 0 ${INNER_PADDING};
        > .left {

        }
        > .right {
            display: flex;
            align-items: center;
            gap: ${GAP['huge']};
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