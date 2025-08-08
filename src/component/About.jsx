import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './About.css'

function About() {
  const index = useParams()
  const [product, setProduct] = useState([])
  const [subproduct, setSubProduct] = useState([])
  const [imgChange, setImgChange] = useState(0)
 

  const fechData = async () => {
    let id = index.index
    console.log(id);

    const res = await axios.get('https://dummyjson.com/products')
    if (res) {
      console.log(res.data.products[id]);
      setProduct(res.data.products[id])
      setSubProduct(res.data.products[id].images)

    }
  }

  useEffect(() => {
    fechData()
  }, [])


  const changeImg = (a) => {
    console.log(a);
    setImgChange(a)
  }

  return (
    <div className='top'>
      <div className='product-main'>
        <div className='main1'>
          <div className='main-pro'>
            <img src={subproduct[imgChange]} alt="" />
            <h2>{product.title}</h2>
          </div>
        </div>
       <div className='main-btn'>
        <button>BUY</button><button>ADD</button>
        </div>
        <div className='main-sub' >
          <div className='sub'>
            {subproduct.map((res, index) => (
              <img key={index} src={subproduct[index]} alt="" onClick={() => changeImg(index)} />
            ))}
          </div>
        </div>

      </div>
      <div className='details'>
        <div className='description'>
          <div><b>{product.title}</b> - {product.description}</div>
          <div className='price'>
            <h1>${product.price} <span>   ↓{product.discountPercentage}%</span></h1>
            <div>{product.returnPolicy}</div>
          </div>
          <div className='specification'>
            <div className='specification-head'>
              <h3>Specifications</h3>
            </div>
            <div className='specification-details'>
                <h5>Genaral</h5><br />
                <div>stronbrand : {product.brand}</div>
                <div>category : {product.category}</div>
            </div>
            <div className='specification-details'>
              <h5>Dimensions</h5><br/>
              <div>depth : {product.dimensions?.depth}</div>
              <div>height : {product.dimensions?.height}</div>
              <div>width : {product.dimensions?.width}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
