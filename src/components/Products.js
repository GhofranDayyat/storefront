import {active , increment, decrement } from '../store/action'
import { connect } from 'react-redux'
import React from 'react'
import {AppBar,Card,Container ,Link,makeStyles,Grid,Box,Button} from '@material-ui/core/';
function Product (props){
    console.log(props.productProps,'+++++++++++++++',props);
    if(props.productProps){
        return(
            <> 
        <Container style={{ background: 'whitesmoke' }} >
            <Grid  container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {props.productProps.map((e,idx)=>{
            // console.log(props,'from product');
                return(
                <>
                <Card key={idx} style={{ margin: '3%' }}>
                <Grid  Spacing={4}  item xs={6} >
                    <img src={e.image} alt={e.name} width='400px'></img>
                    <h1>{e.name}</h1>
                                <Grid
                                container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                                Spacing={12}
                                >
                                <Button 
                                onClick={()=>{props.increment(e)
                                    // console.log(props.increment(),e.inStock,'after product')
                                }}
                                    >
                                ADD TO CARD
                                </Button>
                                <p variant="h6">
                                DETAILS</p>
                                </Grid>
                                <p>In Stock {e.inStock}</p>
                </Grid>
                </Card> 
            </>
            )
            })}
            </Grid>
            </Container >            
        </>
    )}else{
        return(
            <>
        <h1>Choose Category</h1>
        </>
        )
    }
}
// 1- add the state to this component props
const mapStateToProps=state=>({
    product:state.products, /// state.reducer name in combineReducer
    // active:state.categories.active
    productProps:state.products.productSelected
})
// 2- since I have some actions to use: 
// add the actions to the component props
const mapDispatch={active , increment}
//3. connect your component and export it after its connected to redux store
export default connect(mapStateToProps , mapDispatch)(Product)// export default Product;