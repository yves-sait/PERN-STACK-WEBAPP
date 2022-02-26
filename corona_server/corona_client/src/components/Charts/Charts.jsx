import React, { useState, useEffect } from "react";
import { fetchAllMainData } from "../../api";
import { Line } from "react-chartjs-2";
import Loading from '../CovidMap/Loading';
import styles from "./Charts.module.css";



const Charts = ({dailyTown, town}) => {


        const[allMainData, setAllMainData] = useState([]);
        useEffect(() =>{
            const fetchApi = async () =>{
                setAllMainData(await fetchAllMainData());
            }
            fetchApi();
        },[]);
    




    const lineChartMain = (
        allMainData.length?
        (
            <Line
                data ={{
                    labels: allMainData.map(({report_date}) => report_date),
                    datasets:[{
                        data: allMainData.map(({total_cases})=> total_cases),
                        label: 'Total Cases',
                        borderColor: 'rgba(123,11,46,255)  ',
                        // backgroundColor: 'rgba(253,231,217,255) ',
                        fill: true,
                    },{
                        data: allMainData.map(({active_cases})=> active_cases),
                        label: 'Active Cases',
                        borderColor: 'rgba(14,41,123,255)',
                        backgroundColor: 'rgba(207,242,255,255) ',
                        fill: true,

                    },{
                        data: allMainData.map(({total_recoveries})=> total_recoveries),
                        label: 'Recoveries',
                        borderColor: 'rgba(21,81,73,255)',
                        backgroundColor: 'rgba(200,249,204,255)  ',
                        fill: true,
                    },{
                        data: allMainData.map(({total_deaths})=> total_deaths),
                        label: 'Deaths',
                        borderColor: 'rgba(67,70,75)',
                        backgroundColor: 'rgb(219,226,233)  ',
                        fill: true,
                    }],
                } }             options={{
                    maintainAspectRatio : false
                }}
            
            />) : <Loading></Loading>
    );
            
    
    
  
    const lineChartTown = (
        dailyTown?
        (
            <Line
                data ={{
                    labels: dailyTown.map(({report_date}) => report_date),
                    datasets:[{
                        data: dailyTown.map(({active_cases})=> active_cases),
                        label: 'Active Cases',
                        borderColor: 'rgba(123,11,46,255)',
                        // backgroundColor: 'rgba(253,231,217,255) ',
        
                        fill: false,
                    },{
                        data: dailyTown.map(({new_active})=> new_active),
                        label: 'New Active',
                        borderColor: 'rgba(14,41,123,255)',
                        backgroundColor: 'rgba(207,242,255,255) ',
                        fill: true,

                    },{
                        data: dailyTown.map(({new_recovery})=> new_recovery),
                        label: 'New Recovery',
                        borderColor: 'rgba(21,81,73,255)',
                        backgroundColor: 'rgba(200,249,204,255)  ',
                        fill: true,
                    },{
                        data: dailyTown.map(({new_death})=> new_death),
                        label: 'New Death',
                        borderColor: 'rgba(67,70,75)',
                        backgroundColor: 'rgb(219,226,233)  ',
                        fill: true,
                    }],
                } }             options={{
                    maintainAspectRatio : false
                }}
            
            />) : <Loading></Loading>
    );

  return (
  <div className={styles.container}>
      {town ? lineChartTown : lineChartMain}
  </div>
  )




}

export default Charts;
