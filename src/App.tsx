import { CssBaseline, ThemeProvider } from "@mui/material";
import Layout from "./layout/layout";
import theme from "./themes/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
