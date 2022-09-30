import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import animals_avatar from '../images/animals_avatar.jpeg';



export default function AnimalCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardContent>
     <img src={animals_avatar} alt=''/>
    </CardContent>
   
  </Card>
  );
}