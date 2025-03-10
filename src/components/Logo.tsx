import styled from "styled-components";
import { EM, SIZE } from "../types/Unit";

const ImgSize: Record<SIZE, EM> = {
  verysmall: ".1em",
  small: ".1em",
  medium: "2em",
  large: ".1em",
  huge: ".1em",
} as const;

const TextSize: Record<SIZE, EM> = {
  verysmall: ".1em",
  small: ".1em",
  medium: "1.5em",
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
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: 'Maple';
  font-weight: 900;
  color: #444;
  > img {
    height: ${({size}) => ImgSize[size]};
  }

  > h1 {
    font-size: ${({size}) => TextSize[size]};
  }
`;

const Logo = ({
  children = "CREATE",
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
