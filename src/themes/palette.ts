import { PaletteOptions } from "@mui/material";

const CUSTOM_COLORS = {
  white: "#FFFFFF",
  offWhite: "##F2F2F2",
  grey: "#999797",
  errorSubtle: "#EBA993",
  warningSubtle: "#F6C8A0",
  successSubtle: "#65CC65",
  progressSubtle: "#86BAD6",
  geyser: "#CFDEE2",
} as const;

const palette: PaletteOptions = {
  mode: "light",
  primary: {
    main: "#f44336",
    light: "#0D6B9E",
    dark: "#024050",
    A100: "#9AC7E0",
    A200: "#E7F7FF",
  },
  error: {
    main: "#cc3300",
    light: "#E08162",
    dark: "#A32900",
  },
  warning: {
    main: "#e87511",
    light: "#F1AC70",
    dark: "#BA5E0E",
  },
  success: {
    main: "#008000",
    light: "#44B344",
    dark: "#006000",
  },
  info: {
    main: "#0d6b9e",
    light: "#5EA0C4",
    dark: "#0A567E",
  },
  text: {
    primary: "#312F2F",
    secondary: "#525252",
    disabled: "#312F2F",
  },
  background: {
    default: "rgba(244, 67, 54, 0.1)",
    paper: "rgba(244, 67, 54, 0.1)",
  },

  divider: "#c4c4c4",
};

export { CUSTOM_COLORS, palette };
