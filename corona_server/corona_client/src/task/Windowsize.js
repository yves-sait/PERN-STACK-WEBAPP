import  { useEffect, useState } from 'react';

const useWindowSize =() =>{
    const[widthSize, setWidthSize] = useState(window.innerWidth);
    useEffect(() =>{
        const handleResize = () =>{
            setWidthSize(window.innerWidth) 

        }

       window.addEventListener("resize", handleResize);

       return () =>{
           window.removeEventListener("resize",handleResize);

       };

    },[])

    // console.log(widthSize);
    return widthSize;

}

function WindowSize () {
    const width = useWindowSize();
    return width
    

}

export default WindowSize;