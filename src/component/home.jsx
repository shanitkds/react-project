import { useEffect, useState } from 'react'
// import './App.css'
import axios from 'axios'
// import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
import './home.scss'


function Home({input,setInput}) {
  console.log(input);

  const [count, setCount] = useState([])
const [newdata,setNewData] = useState([])
const [nodata,setNoData] = useState('')
const [error,setError]=useState('')
const [tre,seTrue]=useState(false)
const navigate=useNavigate()

  const fechData = async () => {
    
    try{
      const res = await axios.get('https://dummyjson.com/products')

    if (res) {
      console.log(res.data.products);
      setCount(res.data.products)
    }

    }catch(err){
         console.log("error");
         setError('⚠️ Network Error. Please check your internet connection.')
         
    }
    

  }

  const serch=()=>{
      // console.log(input);
      const filterData=count.filter((val)=>val.title.toLowerCase().includes(input.toLowerCase()))
       if (filterData.length>0) {
        setNewData(filterData)
        // setNoData('')
        setInput('')
        seTrue(true)
       }else{
         setNewData([]);
         setNoData('No Data In This!')
         setInput('')
         console.log(nodata);
         
       }
      
     
  }

  useEffect(() => {
    fechData();
  }, [])
  
 useEffect(() => {
  setNewData(count); 
}, [count]);
  

  return (
    <>
    <nav className=' flex justify-between bg-amber-300'>
      <div className='flex '>
        <div className='mx-8 my-2'>Home</div>
        <div className='mx-8 my-2'>About Us</div>
      </div>
      <div className='flex'>
        {<Navbar setInput={setInput} className='bg-white'/>}
      <button onClick={serch} className='mx-8 my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-7 rounded'>search</button>
      </div>
      <div className='flex '>
        <div className='mx-8 my-2'>Cart</div>
        <div className='mx-8 my-2'><button>Login</button></div>
      </div>
    </nav>
     <div className='flex flex-wrap gap-x-8 main'>
      { newdata.map((val,index) => (
          <div className='cart' key={index} onClick={()=>(navigate(`/about/${index}`))}>
            <img src={val.thumbnail} alt=""   className='aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-100'/>
            <h2 className='font-sans font-bold'>{val.title}</h2>
            <h4 className='font-bold'>{"$ " + val.price}</h4>
          </div>
      ))

      }
      {}
       <div className="error">{error}</div>
      <div><h1>{nodata}</h1></div>
      </div>
    </>
  )
}

export default Home
