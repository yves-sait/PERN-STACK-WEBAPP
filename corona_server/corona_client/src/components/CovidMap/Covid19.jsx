import React, { useEffect, useState } from "react";

import Loading from './Loading';
import Legend from './Legend';
import Cmap from './Cmap';
import LoadTownsTask from '../../task/LoadTownsTask';
import 'leaflet/dist/leaflet.css';
import "./Maps.css";
import legendItems from "../../entities/LegendItems";

const Covid19 =({mainData,town}) => {


    
    const main = mainData[0];
    const selectedTown = town;

 const [towns, setTowns] = useState([]); // init value of countries . empty array
 const legendItemsInReverse = [...legendItems].reverse();

 const load = () => {
     
     const loadTownsTask = new LoadTownsTask();
     
     loadTownsTask.loadTown((towns) => setTowns(towns));
    
 };




 useEffect(load,[]); 


    return(

    <div className='cmaps'>
       

    { towns.length === 0 ? (<Loading/> ):
                        (  <div >
                                <Cmap towns={towns} main={main} selectedTown={selectedTown}/>
                                <Legend className="legend" legendItems={legendItemsInReverse} />
                             
                            </div>
                         ) }


    </div>

);


}

export default Covid19;