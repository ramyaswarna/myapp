import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function Content() {
  const [products,setProducts] = useState([])
  const url = "https://backend-ue11.onrender.com"

  const getData = async () => {
    const response = await axios.get(url)
    setProducts(response.data)
  }

  const deleteProduct = async (id) => {
    await axios.delete(url+id)
    getData()
  }
  useEffect(()=>{
    getData()
  }, [])
  // const products = [
  //   {name: "Product 1", price:340, url:"https://picsum.photos/id/1/200/300"},
  //   {name: "Product 2", price:359,url:"https://picsum.photos/id/2/200/300"},
  //   {name: "Product 3", price:360,url:"https://picsum.photos/id/3/200/300"}
  // ]
  return (
    <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
      {products.map((value,index) => (
        <div key={index} style={{backgroundColor:'pink', margin:'10px', padding:'10px'}}>
          <img src={value.url} alt=''></img>
        <h2>{value.name}</h2>
        <h3>Rs.{value.price}</h3>
        <h4>{value.desc}</h4>
        <button>Add to cart</button> 
        <button onClick={()=>deleteProduct(value._id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}
