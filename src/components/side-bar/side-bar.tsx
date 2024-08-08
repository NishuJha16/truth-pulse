import React from "react";
import { Link, useLocation } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import BusinessIcon from "@mui/icons-material/Business";
import SchoolIcon from "@mui/icons-material/School";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import ComputerIcon from "@mui/icons-material/Computer";
import MovieIcon from "@mui/icons-material/Movie";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import PeopleIcon from "@mui/icons-material/People";
import { Box, ListItemButton, Typography } from "@mui/material";
import { ReactComponent as ThoughtOfTheDay } from "../../assets/images/thought.svg";
import { thoughts } from "../../constants/data";

const drawerWidth = 240;

const links = [
  { text: "World", path: "/", icon: <LocalLibraryIcon /> },
  { text: "India", path: "/india", icon: <FlagCircleIcon /> },
  { text: "Business", path: "/business", icon: <BusinessIcon /> },
  { text: "Politics", path: "/politics", icon: <PeopleIcon /> },
  { text: "Education", path: "/education", icon: <SchoolIcon /> },
  { text: "Sports", path: "/sports", icon: <SportsSoccerIcon /> },
  { text: "Technology", path: "/technology", icon: <ComputerIcon /> },
  { text: "Entertainment", path: "/entertainment", icon: <MovieIcon /> },
  { text: "Health", path: "/health", icon: <HealthAndSafetyIcon /> },
];

interface SidebarComponentProps {
  open: boolean;
  onClose: (event: React.KeyboardEvent | React.MouseEvent) => void;
  isMdUp: boolean;
}

const SidebarComponent: React.FC<SidebarComponentProps> = ({
  open,
  onClose,
  isMdUp,
}) => {
  const location = useLocation();
  const randomIndex = Math.floor(Math.random() * thoughts.length);
  const randomThought = thoughts[randomIndex];
  return (
    <Drawer
      variant={isMdUp ? "permanent" : "temporary"}
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        flexShrink: 0,
        width: drawerWidth,
        marginLeft: 3,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          top: "54px",
          paddingTop: 2,
          border: "none",
          background: "white",
          paddingLeft: 2,
        },
      }}
    >
      <List sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {links.map((link) => (
          <ListItemButton
            component={Link}
            to={link.path}
            key={link.text}
            selected={location.pathname === link.path}
            sx={{
              marginRight: 2,
              borderRadius: 2,
              padding: "4px 8px",
              "&.Mui-selected": {
                backgroundColor: "rgba(0, 0, 0, 0.08)",
                color: "primary.main",
                fontWeight: 500,
              },
              "&.Mui-selected svg": {
                color: "primary.main",
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: "24px",
                svg: { fontSize: 16 },
              }}
            >
              {link.icon}
            </ListItemIcon>
            <ListItemText
              primary={link.text}
              sx={{
                span: {
                  fontSize: 14,
                },
              }}
            />
          </ListItemButton>
        ))}
      </List>
      <Box position={"relative"} width={"fit-content"} height={"fit-content"}>
        <ThoughtOfTheDay />
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={1}
          position={"absolute"}
          top={130}
          left={8}
          right={8}
        >
          <Typography
            variant="caption"
            textAlign={"center"}
            fontWeight={600}
            color="primary.main"
            fontSize={10}
          >
            Thoughts Time
          </Typography>
          <Typography variant="caption" textAlign={"center"}>
            {randomThought}
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
};

export default SidebarComponent;
