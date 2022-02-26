
// daily town data

export const fetchDailyTown = async(town) =>{

    if(town)
        {
        try {

            const response = await fetch(`/daily/${town}`);
            const dailyTown = await response.json();
            return dailyTown;        
        } catch (error) {     
            return error
        }
    } 

    return [];

 

}

//latest town data

export const fetchLatestTown = async(town) =>{
    if(town)
    {
    try {

        const response = await fetch(`/latest/${town}`);
        const latestTown = await response.json();
        return latestTown;        
    } catch (error) {     
        return error
        
    }}

    return [];
}



export const fetchMainData = async(town) =>{

    try {
        const response = await fetch(`/main`);
        const mainData = await response.json();
        return mainData;

        
    } catch (error) {
        return error
        
    }
    

   

}


// all main data api call

export const fetchAllMainData = async()=>{
    try {

        const response = await fetch(`/main/all`);
        const allMainData = await response.json()
        return allMainData;
        
    } catch (error) {
        return error
        
    }
}


// all daily map data

export const fetchDailyMap = async() =>{
    try {

        const response = await fetch(`/map/daily`);
        const dailyMap = await response.json();
        return dailyMap;
        
    } catch (error) {
        return error
        
    }
}



export const fetchTowns = async () =>{
    try{
      
        const response = await fetch(`/towns`);
        const jsonData = await response.json();
        return jsonData;

    }catch(error){
        return error;
    } 
}

