import styled from "@emotion/styled";
import { COLOR, CONTENT_SIZE, TITLE_SIZE } from "../styles/Variable";
import { ACHROMATIC, EM, HEX, PX, SIZE } from "../types/Unit";

const FONT_SIZE = {
  verysmall: CONTENT_SIZE["verysmall"],
  small: CONTENT_SIZE["medium"],
  medium: TITLE_SIZE["verysmall"],
  large: TITLE_SIZE["medium"],
  huge: TITLE_SIZE["huge"],
};

const PRIMARY_COLOR: Record<
  PrimaryColor,
  Record<"color" | "backgroundColor", HEX>
> = {
  primary: {
    color: COLOR["achromatic09"],
    backgroundColor: COLOR["main01"],
  },
  black: {
    color: COLOR["achromatic09"],
    backgroundColor: COLOR["achromatic01"],
  },
  white: {
    color: COLOR["achromatic01"],
    backgroundColor: COLOR["achromatic09"],
  },
} as const;

interface ButtonProps {
  children: string;
  size?: SIZE;
  detailSize?: EM | PX;
}

type PrimaryColor = "primary" | "black" | "white";

interface PrimaryButtonProps extends ButtonProps {
  color?: "primary" | "black" | "white";
}

interface BorderButtonProps extends ButtonProps{
  color?: ACHROMATIC;
}

// interface BorderButton {
//     children: string;
//     color: ACHROMATIC;
//     size: SIZE;
// }
type StyledButtonProps = (PrimaryButtonProps & { className: "primary" }) | (BorderButtonProps & { className: "border" });

const StyledButton = styled.button<StyledButtonProps>`
  padding: 0.5em 1em;
  cursor: pointer;
  font-weight: 400;
  border-radius: 5px;
  font-size: ${({ size, detailSize }) => detailSize ? detailSize : FONT_SIZE[size!]};
  ${({ className, color }) => {
    if (className == "primary") {
      const { color: textColor, backgroundColor } = PRIMARY_COLOR[color!];
      return `
            color: ${textColor};
            background-color: ${backgroundColor};
            `;
    } else if (className == "border") {
      const textColor = COLOR[color!];
      return `
            color: ${textColor};
            border: 1px solid ${textColor};
            `;
    }
  }}
`;

const PrimaryButton = ({
  children = "default",
  color = "primary",
  size = "medium",
  detailSize
}: PrimaryButtonProps) => {
  return (
    <StyledButton className="primary" detailSize={detailSize} color={color} size={size}>
      {children}
    </StyledButton>
  );
};

const BorderButton = ({
  children = "default",
  color = "achromatic06",
  size = "medium",
  detailSize
}: BorderButtonProps) => {
  return (
    <StyledButton className="border" detailSize={detailSize} color={color} size={size}>
      {children}
    </StyledButton>
  );
};

const Button = {
  primary: PrimaryButton,
  border: BorderButton,
};

export default Button;
