import React, { useEffect, useState } from "react"; 
import { render } from "@testing-library/react";



const CardTest = (category) => {
    const [query, setQuery] = useState('');
    const [showCategory, setShowCategory] = useState('');
  
  
    const loadData=()=>{
      setQuery(category);
    }
    
    const getData=()=>{
      setShowCategory(category)
    }
  
    useEffect(() => {
      getData();
    }, [query]);
  
    render(
        <div onLoad={loadData()}>
                <h1>This is {showCategory} </h1>
            </div>
    )        
            
        
          
    
    
      
    
  }
  export default CardTest;