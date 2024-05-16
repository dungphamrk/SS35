import React, { useState } from 'react'

interface Product{
    id:number,
    name:string,
    price:string,
    quantity:number
}
export default function BT2()  {
    const [product,setProduct]=useState<Product>({
        id:1,
        name:'cola cola',
        price:'1000$',
        quantity: 10
    })
    
  return (
    <div>
    <h1>BT2</h1>
    <p>ID: {product.id}</p>
    <p>Name: {product.name}</p>
    <p>Price: {product.price}</p>
    <p>Quantity: {product.quantity}</p>
  </div>
  )
}
