import React from "react";
import { string, func } from "prop-types";
import NavBarLink from "./../../../../routes/components/NavBarLink";
import { makeFirstLetterCapital } from "./utils/algoMethods";
import MenuItem from "@mui/material/MenuItem";

const MenuLink = ({ label, navigateTo, onClick, styles }) => {
  return (
    <NavBarLink to={navigateTo} color="black">
      <MenuItem sx={{ ...styles }} onClick={onClick}>
        {makeFirstLetterCapital(label)}
      </MenuItem>
    </NavBarLink>
  );
};

MenuLink.propTypes = {
  navigateTo: string.isRequired,
  onClick: func.isRequired,
  label: string.isRequired,
};

MenuLink.defaultProps = {
  styles: {},
};

export default MenuLink;
