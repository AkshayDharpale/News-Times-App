import './App.css';

import React, {useState } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



export default function App() {
  
  const [progress, setProgress] = useState(0);
  const [MyCountry, setMyCountry] = useState("in");
  const [MyCountryName, setMyCountryName] = useState("INDIA")

  const setLoadingBarProgress = (progress) =>{
      setProgress(progress)
  }

  const changingCountry = (country) => {
     console.log("country clicked is "  + country);
     setMyCountry(country);


     switch (country) {
       case "in":
         setMyCountryName("INDIA")
         
         break;

       case "us":
          setMyCountryName("AMERICA")
                    
          break;

           case "jp":
           setMyCountryName("JAPAN")
                   
         break;

         case "de":
          setMyCountryName("GERMANY")
                  
         break;

         case "kr":
          setMyCountryName("KOREA")
                  
         break;
     
       default:
         setMyCountryName("FRANCE")
        
         break;
     }
  }
  
    return (
      <div>

        <Router>
            <Navbar toggleMode={changingCountry} countryName={MyCountryName}/>
             <LoadingBar
                color='#f11946'
                height={3}	
                progress={progress}
              />  
           
                <Routes>

                    <Route exact path="/" element={<News  setProgress={setLoadingBarProgress}  key="general" pageSize = {6} country = {MyCountry} category = "general" />}/>
                    <Route exact path="/entertainment" element={<News  setProgress={setLoadingBarProgress}  key="entertainment" pageSize = {6} country = {MyCountry} category = "entertainment" />}/>
                    <Route exact path="/business" element={<News  setProgress={setLoadingBarProgress}  key="business" pageSize = {6} country = {MyCountry} category = "business" />}/>
                    <Route exact path="/health" element={<News  setProgress={setLoadingBarProgress}  key="health" pageSize = {6} country = {MyCountry} category = "health"/>} />
                    <Route exact path="/science" element={<News  setProgress={setLoadingBarProgress}  key="science" pageSize = {6} country = {MyCountry} category = "science"/>} />
                    <Route exact path="/sports" element={<News  setProgress={setLoadingBarProgress}   key="sports" pageSize = {6} country = {MyCountry} category = "sports" />} />
                    <Route exact path="/technology" element={<News  setProgress={setLoadingBarProgress}  key="technology" pageSize = {6} country = {MyCountry} category = "technology"/>} />

                </Routes>
               
       </Router>
           
        
      </div>
    )
  
}

