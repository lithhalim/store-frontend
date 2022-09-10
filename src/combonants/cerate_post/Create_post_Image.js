import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

import axios from 'axios';
let datause=[]


function Create_post_Image({getimagesection}) {
    const [showImage,setShowImage]=useState([])


    const getimage=async(e)=>{
        //get the file i will uolodad
        let file=e.target.files[0]

        //create new Form data to can upload on cloudaniry
        const formData = new FormData();

        formData.append("file",file);
        //Upload presets {"lobdevu9"} from cloudinary for unsiged name 
        formData.append('upload_preset', 'lobdevu9');
        
        //upload the data on cloudnary https://api.cloudinary.com/v1_1/{cloud name}/upload
       const uploadOnClodinary=await axios.post("https://api.cloudinary.com/v1_1/dhcqosl5z/upload",formData).then((alldata)=>{
        const {public_id,url}=alldata.data
        setShowImage((olddata)=>([...olddata,{public_id:public_id,url:url}]))
        datause.push(url)

        getimagesection(datause)
        
       })

    }    

  return (
    <div className='container-section'> 
        <Stack direction="row" alignItems="center" className='upload-image-container'>
            <IconButton color="primary" aria-label="upload picture" component="label">
                <input hidden accept="image/*" type="file" onChange={getimage}/>
                <PhotoCamera sx={{fontSize:"4em",color:"silver"}} />
            </IconButton>
        </Stack>
        <img src={datause[0] }  style={{width:"150px"}}/>

    </div>
)
}

export default Create_post_Image
