import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

export default function Products() {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    async function fetchProducts(){
  try{
    const res= await fetch("https://dummyjson.com/products")
    const data=await res.json()
    setProducts(data.products)
    console.log(data.products)
  }
  catch(err){
  alert('Error in fetching products')
  } 
 }
 fetchProducts();
}, [])

  return (
    <>
    {/* <div className='text-center text-4xl text-blue-800 font-bold pt-4'>Products</div><br/> */}
    <div className='ml-12 pt-4'>
    <div className='all-products flex flex-wrap gap-4'>
     {products.map(prod=>
      <ProductCard key={prod.id} title={prod.title} description={prod.description} img={prod.images[0]} price={prod.price + "$"}/>
     )} 
    </div>
  </div>
  
    </>
  )
}
