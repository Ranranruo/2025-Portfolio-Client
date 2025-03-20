import { EM, SIZE } from "../types/Unit";


// color
export const COLOR = {
    main01: "#39E079",
    main02: "#34D170"
} as const;

export const GAP = {
    verysmall: "5px",
    small: "10px",
    medium: "20px",
    large: "30px",
    huge: "40px"
} as const;

// fontSize
export const TITLESIZE: Record<SIZE, EM> = {
    verysmall: "1.25em",
    small: "1.50em",
    medium: "1.875em",
    large: "2.25em",
    huge: "2.625em"
} as const;

export const CONTENTSIZE: Record<SIZE, EM> = {
    verysmall: ".75em",
    small: ".88em",
    medium: "1em",
    large: "1.13em",
    huge: "1.5em"
} as const;