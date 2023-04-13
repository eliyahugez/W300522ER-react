import { AppBar, Container, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavItem from "../../routes/NavItem";

const Memoization = () => {
    return (
        <>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <NavItem
                        label="useCallback"
                        to="use-callback"
                        sx={{ color: "black" }}
                    >

                    </NavItem>
                </Toolbar>
            </AppBar>
            <Container>
                <Outlet />
            </Container>
        </>
    );
}

export default Memoization;