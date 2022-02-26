import React,{useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';

import {fetchTowns} from '../../api';


const CountryPicker = ({handleTownChange}) =>{

    const [fetchedTowns, setFetchedTowns] = useState([]);


    useEffect(()=>{
        const fetchApi = async () =>{
            setFetchedTowns( await fetchTowns());
        }

        fetchApi();


    },[setFetchedTowns]);

    
    return(

        <FormControl className={styles.formControl}>
            <NativeSelect className={styles.nativeSelect} defaultValue="" onChange={(e) => handleTownChange(e.target.value)}>
                <option value="">Ilocos Norte</option>
               {
                fetchedTowns.map((towns,i) => (<option key={i} value={towns.town_name}>{towns.town_name}</option>))
                // fetchedCountries.map((country,i) => <option key={i} value={country}>{country}</option>)
                }
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;