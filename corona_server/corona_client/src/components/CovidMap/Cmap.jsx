import React  from 'react';
import {MapContainer, GeoJSON, Popup} from 'react-leaflet';
import widthSize from '../../task/Windowsize'
import 'leaflet/dist/leaflet.css';
import townCoor from '../../data/town.json'


const CMap = ({towns, main,selectedTown}) => {

    const townCoords = () =>{
        var coor = [];
        for(let i =0 ; i < townCoor.coordinates.length; i++){
            const townCoord = townCoor.coordinates[i]
            if(townCoord.Town === selectedTown.toUpperCase()){
                 coor = townCoord.Coord;
                break;
            }         
        }
        return coor;

    }


    const geoCenter = [18.166667, 120.75];
    // const popUpPos =[18.206159,120.377474];
    const popUpPos = townCoords();
    const zoomLevel = widthSize() < 770 ? 9 : 9.5;




    const mapStyle ={
    
        weight:1,
        color:"rgb(93,215,226)",
        fillOpacity:1,
    };

    const highlightFeature = (e) => {
        var layer = e.target;
    
        layer.setStyle({
            weight: 5,
            color: 'rgb(93,215,226)',
            dashArray: '',
            fillOpacity: 0.7
        });
    }


    const resetHighlight =(e) =>{
        var layer = e.target;
        layer.setStyle(mapStyle);

    }

  
    const onEachTown = (town, layer) =>{

  
        layer.options.fillColor = town.properties.color;
        const name = town.properties.MUNICIPALI;
        const active_cases = town.properties.activeText;
        const newActive = town.properties.newActiveText ;
        const newRecovery = town.properties.newRecoveryText ;
        const newDeath = town.properties.newDeathText ;

        
        layer.bindPopup(`<b>${name}</b><br/>
                        Active Case:${" "} ${active_cases} <br/>
                        New Active:${" "} ${newActive}<br/>
                        New Recovery:${" "} ${newRecovery}<br/>
                        New Death:${" "} ${newDeath}` ,
                        
                    
                          ); 
                
        layer.on({
               mouseover: highlightFeature,
            mouseout: resetHighlight,
                
                        })

    }

    const formatNumberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };


    const PopUpData =(towns,main,selectedTown) =>{
        var name='';
        var active_cases =0;
        var newActive = 0;
        var newRecovery = 0;
        var newDeath = 0;


        for(let i =0 ; i < towns.length; i++){
            const town = towns[i].properties
          
            if(town.MUNICIPALI === selectedTown.toUpperCase()){
                 name = town.MUNICIPALI;
                 newActive = town.activeText;
                 active_cases = town.newActiveText
                 newRecovery = town.newRecoveryText
                 newDeath = town.newDeathText
                break;
            }
          
            
        }


        const townData =(
        <div>
        <b>{name}</b><br/>
        Active Cases:{" "} {newActive} <br/>
        New Active:{" "} {active_cases}<br/>
        New Recovery:{" "} {newRecovery}<br/>
        New Death:{" "} {newDeath}`  
        </div>
        )

          //main data
        const nameMain = 'Ilocos Norte'
        const Total = formatNumberWithCommas(main.total_cases)
        const Active = formatNumberWithCommas(main.active_cases)
        const Recovery = formatNumberWithCommas(main.total_recoveries)
        const Death = formatNumberWithCommas(main.total_deaths)

        const mainDataIN =(
            <div>
            <b>{nameMain}</b><br/>
            Total Cases:{" "} {Total} <br/>
            Active:{" "} {Active}<br/>
            Recovery:{" "} {Recovery}<br/>
            Death:{" "} {Death} 
            </div>
            )

        return  ((selectedTown === "") ? mainDataIN :townData)
        
    }

    return(

        
        
        <MapContainer style={{height:"90vh"}} zoom={zoomLevel} center={geoCenter}>
        
            <GeoJSON style={mapStyle} data={towns} onEachFeature={onEachTown}  />
            <Popup position={popUpPos} >{PopUpData(towns,main,selectedTown)}</Popup>
           
     
        </MapContainer>
      
    );
};

export default CMap

