import { Button, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { Box } from "@mui/system";
import useCounter from "../../hooks/useCounter";

export const Counter = ({initial = 0, stock = 20, step = 1}) => {

    const {counter, increment, decrement} = useCounter(initial, step);

    const onDecrement = () => {
        if (counter - step >= initial)
            decrement();
    }
    const onIncrement = () => {
        if (counter + step <= stock)
            increment();
    }


    return(
        <Card sx={{display: 'flex', flexDirection: 'column', width:'300px'}}>
            <CardContent>
                <Typography gutterBottom align="center" variant="subtitle1" >Titulo card</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pl: 1, pb: 1, borderRadius: '10%' }}>
                    <Button onClick={onDecrement}>
                        -
                    </Button>
                    <Typography sx={{flex: 1, textAlign:'center'}}>{counter}</Typography>
                    <Button onClick={onIncrement}>
                        +
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
}

export default Counter;