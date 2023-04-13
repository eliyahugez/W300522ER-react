import { Button } from "@mui/material";
import { string } from "prop-types";
import { func } from "prop-types";

const ButtonComp = ({handleClick, children}) => {
  console.log('Rendering button - ', children);
  return (
    <Button variant="outlined" onClick={handleClick} color="primary">
        {children}
    </Button>
  );
}

ButtonComp.propTypes = {
    handleClick: func.isRequired,
    children: string.isRequired,
}

export default ButtonComp;