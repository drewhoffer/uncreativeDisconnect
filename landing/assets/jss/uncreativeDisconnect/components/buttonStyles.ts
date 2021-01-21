import {
    defaultFont,
    primaryColor,
    secondaryColor,
    tertiaryColor,
    blackColor,
    whiteColor
} from "../../uncreativeDisconnect.js";

import { lighten, darken } from "@material-ui/core";

const buttonStyles = {
    button: {
        color: whiteColor
    },
    black: {
        backgroundColor: blackColor,
    },
    primary: {
        backgroundColor: primaryColor,
        "&:hover": {
            backgroundColor: darken(primaryColor, 0.1),
            // Reset on touch devices, it doesn't add specificity
            "@media (hover: none)": {
                backgroundColor: primaryColor
            }
        }
    },
    round: {
        borderRadius: "2rem"
    }
};

export default buttonStyles;