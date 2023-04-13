<<<<<<< HEAD:src/sandbox/Sandbox.jsx
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
          <NavItem label="memoization" color="black" to="memoization"></NavItem>
        </Toolbar>
      </AppBar>

      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default SandBox;
=======
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
>>>>>>> 3b10f5219bfc6b75fa1582241b862c3622213e2f:src/sandbox/SandBox.jsx
