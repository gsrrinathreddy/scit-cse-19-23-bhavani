import {useState,useEffect} from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';
export default function Projects(){
    const [loader,setLoader] = useState(true);
    const [aboutme,setProjects] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8000/Projects')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setProjects(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])
    
    return(
        <>
    
         


         MINI PROJECT : Scalable Cloud Data Sharing With Key-Aggregation




         
         FSWD PROJECT : Alumini Management System




         
    
        </>
    )
  
}