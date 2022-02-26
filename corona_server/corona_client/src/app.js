import React from 'react';
import { Cards, Charts, CountryPicker, Covid19, Footer, Share, Youtube} from './components';
import { fetchMainData, fetchDailyTown,fetchLatestTown } from './api';
import ReactGA from 'react-ga';
import styles from './App.module.css';
import corona from './images/image.png'

class App extends React.Component{
  
    state ={
        dailyTown: [],
        town:'',
        mainData:[],
        latestTown:[],

    }


    async componentDidMount(town){
        // const fetcheddata = await fetchData();      
        const fetchedMainData = await fetchMainData(town);

        // const fmap = await fetchDailyMap();
        // console.log(fmap,"map")
        this.setState({mainData:fetchedMainData }); 

        ReactGA.initialize('UA-206508301-1');
        // To Report Page View 
        ReactGA.pageview(window.location.pathname+ town);
            // console.log(window.location.pathname + window.location.search + town);
  
        

    }
    

  
    

    handleTownChange = async (town) =>{

      
        const fetchedDailyTown = await fetchDailyTown(town);
        const fetchedLatestTown = await fetchLatestTown(town);

        ReactGA.initialize('UA-206508301-1');
    
        this.setState({dailyTown:fetchedDailyTown,town:town, latestTown:fetchedLatestTown});
        
     
        ReactGA.pageview(town);
       

       
          
        ReactGA.event({
            category: 'Town Select',
            action: 'To view specific town covid data'
          });
      
     
   
      
    }

    render(){
 
            const {dailyTown,town, mainData, latestTown} = this.state;
           
           
            // console.log(window.location.pathname + window.location.search + town)
            
        return(
            <div className={styles.container}>
                <img className={styles.image} src={corona} alt="covid-19"/>
                <h3>
                    <b>Ilocos Norte Corona Virus Dashboard</b>
                </h3>
                <h5>
                    <i>(Select city/town below)</i>
                </h5>
                <CountryPicker  handleTownChange = {this.handleTownChange}/>
                <Cards   mainData ={mainData} latestTown={latestTown} /> 
                <h5>
                    <i>(Click category to hide)</i>
                </h5>
                <Charts  dailyTown ={dailyTown} town ={town}/>
            
                <h5>
                    <i>(Click map area to show info)</i>
                </h5>
                <Covid19 mainData ={mainData} town ={town} />
                <Youtube/>
                <Share/>
                <Footer/>
                
            </div>
        )
    }
}

export default App;