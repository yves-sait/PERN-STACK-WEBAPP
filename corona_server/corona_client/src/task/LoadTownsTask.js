

import {features} from "../data/ilocos.json";
import legendItems from "../entities/LegendItems";
import {fetchDailyMap} from '../api';




class LoadTownsTask{

    // covidUrl= "https://raw.githubusercontent.com/lakaycoder/corona/main/covid.csv";

    setState = null;
    mapTowns = features;

    

     

    loadTown = async (setState) =>{
        this.setState = setState;
        const town =  await fetchDailyMap();
        this.#processCovidDataTown(town);
       


    }

    
 

    #processCovidDataTown =(covidTowns) =>{
       

        for(let i = 0; i < this.mapTowns.length; i++){
            const mapTown = this.mapTowns[i];
            const covidTown = covidTowns.find(
                (covidTown) => mapTown.properties.MUNICIPALI === covidTown.town_name
                
            );
            mapTown.properties.active =0;
            mapTown.properties.newActive =0;
            mapTown.properties.newRecovery =0;
            mapTown.properties.newDeath =0;
            mapTown.properties.activeText = "";
            mapTown.properties.newActiveText ="";
            mapTown.properties.newRecoveryText ="";
            mapTown.properties.newDeathText ="";

            if(covidTown != null){
                const active = Number(covidTown.active_cases);
                const newActive = Number(covidTown.new_active);
                const newRecovery = Number(covidTown.new_recovery);
                const newDeath = Number(covidTown.new_death);
                mapTown.properties.active = active;
                mapTown.properties.newActive =newActive;
                mapTown.properties.newRecovery =newRecovery;
                mapTown.properties.newDeath =newDeath;
                mapTown.properties.activeText = this.#formatNumberWithCommas(active);
                mapTown.properties.newActiveText = this.#formatNumberWithCommas(newActive);
                mapTown.properties.newRecoveryText = this.#formatNumberWithCommas(newRecovery);
                mapTown.properties.newDeathText = this.#formatNumberWithCommas(newDeath);

            }
            
            this.#setTownColor(mapTown)
            
        }
        this.setState(this.mapTowns)

    };

    #setTownColor =(mapTown) =>{
        const legendItem = legendItems.find((legendItem)=> 
            legendItem.isFor(mapTown.properties.active));

        if(legendItem != null){
            mapTown.properties.color = legendItem.color;
        };

    }
   

    #formatNumberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };

}

export default LoadTownsTask;