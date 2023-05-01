import { Box, IconButton } from "@mui/material";
import { useTheme } from "../../../../providers/ThemeProvider";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const RightNavBar = () => {

    const { isDark, toggleDarkMode } = useTheme();

    return (
        <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>

            <IconButton sx={{ marginLeft: 1 }} onClick={toggleDarkMode}>
                {isDark ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
        </Box>
    )
};

export default RightNavBar;