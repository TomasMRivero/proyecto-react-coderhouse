import { Button, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { Box } from "@mui/system";
import useCounter from "../../hooks/useCounter";

export const Counter = ({initial = 0, stock = 100}) => {

    const {counter, increment, decrement} = useCounter(initial);

    return(
        <Card sx={{display: 'flex', flexDirection: 'column', width:'300px'}}>
            <CardContent>
                <Typography gutterBottom align="center" variant="subtitle1" >Titulo card</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pl: 1, pb: 1, borderRadius: '10%' }}>
                    <Button>
                        -
                    </Button>
                    <Typography sx={{flex: 1, textAlign:'center'}}>{counter}</Typography>
                    <Button>
                        +
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
}

export default Counter;