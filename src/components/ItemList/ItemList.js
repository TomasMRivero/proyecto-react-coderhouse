import { Grid } from "@mui/material"
import { Item } from "../Item/Item"

export const ItemList = ( { items = [] } ) => {
    return(
        <div>
            <h2>Productos</h2>
            <hr />
            <Grid container spacing={1}>
            {
                items.map( (el) =>
                    <Grid item xs={3}>
                        <Item key={el.id} item={el}/>
                    </Grid>
                )
            }
            </Grid>
        </div>
        
    )
}