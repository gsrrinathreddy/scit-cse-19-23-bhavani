import ICard from "../../components/ICard"
import Grid from '@mui/material/Grid';
import {useState,useEffect} from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';

export default function Certifications(){
    const [loader,setLoader] = useState(true);
    const [aboutme,setCertifications] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8000/Certifications')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setCertifications(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])
    const pics = ['1']
    return(
        <>
        


        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12}}>
            {
                pics.map((pic)=>{
                    return  <Grid item xs={2} sm={4} md={2}>
                    <ICard/>
                    </Grid>
                })
            }
           
         
        </Grid>
        </>
    )
  
}