
import { Component } from 'react';
import {Box , Typography, withStyles} from '@material-ui/core';
import logo from './images/covid.jpg'
import Cards from './components/Cards'
import { fetchData } from './service/api';
import Chart from './components/Chart'
import Countries from './components/Countries'


const style = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'

  },
  xyz:{
padding: '1%'
  },
  header: {
    background: '#F5F5F5',
    width: '100%',
    textAlign: 'center',
    fontSize: 18,
    padding: 10,
    color: "#777"
    

  },

  lastUpdated: {
    color: '#777',
    fontSize: 12
  }
}



class App extends Component {




    state  = {
      data: {},
      country: '',
     
      
    }


  async componentDidMount(){
   const fetchedData = await fetchData();
    this.setState({data: fetchedData})
    console.log(fetchedData);
  }

    handlecountrychange = async(country) => {
    const fetchedData = await fetchData(country);
     this.setState({data: fetchedData, country: country})
     console.log(fetchedData);
   }

  render(){
    const {data} = this.state;
    return(
      <Box className={this.props.classes.container}>
      <Box className={this.props.classes.header}> COVID-19 PANDEMIC</Box>
      {/* <Typography className={this.props.classes.lastUpdated}>Last Updated: {this.state.curTime}</Typography> */}
      <Typography className={this.props.classes.lastUpdated}>Last Updated: {new Date().toDateString()}</Typography>
      <img className={this.props.classes.xyz}style={{width:350}} src={logo} alt="covid-19 " />
      <Cards data= {data}/>
      <Countries handlecountrychange = {this.handlecountrychange}/>
      <Chart data = {data}/>
      </Box>
    )
  }
}

export default withStyles(style)(App);

 // curTime : new Date().toDateString()