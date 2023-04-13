import { Box, Paper, Typography } from "@mui/material";
import { useState } from "react";
import ButtonComp from "./ButtonComp";

const UseCallback = () => {
    const [age, setAge] = useState(1);
    const [height, setHeight] = useState(0);

    const incrementAge = () => setAge(age + 1);
    const incrementHeight = () => setHeight(height + 1);

    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Paper sx={{ width: 350, mt: 2, p:2 }}>
                <Box>
                    <Typography align="center" >Age: {age}</Typography>
                    <Typography align="center" >Height: {height}</Typography>

                    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                        <ButtonComp onClick={incrementAge}>Age</ButtonComp>
                        <ButtonComp onClick={incrementHeight}>Height</ButtonComp>
                    </Box>
                </Box>

            </Paper>
        </Box>
    );
};

export default UseCallback;