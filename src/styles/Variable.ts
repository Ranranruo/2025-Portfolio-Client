import { EM, HEX, PX, SIZE } from "../types/Unit";

// inner
export const INNER_PX = "1440px";
export const INNER_PADDING = "30px";

export const INNER = () => `
    max-width: ${INNER_PX};
    padding: 0 ${INNER_PADDING};
    margin: 0 auto;
`

// color
export const COLOR = {
    main01: "#F29430",
    main02: "#FEC164",
    white01: "#fff",         // 가장 밝음
    white02: "#F9FAFB",
    white03: "#F4F4F6",
    background01: "#ECECEE",      // 가장 어두운 white 계열
    gray01: "#C1C0BA",       // gray 계열
    black01: "#150F0B",
    backDrop01: "#ffe5d9",
    backDrop02: "#ffd1b8"

} as const;


export const GAP: Record<SIZE, PX> = {
    verysmall: "5px",
    small: "10px",
    medium: "20px",
    large: "30px",
    huge: "40px"
} as const;

// fontSize
/**
 * @property verysmall -> .75em  -> 12px
 * @property small     -> .88em  -> 14px
 * @property medium    -> 1em    -> 16px
 * @property large     -> 1.13em -> 18px
 * @property huge      -> 1.5em  -> 24px
 */
export const CONTENT_SIZE: Record<SIZE, EM> = {
    verysmall: ".75em",
    small: ".88em",
    medium: "1em",
    large: "1.13em",
    huge: "1.5em"
} as const;

/**
 * @property verysmall -> 1.25em  -> 20px
 * @property small     -> 1.50em  -> 24px
 * @property medium    -> 1.875em -> 30px
 * @property large     ->  2.25em -> 36px
 * @property huge      -> 2.625em -> 42px
 */
export const TITLE_SIZE: Record<SIZE, EM> = {
    verysmall: "1.25em",
    small: "1.50em",
    medium: "1.875em",
    large: "2.25em",
    huge: "2.625em"
} as const;