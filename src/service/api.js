import axios from 'axios';


const url = "https://coronavirus-19-api.herokuapp.com";

const countryurl = "https://covid19.mathdro.id/api";

export const fetchData = async(country) => {
  let changedUrl = url;
  if(country){
    changedUrl= `${url}/countries/${country}`;
  }else{
    country= "World"
    changedUrl= `${url}/countries/${country}`;
  }
    try{
        const { data: { cases, recovered,  deaths,active,critical,todayCases } } =  await axios.get(changedUrl);
        return { cases, recovered, deaths, active,critical,todayCases};
     }catch(error){
         return error; 
     }
}


export const fetchCountries = async() =>{
    try{
      const {data: {countries}} = await axios.get(`${countryurl}/countries`);
        return countries.map(country => country.name);
      }catch(error){
        return error;
    }
}

//https://covid19.mathdro.id/api