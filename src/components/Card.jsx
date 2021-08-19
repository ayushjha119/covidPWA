import { CardContent, Typography,Box,Card,makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import CountUp from 'react-countup';


const useStyle = makeStyles({
    header:{
        background: '#F5F5F5',
        padding: 10
    }
})

const Cardcomponent = ({cardTitle , value , desc}) => {
const classes = useStyle();
   

    return (
        <Grid component={Card} style= {{margin: 20,borderBottom: '10px solid yellow'}}>

                <Box className = {classes.header}>
                    <Typography varient="h5" color="textSecondary">{cardTitle}</Typography>
                </Box>

            <CardContent>
                <Typography varitent="h5">
                <CountUp start={0} end={value} duration={2} separator="," />
                </Typography>
                <Typography color= "textSecondary">
                    {desc}
                </Typography>
                <Typography>{new Date().toDateString()}</Typography>
                
                
            </CardContent>
        </Grid>
    )
}

export default Cardcomponent;