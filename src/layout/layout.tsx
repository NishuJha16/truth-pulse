import React, { useState } from "react";
import { useTheme, Theme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import SidebarComponent from "../components/side-bar/side-bar";
import { Outlet } from "react-router-dom";
import "./layout.scss";
import { Box } from "@mui/material";
import NewspaperIcon from "@mui/icons-material/Newspaper";

import CurrentWeather from "../components/current-weather/current-weather";
import SearchBar from "../components/search-bar/search-bar";

const Root = styled("div")(({ theme }: { theme: Theme }) => ({
  display: "flex",
}));

const StyledAppBar = styled(AppBar)(({ theme }: { theme: Theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "white",
  color: theme.palette.primary.main,
  textTransform: "uppercase",
  boxShadow: "none",
}));

const MenuButton = styled(IconButton)(({ theme }: { theme: Theme }) => ({
  marginRight: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const Content = styled("main")(({ theme }: { theme: Theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  overflowY: "scroll",
}));

const Layout: React.FC = () => {
  const theme = useTheme<Theme>();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const [open, setOpen] = React.useState(false);
  const [queryParam, setQueryParam] = useState<string>("");

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setOpen(!open);
  };

  const updateQueryParam = (event: any, value: string) => {
    event?.preventDefault();
    setQueryParam(value);
  };

  return (
    <Root>
      <CssBaseline />
      <StyledAppBar>
        <Toolbar>
          <MenuButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </MenuButton>
          <Box
            sx={{
              flex: 1,
              textAlign: "left",
              fontFamily: "Anton",
              display: "flex",
              gap: 2,
            }}
          >
            <NewspaperIcon fontSize="large" />
            <Typography
              variant="h4"
              fontWeight={600}
              noWrap
              sx={{
                textAlign: "left",
                fontFamily: "Anton",
                display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
              }}
              className="app-logo"
            >
              Truth Pulse
            </Typography>
            <Box display={"flex"} flex={1} justifyContent={"center"}>
              <SearchBar updateQueryParam={updateQueryParam} />
            </Box>
          </Box>

          <Box gap={2} sx={{ display: "flex" }}>
            <CurrentWeather />
          </Box>
        </Toolbar>
      </StyledAppBar>
      <Box
        display={"flex"}
        marginTop={"64px"}
        height={"calc(100vh - 64px)"}
        overflow={"hidden"}
        flex={1}
      >
        <SidebarComponent open={open} onClose={toggleDrawer} isMdUp={isMdUp} />
        <Content>
          <Outlet context={{ queryParam, updateQueryParam }} />
        </Content>
      </Box>
    </Root>
  );
};

export default Layout;
