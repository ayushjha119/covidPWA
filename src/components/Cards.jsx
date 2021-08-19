import { Box, Typography,CircularProgress, Grid  } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Card from "./Card";


const useStyles = makeStyles({
    container:{
        color: '#8ACA2B',
        marginBottom: 30,
        marginTop:10
    },
    component: {
        margin: '50px 0',
        flexDirection: 'column',
        alignItems: 'center',
        display: 'flex'
    }
})

const Cards = ({data: {cases, deaths, recovered,active,critical,todayCases}}) => {
    const classes = useStyles();
    
    if(!cases){
        return <CircularProgress />
    }
    return (
        <Box className= {classes.component}>
        <Typography className= {classes.container} variant="h5" gutterBottom >Coronavirus Cases Globally</Typography>
        <Grid container spacing={3} justify="center">
            <Card
            cardTitle="Infected"
            value={cases}
            desc = "Number of Infected cases of covid in selected place"
            

            />
            <Card
             cardTitle="Recovered"
             value= {recovered}
             desc = "Number of Recovered cases of covid  in selected place"
           

             />
            <Card 
                cardTitle="Deaths"
                value={deaths}
                desc = "Number of Death due to covid in selected place"
            

            />
             <Card 
                cardTitle="Active-cases"
                value={active}
                desc = "Number of active cases of covid in selected place"
            

            />
              <Card 
                cardTitle="Critical-cases"
                value={critical}
                desc = "Number of critical cases of covid in selected place"
            

            />
             <Card 
                cardTitle="Today's-cases"
                value={todayCases}
                desc = "Today the number of cases of covid in selected place"
            

            />
        
            
            
        </Grid>
        
        </Box>
    )

}

export default Cards;