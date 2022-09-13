import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import "../../catagory-page/catagory.css"

export default function MultiActionAreaCard({dataUse}) {

    const {Name_Product,catagories,country,description,id,image,price}=dataUse
    console.log(dataUse)

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Name_Product}
          </Typography>
          <ul className='element-custom'>

            <li>
                <div className='element-icon'>
                    <span style={{fontWeight:"bold"}}>Catagoties:</span>{catagories}
                    <span  style={{fontWeight:"bold"}}>Description:</span>{description}
                </div>
            </li>
                
            <li>
                <div className='element-icon'>
                        <span style={{fontWeight:"bold"}}>price:</span>{price}
                        <span  style={{fontWeight:"bold"}}>country:</span>{country}
                </div>
            </li>

          </ul>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
