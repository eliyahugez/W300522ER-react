import { Box } from "@mui/system";
import NavItem from "../../../routes/NavItem";
import ROUTES from "../../../routes/routesModel";
import Logo from "./Logo/Logo";

export const LeftNavigation = () => {
  return (
    <Box>
      <Logo />
      <Box sx={{display: {xs: "none", md: "inline-flex"}}}>
        <NavItem label="About" to={ROUTES.ABOUT} />
        <NavItem label="My Cards" to={ROUTES.MY_CARDS} />
        <NavItem label="Fav Cards" to={ROUTES.FAV_CARDS} />
      </Box>
    </Box>
  );
};
