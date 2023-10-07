import { createTheme } from "@mui/material";

export const palette = {
  primary: {
    main: "#F6F6F6",
    dark: "#CCCCCC",
    darker: "#8D9E8D",
  },
  secondary: {
    main: "#0252CD",
  },
  common: {
    white: "#ffffff"
  },
  custom: {
    subtitle: "#151E2C"
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: "Montserrat",
  },
  palette: palette,
  components: {
    MuiTypography: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...ownerState.variant === "h1" && {
            [theme.breakpoints.up("xs")]: {
              fontSize: "60px"
            },
            [theme.breakpoints.up("xl")]: {
              fontSize: "70px"
            }
          },
          ...ownerState.variant === "h2" && {
            [theme.breakpoints.up("xs")]: {
              fontSize: "32px"
            },
            [theme.breakpoints.up("md")]: {
              fontSize: "40px"
            },
            [theme.breakpoints.up("xl")]: {
              fontSize: "50px"
            }
          },
          ...ownerState.variant === "h3" && {
            [theme.breakpoints.up("xs")]: {
              fontSize: "24px"
            },
            [theme.breakpoints.up("md")]: {
              fontSize: "32px"
            },
            [theme.breakpoints.up("xl")]: {
              fontSize: "40px"
            }
          },
          ...ownerState.variant === "h4" && {
            [theme.breakpoints.up("xs")]: {
              fontSize: "24px",
              fontWeight: 700,
              color: theme.palette.custom.subtitle
            },
            [theme.breakpoints.up("xl")]: {
              fontSize: "32px",
              fontWeight: 700,
              color: theme.palette.custom.subtitle
            }
          },
          ...ownerState.variant === "h5" && {
            [theme.breakpoints.up("xs")]: {
              fontSize: "12px",
              fontWeight: 600,
              color: "#9D9D9D"
            },
            [theme.breakpoints.up("xl")]: {
              fontSize: "16px",
              fontWeight: 600,
              color: "#9D9D9D"
            }
          }
        })
      }
    }
  }
});
