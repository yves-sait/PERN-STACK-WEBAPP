import React from 'react';

const Legend = ({legendItems}) => {
    return ( 
        <div className="legend" style={{
            display:'flex',
            alignItems:'stretch',}} 
        >
      {legendItems.map((item) => (
        <div
          className = "legendBlock"
          key={item.title}
          style={{
            backgroundColor: item.color,
            flex: 1,
            display: "flex",
            alignItems: "center", // vertical
            justifyContent: "center", // horiztontal
            color: item.textColor != null ? item.textColor : "black",
            fontWeight: "bolder",
            fontSize: "1em",
            height: "8vh",
          }}
        >
          <span>{item.title}</span>
        </div>
      ))}

        </div>
     );
};
 
export default Legend;