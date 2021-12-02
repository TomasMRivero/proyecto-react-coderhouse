import { Grid } from "@mui/material"
import { Item } from "../Item/Item"

export const ItemList = ( { items = [] } ) => {
    return(
        <div>
            <h2>Productos</h2>
            <hr />
            <Grid
                container
                spacing={3}
                direction={{xs:"column", sm:"row"}}
                justifyContent="flex-staWrt"
                alignItems="center"
                sx={{p:3}}          
            >
            {
                items.map( (el) =>
                    <Grid item xs={12} sm={4} md={3} xl={2} zeroMinWidth>
                        <Item key={el.id} item={el}/>
                    </Grid>
                )
            }W
            </Grid>
        </div>
    )
}