import React from 'react'
import { useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';

export default function ItemDetails() {
  console.log(useParams());
  console.log(useSearchParams());
  const {phone} =useParams();

  return (
    
         
        <h1>this is the contact details {phone}  </h1>
    
  )
}
