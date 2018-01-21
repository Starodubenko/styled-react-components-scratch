import { defaultColorLighter, defaultColor, primaryColorLighter, primaryColor, successColor, warningColor, errorColor, successColorLighter, warningColorLighter, errorColorLighter } from "./designStack";

const commonButtonColors = {
    default: {
        light: defaultColor,
        dark: 'white',
    },
    primary: {
        light: primaryColor,
        dark: '#cccccc',
    },
    success: {
        light: successColor,
        dark: '#cccccc',
    },
    warning: {
        light: warningColor,
        dark: '#cccccc',
    },
    error: {
        light: errorColor,
        dark: '#cccccc',
    },
}

export const button = {
    backgroundColor: {
        default: {
            light: defaultColorLighter,
            dark: '#cccccc',
        },
        primary: {
            light: primaryColorLighter,
            dark: '#cccccc',
        },
        success: {
            light: successColorLighter,
            dark: '#cccccc',
        },
        warning: {
            light: warningColorLighter,
            dark: '#cccccc',
        },
        error: {
            light: errorColorLighter,
            dark: '#cccccc',
        },
    },
    borderColor: commonButtonColors,
    textColor: {
        light: 'white',
        dark: 'black',
    },
};