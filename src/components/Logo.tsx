
import { EM, SIZE } from "../types/Unit";
import { COLOR, GAP, TITLE_SIZE } from "../styles/Variable";
import styled from "@emotion/styled";

const IMG_SIZE: Record<SIZE, EM> = {
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
  color: ${COLOR['black01']};
  gap: ${GAP['small']};
  > img { height: ${({size}) => IMG_SIZE[size]}; }
  > h1 { font-size: ${({size}) => TITLE_SIZE[size]}; }
`;

const Logo = ({
  children = "Portfolio",
  size = "medium"
}: LogoProps) => {
  return (
    <StyledLogo size={size}>
      {/* <img src="images/logo.svg" /> */}
      <h1>{children}</h1>
    </StyledLogo>
  );
};

export default Logo;
