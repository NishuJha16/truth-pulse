import { createTheme } from "@mui/material";
import { palette } from "./palette";
import components from "./variants";

const theme = createTheme({
  palette,
  components,
});
export default theme;
