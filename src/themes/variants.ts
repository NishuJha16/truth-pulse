import {
  Color,
  Components,
  SimplePaletteColorOptions,
  Theme,
} from "@mui/material";
import { CUSTOM_COLORS, palette } from "./palette";

const components: Components<Omit<Theme, "components">> = {
  MuiButton: {
    variants: [
      {
        props: {
          variant: "contained",
        },
        style: {
          textTransform: "none",
          backgroundColor: (palette?.primary as SimplePaletteColorOptions).main,
          borderWidth: "2px",

          "&:hover": {
            backgroundColor: (palette?.primary as SimplePaletteColorOptions)
              .main,
            borderColor: (palette?.primary as SimplePaletteColorOptions).main,
          },
          "&:active": {
            backgroundColor: (palette?.primary as SimplePaletteColorOptions)
              .main,
            borderColor: (palette?.primary as SimplePaletteColorOptions).main,
          },
          "&:focus": {
            backgroundColor: (palette?.primary as SimplePaletteColorOptions)
              .main,
            borderWidth: "2px",
            borderColor: palette.divider,
            outline: `2px solid ${(palette?.primary as Partial<Color>).A100}`,
          },
          "&:disabled": {
            backgroundColor: (palette?.primary as SimplePaletteColorOptions)
              .light,
            color: CUSTOM_COLORS.white,
            opacity: 0.6,
          },
        },
      },
      {
        props: {
          variant: "outlined",
        },
        style: {
          backgroundColor: CUSTOM_COLORS.white,
          borderWidth: "2px",
          textDecoration: "none",
          borderColor: (palette?.primary as SimplePaletteColorOptions).main,
          "&:hover": {
            borderWidth: "2px",
            borderColor: (palette?.primary as SimplePaletteColorOptions).main,
          },
          "&:active": {
            backgroundColor: CUSTOM_COLORS.offWhite,
            borderWidth: "2px",
            borderColor: (palette?.primary as SimplePaletteColorOptions).main,
          },
          "&:focus": {
            backgroundColor: CUSTOM_COLORS.offWhite,
            borderWidth: "2px",
            borderColor: (palette?.primary as SimplePaletteColorOptions).main,
            outline: "none",
          },
          "&:disabled": {
            backgroundColor: CUSTOM_COLORS.offWhite,
            color: palette?.text?.disabled,
            borderWidth: "2px",
            borderColor: palette?.divider,
          },
        },
      },
      {
        props: {
          variant: "text",
        },
        style: {
          textColor: (palette?.primary as Partial<Color>).A100,
          "&:hover": {
            backgroundColor: CUSTOM_COLORS.offWhite,
          },
          "&:active": {
            backgroundColor: CUSTOM_COLORS.offWhite,
          },
          "&:focus": {
            backgroundColor: CUSTOM_COLORS.offWhite,
            outline: `2px solid ${(palette?.primary as Partial<Color>).A100}`,
          },
          "&:disabled": {
            color: (palette?.primary as Partial<Color>).A100,
            opacity: 0.75,
          },
        },
      },
    ],
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        "&.Mui-disabled": {
          color: palette?.text?.primary,
          backgroundColor: CUSTOM_COLORS.geyser,
        },
        "&.MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline":
          {
            border: "none",
          },
      },
    },
  },
  MuiTypography: {
    styleOverrides: {
      root: {
        fontFamily: "Montserrat",
      },
    },
  },
};
export default components;
