import React from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVirus, faHospitalUser,faUser, faCross} from '@fortawesome/free-solid-svg-icons';
import Loading from '../CovidMap/Loading';
import { styled } from '@material-ui/core/styles';



const IconWrapperStyle = styled('div')(({ theme }) => ({
    margin: 'auto',
    display: 'flex',
    borderRadius: '25%',
    alignItems: 'center',
    width: theme.spacing(8),
    height: theme.spacing(8) ,
    justifyContent: 'center',
    marginBottom: 'center',
  }));


const Cards = ({mainData,latestTown} ) =>{
    
    // console.log(mainData,"cad")
    const main = mainData[0]    


    let date ='';
    let death ='';
    let recovery ='';
    let active ='';
    let active_cases ='';
    let town_latest ='';

    if(latestTown.length !== 0){
        date = latestTown[0].report_date;
        death =latestTown[0].new_death;
        recovery =latestTown[0].new_recovery;
        active =latestTown[0].new_active;
        active_cases =  latestTown[0].active_cases;
        town_latest = latestTown[0].town_name;

    }

    if(!main ){
        return <Loading></Loading>
    }

   

   
    const mainCard = (

       <div className={styles.container}>
           <Grid container spacing={3} justifyContent="center">
                           
           <Grid item component={Card} xs={12} sm={5} md={3} lg={2} className={cx(styles.card, styles.total)}>
               <IconWrapperStyle className={styles.virus}>
               <FontAwesomeIcon icon={faVirus} />
               </IconWrapperStyle>
                   <CardContent>
                   <Typography variant ="h5" ><b>ILOCOS NORTE </b></Typography>
                       <Typography variant ="h5" >Total Cases </Typography>
                       <Typography variant= "h4" gutterBottom>
                           <CountUp start ={0} end={main.total_cases} duration={2.5} separator="," />
                        </Typography>
                       <Typography color= 'textSecondary' >{new Date(main.report_date).toDateString() }</Typography>     
                   </CardContent>
               </Grid>
               <Grid item component={Card} xs={12} sm={5} md={3} lg={2} className={cx(styles.card, styles.infected)}>
               <IconWrapperStyle className={styles.hosp}>
               <FontAwesomeIcon icon={faHospitalUser} />
               </IconWrapperStyle>
                   <CardContent>
                       <Typography variant="h5">Active </Typography>
                       <Typography variant= "h4" gutterBottom>
                           <CountUp start ={0} end={main.active_cases}  duration={2.5} separator="," />
                        </Typography>
                        <Typography ><b>New</b> </Typography>
                       <Typography variant= "h3" gutterBottom ><b>+</b>
                           <CountUp start ={0} end={main.new_active} duration={2.5} separator="," />
                        </Typography> 
                        <Typography color= 'textSecondary' >{new Date(main.report_date).toDateString() }</Typography>                        
                   </CardContent>

               </Grid>
               <Grid item component={Card} xs={12} sm={5} md={3} lg={2} className={cx(styles.card, styles.recovered)}>
               <IconWrapperStyle className={styles.user}>
               <FontAwesomeIcon icon={faUser} />
               </IconWrapperStyle>
                   <CardContent>
                       <Typography variant= "h5"  >Recoveries </Typography>
                       <Typography variant= "h4" gutterBottom >
                           <CountUp start ={0} end={main.total_recoveries} duration={2.5} separator="," />
                        </Typography>
                        <Typography><b>New</b> </Typography>
                       <Typography variant= "h3" gutterBottom><b>+</b>
                           <CountUp  start ={0} end={main.new_recovery} duration={2.5} separator="," />
                        </Typography>
                        <Typography color= 'textSecondary' >{new Date(main.report_date).toDateString() }</Typography> 
                   </CardContent>
               </Grid>
               <Grid item component={Card} xs={12} sm={5} md={3} lg={2} className={cx(styles.card, styles.deaths)}>
               <IconWrapperStyle className={styles.cross}>
               <FontAwesomeIcon icon={faCross} />
               </IconWrapperStyle>
                   <CardContent>
                       <Typography variant ="h5" >Deaths </Typography>
                       <Typography variant= "h4" gutterBottom>
                           <CountUp start ={0} end={main.total_deaths} duration={2.5} separator="," />
                        </Typography>
                        <Typography > <b>New</b> </Typography>
                       <Typography variant= "h3" gutterBottom><b>+</b>
                           <CountUp start ={0} end={main.new_death} duration={2.5} separator="," />
                        </Typography> 
                        <Typography color= 'textSecondary' >{new Date(main.report_date).toDateString() }</Typography> 
                   </CardContent>
               </Grid>


   

           </Grid>
       </div>
    );

    const townCard =(
        <div className={styles.container}>
        <Grid container spacing={3} justifyContent="center">
                        
        <Grid item component={Card} xs={12} sm={5} md={3} lg={2} className={cx(styles.card, styles.total)}>
            <IconWrapperStyle className={styles.virus}>
            <FontAwesomeIcon icon={faVirus} />
            </IconWrapperStyle>
                <CardContent>
                <Typography variant="h5"> <b>{town_latest} </b></Typography>
                    <Typography variant ="h5" >Active Cases </Typography>
                    <Typography variant= "h3" gutterBottom>
                        <CountUp start ={0} end={active_cases} duration={1} separator="," />
                     </Typography>
                    <Typography color= 'textSecondary' >{new Date(date).toDateString() }</Typography>     
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} sm={5} md={3} lg={2} className={cx(styles.card, styles.infected)}>
            <IconWrapperStyle className={styles.hosp}>
            <FontAwesomeIcon icon={faHospitalUser} />
            </IconWrapperStyle>
                <CardContent>
                
                    <Typography variant="h5">New Active </Typography>
                    <Typography variant= "h3" gutterBottom>
                        <CountUp start ={0} end={active}  duration={1} separator="," />
                     </Typography>
                               
                    <Typography color= 'textSecondary' >{new Date(date).toDateString() }</Typography>         
                </CardContent>

            </Grid>
            <Grid item component={Card} xs={12} sm={5} md={3} lg={2} className={cx(styles.card, styles.recovered)}>
            <IconWrapperStyle className={styles.user}>
            <FontAwesomeIcon icon={faUser} />
            </IconWrapperStyle>
                <CardContent>
                    <Typography variant= "h5"  >New Recoveries </Typography>
                    <Typography variant= "h3" gutterBottom >
                        <CountUp start ={0} end={recovery} duration={1} separator="," />
                     </Typography>
                    <Typography color= 'textSecondary' >{new Date(date).toDateString() }</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} sm={5} md={3} lg={2} className={cx(styles.card, styles.deaths)}>
            <IconWrapperStyle className={styles.cross}>
            <FontAwesomeIcon icon={faCross} />
            </IconWrapperStyle>
                <CardContent>
                    <Typography variant ="h5" >New Deaths</Typography>
                    <Typography variant= "h3" gutterBottom>
                        <CountUp start ={0} end={death} duration={1} separator="," />
                     </Typography>
                    <Typography color= 'textSecondary' >{new Date(date).toDateString() }</Typography>             
                </CardContent>
            </Grid>
        </Grid>
    </div>

    );

    

    return(
       
        
        (latestTown.length === 0)? mainCard : townCard
        
    )
}

export default Cards;