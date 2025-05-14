
import { EM, Percent, PX, SIZE } from "../types/Unit";
import { COLOR, GAP, TITLE_SIZE } from "../styles/Variable";
import styled from "@emotion/styled";

interface BackDropProps {
    top?: PX | Percent;
    bottom?: PX | Percent;
    left?: PX | Percent;
    right?: PX | Percent;
}

interface StyledBackDropProps {
}

const StyledBackDrop = styled.div<StyledBackDropProps>`
    position: absolute;

`;

const BackDrop = ({

}: BackDropProps) => {
  return (
    <StyledBackDrop />
  );
};

export default BackDrop;
