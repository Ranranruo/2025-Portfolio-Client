import { EM, SIZE } from "../types/Unit";


// color
export const titleSize: Record<COLOR, EM> = {
    verysmall: ".75em",
    small: ".88em",
    medium: "1em",
    large: "1.13em",
    huge: "1.5em"
} as const;

// fontSize
export const titleSize: Record<SIZE, EM> = {
    verysmall: ".75em",
    small: ".88em",
    medium: "1em",
    large: "1.13em",
    huge: "1.5em"
} as const;

export const contentSize: Record<SIZE, EM> = {
    verysmall: ".75em",
    small: ".88em",
    medium: "1em",
    large: "1.13em",
    huge: "1.5em"
} as const;