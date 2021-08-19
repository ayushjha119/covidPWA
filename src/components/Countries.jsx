import { fetchCountries } from "../service/api"
import { useState, useEffect} from "react";
import { Typography } from "@material-ui/core";

import { NativeSelect } from "@material-ui/core";




const Countries = ({handlecountrychange}) => {
   
    const [countries , setCountries] = useState([]);

    useEffect(() => {
        const fetchApi = async() =>{
           setCountries(await fetchCountries());
        }
        fetchApi();
       
    },[])

    return(
        <>
        <Typography style={{marginBottom: 20}} varient = "h5" color="textSecondary" >Reported Cases or Deaths by countries</Typography>
        <NativeSelect onChange= {(e) => handlecountrychange(e.target.value)}>
            <option value= "">Global Cases</option>
            {countries.map((country,i) => {
                return(
                <option key ={i} value = {country}>{country}</option>
                )
            })}
        </NativeSelect>
        
        </>
    )

}

export default Countries;