import { AppBar, Container, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import { SetArray } from "./hooks/SetArray";
import NavItem from "../routes/NavItem";

const SandBox = () => {
  return (
    <>
    
      <AppBar position="static" color="transparent">
        <Toolbar>
          <NavItem label="props" color="black" to="props"></NavItem>
          <NavItem label="todo" color="black" to="todo"></NavItem>
          <NavItem label="life cycle hooks" color="black" to="life-cycle"></NavItem>
          <NavItem label="custom counter hook" color="black" to="custom-counter-hook"></NavItem>
        </Toolbar>
      </AppBar>

      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default SandBox;
