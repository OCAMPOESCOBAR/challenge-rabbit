import { CssBaseline, ThemeProvider } from "@mui/material";
import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Nationality } from "./pages/Nationality";
import { Users } from "./pages/Users";
import { innerTheme } from "./themes/inner-theme";

export default (): ReactElement => {
  return (
    <ThemeProvider theme={innerTheme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/users" element={<Users />}/>
        <Route path="/users/nationality" element={<Nationality />}/>
      </Routes>
    </ThemeProvider>
  );
}
