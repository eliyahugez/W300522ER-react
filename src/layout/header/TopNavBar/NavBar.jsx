import { AppBar, Toolbar } from "@mui/material";
import { LeftNavigation } from "./LeftNavigation";
import RightNavBar from "./right-navigation/RightNavBar";

export const NavBar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <LeftNavigation />
        <RightNavBar />
      </Toolbar>
    </AppBar>
  );
};
