import { palette } from "../../styles";

export const CardStyle = {
  backgroundColor: palette.primary.main,
  "&:hover": {
    backgroundColor: palette.secondary.main,
    boxShadow: "32px 32px 71px rgba(2, 82, 205, 0.28)",
    ".box-card-icon": {
      backgroundColor: palette.primary.main,
    },
    ".python-logo": {
      color: `${palette.secondary.main} !important`,
    },
    ".service-card-title": {
      color: `${palette.common.white} !important`,
    },
    ".service-card-text": {
      color: `#ffffff66 !important`,
    },
  },
}