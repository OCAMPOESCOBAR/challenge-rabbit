import { createTheme } from "@mui/material";
import { green, grey } from "@mui/material/colors";

export const innerTheme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: grey[100],
      dark: grey[400],
    },
  },
});
