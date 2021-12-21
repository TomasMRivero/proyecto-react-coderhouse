import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const Counter = ({ increment, decrement, counter, min = 0, max = 100, children }) => {
    return(
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pl: 1, pb: 1, borderRadius: '10%' }}>
                <Button
                    onClick={decrement}
                    disabled={counter === min}
                >
                    -
                </Button>
                <Typography sx={{flex: 1, textAlign:'center'}}>{counter}</Typography>
                <Button
                    onClick={increment}
                    disabled={counter === max}
                >
                    +
                </Button>
            </Box>
            {children}
        </>
    );
}

export default Counter;