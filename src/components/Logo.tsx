import styled from "styled-components";
import { EM, SIZE } from "../types/Unit";
import { COLOR, GAP, TITLESIZE } from "../styles/Variable";

const IMGSIZE: Record<SIZE, EM> = {
  verysmall: ".1em",
  small: ".1em",
  medium: "2em",
  large: ".1em",
  huge: ".1em",
} as const;

interface LogoProps {
  children?: string;
  size?: SIZE;
}

interface StyledLogoProps {
  size: SIZE;
}

const StyledLogo = styled.div<StyledLogoProps>`
  display: flex;
  font-family: 'Maple';
  font-weight: 900;
  color: ${COLOR['main01']};
  gap: ${GAP['small']};
  > img { height: ${({size}) => IMGSIZE[size]}; }
  > h1 { font-size: ${({size}) => TITLESIZE[size]}; }
`;

const Logo = ({
  children = "Portfolio",
  size = "medium"
}: LogoProps) => {
  return (
    <StyledLogo size={size}>
      <img src="images/logo.svg" />
      <h1>{children}</h1>
    </StyledLogo>
  );
};

export default Logo;
