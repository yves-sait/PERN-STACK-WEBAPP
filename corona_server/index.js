const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const path = require("path")
const PORT = process.env.PORT || 5000;

//process.env.PORT
//process.env.NODE_ENV => production or undefined





//middleware

app.use(cors());
app.use(express.json()); //req.body

if(process.env.NODE_ENV === "production"){
    //server static content
    // npm run build

    app.use(express.static(path.join(__dirname,"corona_client/build")));
}

console.log(__dirname);
console.log(path.join(__dirname, "client/build"));

//Routes

app.post("/corona", async(req,res) =>{

    try {

        const{ town_name} = req.body;
        const newTown = await pool.query("INSERT INTO towns (town_name) VALUES($1) RETURNING *",
            [town_name]
        );


        res.json(newTown);
    } catch (err) {
        console.error(err.message);
        
    }

})

// get list of towns

app.get("/towns", async(req,res) =>{

    try {

        const allTowns = await pool.query("select INITCAP(town_name) as town_name from intowns");
        res.json(allTowns.rows);
        
    } catch (err) {
        console.error(err.message)
        
    }


})

// get latest main data

app.get("/main", async(req, res)=>{
    try {

        const mainData = await pool.query( "select to_char(report_date,'YYYY-MM-DD') as report_date, total_cases,active_cases,new_active,total_recoveries,new_recovery,total_deaths,new_death from main order by report_date desc LIMIT 1");
        res.json(mainData.rows)
        
        
    } catch (err) {
        console.log(err.message)
        
    }
})

// get the all the main data

app.get("/main/all", async(req,res)=>{
    try {
        const allMainData = await pool.query("select to_char(report_date,'YYYY-MM-DD') as report_date, total_cases,active_cases,new_active,total_recoveries,new_recovery,total_deaths,new_death from main");
        res.json(allMainData.rows)
        
    } catch (err) {
        console.log(err.message)
        
    }
})

// get daily data

app.get("/daily/:town", async(req,res) =>{
    try {
        const {town} = req.params;
        const dailyTown = await pool.query("select to_char(d.report_date,'YYYY-MM-DD') as report_date,t.town_name,d.active_cases,d.new_active,d.new_recovery,d.new_death from daily d join intowns t on t.id = d.town_id where t.town_name = UPPER($1) order by report_date ",[town])
        
        res.json(dailyTown.rows)
     
    } catch (err) {
        console.log(err.message)
        
    }

})

// get latest daily for map data

app.get("/map/daily", async(req,res) =>{
    try {
        const dailyMap = await pool.query("select town_name,to_char(report_date,'YYYY-MM-DD') as report_date,active_cases,new_active,new_recovery,new_death from (select t.town_name,d.*, row_number() over(partition by t.town_name order by d.report_date desc) as row_num from daily d join intowns t on t.id = d.town_id) daily_towns where row_num =1")
        res.json(dailyMap.rows)
    } catch (err) {
        console.log(err.message)
        
    }

})

// get latest town data

app.get("/latest/:town", async(req, res) =>{
    try {
        const {town} = req.params;
        const latestTown = await pool.query("select to_char(d.report_date,'YYYY-MM-DD') as report_date,t.town_name,d.active_cases,d.new_active,d.new_recovery,d.new_death from daily d join intowns t on t.id = d.town_id where t.town_name = UPPER($1) order by d.report_date desc limit 1",[town])
        res.json(latestTown.rows)
    } catch (err) {
        console.log(err.message)
        
    }
});

// * route

app.get("*",(req,res) => {

    res.sendFile(path.join(__dirname,"corona_client/build/index.html"))


})


app.listen(PORT, () =>{
    console.log(`Server has started on port ${PORT}`)
})