
import {Bar} from 'react-chartjs-2';
import { Box,makeStyles} from '@material-ui/core';


const useStyle = makeStyles({
    container: {
        width: '93%',
        marginTop: 20
    }
})


const Chart = ({data: {cases, deaths, recovered,active,critical,todayCases}}) => {
    const classes = useStyle();
    return(
            <Box className = {classes.container}>
            {
        cases ? (

        <Bar 

                    data= {{
                            labels: ['Infected', 'Recovered','Deaths','Active','Critical', "Today's-cases"],
                            datasets: [{
                                label: 'Peoples',
                                data: [cases,recovered,deaths,active,critical,todayCases],
                                backgroundColor: [
                                    'rgba(0, 0, 255, 0.5)',
                                    'rgba(0, 255, 0, 0.5)',
                                    'rgba(255, 0, 0, 0.5)',
                                    'rgba(255, 255, 0, 0.5)',
                                    'rgba(255, 0, 255, 0.5)',
                                    'rgba(0, 255, 255, 0.5)',

                                   
                                ],
                            
                            }]
                    }}
                        options={ {
                          legend: {display: false},
                          title: {display: true, text: 'Current condition in country'}
                        }}


        /> ) : ''
        }
        </Box>

        
    )
}

export default Chart;