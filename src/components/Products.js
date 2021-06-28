import {active , increment} from '../store/Products-Reducer'
import { connect } from 'react-redux'
import React from 'react'
import {
    AppBar,
    Card,
    Container ,
    Link,
    makeStyles,
    Grid,
    Box,
  } from '@material-ui/core/';
import { CheckBox } from '@material-ui/icons';
  const useStyles = makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
  }));

function Product (props){
    const classes = useStyles();

    // console.log(props.product,'from product');
    if(props.test){
    return(
        <> 
        <Container style={{ background: 'whitesmoke' }} 
        className={classes.cardGrid} maxWidth="md">
            <Grid  container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {props.test.map((e,idx)=>{

                return(
                <>
                <Card style={{ margin: '3%' }} className={classes.card}>
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
                                <p >
                                ADD TO CARD
                                
                                </p>
                                <p variant="h6">
                                DETAILS</p>
                                </Grid>
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
    test:state.products.productSelected
})


// 2- since I have some actions to use: 
// add the actions to the component props
const mapDispatch={active , increment}

//3. connect your component and export it after its connected to redux store
export default connect(mapStateToProps , mapDispatch)(Product)// export default Product;


