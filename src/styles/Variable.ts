import { EM, HEX, PX, SIZE } from "../types/Unit";

// inner
export const INNER = "1400px";
export const INNER_PADDING = "10px";

// color
export const COLOR = {
    main01: "#39E079",
    main02: "#34D170",
    white01: "#fff",
    white02: "#F9FAFB",
    black01: "#35495E"
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