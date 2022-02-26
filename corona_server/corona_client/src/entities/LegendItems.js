import LegendItem from "./LegendItem";

const legendItems = [


    new LegendItem(
        "61 & above",
        "#EB6361",
        (cases) => cases >= 61 && cases <100_000,
        "white"
    ),
    new LegendItem(
        "41 - 60",
        "#FF9A94",
        (cases) => cases >= 41 && cases <61,
        "white"
        
    ),
    new LegendItem(
        "21 - 40",
        "#FFB6AE",
        (cases) => cases >= 21 && cases <41,
        "white"
        
    ),
    new LegendItem(
        "1 - 20",
        "#FFD3CA",
        (cases) => cases > 0 && cases <21,
             
    ),

    new LegendItem("0 Cases","#FFF0E6",(cases) => true,)

];

export default legendItems;

