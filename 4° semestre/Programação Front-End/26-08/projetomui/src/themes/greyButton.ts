import { PaletteColorOptions, createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    myColor: PaletteColorOptions;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    myColor: true;
  }
}

const theme = createTheme({
  palette: {
    myColor: {
      main: "#6d006d",
      contrastText: "#fafafa",

    }
  }
});

export default theme;