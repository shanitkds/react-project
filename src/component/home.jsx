import { useEffect, useState } from 'react'
// import './App.css'
import axios from 'axios'
// import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
import './home.css'


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
    <nav className='nav'>
      <div className='nav-sub'>
        <div className='a'>Home</div>
        <div className='a'>About Us</div>
      </div>
      <div className='nav-sub'>
        {<Navbar setInput={setInput} className='nav3'/>}
      <button onClick={serch} className='btn'>search</button>
      </div>
      <div className='nav-sub'>
        <div className='b'>Cart</div>
        <div className='b'><button>Login</button></div>
      </div>
    </nav>
     <div className='main'>
      { newdata.map((val,index) => (
          <div className='cart' key={index} onClick={()=>(navigate(`/about/${index}`))}>
            <img src={val.thumbnail} alt="" />
            <h2>{val.title}</h2>
            <h4>{"$ " + val.price}</h4>
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
