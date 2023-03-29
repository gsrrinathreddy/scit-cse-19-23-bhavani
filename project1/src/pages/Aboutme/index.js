// import ICard from "../../components/ICard"
// import Grid from '@mui/material/Grid';

// export default function Aboutme(){
//     const pics = ['1']
//     return(
//         <>
//         This is About me


//         <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12}}>
//             {
//                 pics.map((pic)=>{
//                     return  <Grid item xs={2} sm={4} md={2}>
//                     <ICard/>
//                     </Grid>
//                 })
//             }
           
         
//         </Grid>
//         </>
//     )
  
// }
import { Typography } from '@mui/material';

export default function Aboutme(){
    return(
        <>
<Typography>Name: CHINTHA.BHAVANI</Typography>
<Typography>Father Name: CHINTHA.MALLESH</Typography>
<Typography>Mother Name: CHINTHA.SHASHIKALA</Typography>
<Typography>Email: cbhavani445@gmail.com</Typography>
<Typography>Phone No.: 8688275014</Typography>
        </>
        
    )
    }