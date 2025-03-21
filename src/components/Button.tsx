import styled from "@emotion/styled";
import { COLOR, CONTENT_SIZE, TITLE_SIZE } from "../styles/Variable";
import { ACHROMATIC, SIZE } from "../types/Unit";

const FONT_SIZE = {
    verysmall: CONTENT_SIZE['verysmall'],
    small: CONTENT_SIZE['medium'],
    medium: TITLE_SIZE['verysmall'],
    large: TITLE_SIZE['medium'],
    huge: TITLE_SIZE['huge']
}

const DEFAULT_COLOR = {
    primary: {
        color: COLOR['achromatic08'],
        backgroundColor: COLOR['main01']
    },
    black: {
        color: COLOR['achromatic09'],
        backgroundColor: COLOR['achromatic01']
    },
    white: {
        color: COLOR['achromatic01'],
        backgroundColor: COLOR['achromatic09']
    }
}

interface StyledButton {
    size: SIZE;
}

interface PrimaryButton {
    children: string;
    color: 'primary' | 'black' | 'white';
    size: SIZE;
    type: 'default';
}

interface BorderButton {
    children: string;
    color: ACHROMATIC;
    size: SIZE;
    type: 'border';
}

type ButtonProps = PrimaryButton | BorderButton;

const StyledButton = styled.button<StyledButton>`
    font-family: 'Cookie';
    padding: .5em 1em;
    cursor: pointer;
    border-radius: 5px;
    font-size: ${({size}) => FONT_SIZE[size]};
`;

const Button = ({
    children = "default",
    color,
    size = "small",
    type = "default"
}: ButtonProps) => {
    return (
        <StyledButton className={type} color={color} size={size}>
            {children}
        </StyledButton>
    );
}

export default Button;
